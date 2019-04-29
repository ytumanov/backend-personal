// Core
import bcrypt from 'bcrypt';

// Instruments
import { customers } from '../odm';

export class Customers {
    constructor(data) {
        this.data = data;
    }

    async login() {
        const { email, password } = this.data;

        const res = await customers
            .findOne({ 'emails.email': email });

        if (res === null) {
            return null;
        }

        const { hash, password: userPassword } = await customers
            .findOne({ 'emails.email': email })
            .select('password hash')
            .lean();

        const match = await bcrypt.compare(password, userPassword);

        if (!match) {
            throw new Error('Credentials are not valid');
        }

        return hash;
    }

    async find() {
        const data = await customers.find().lean();

        return data;
    }

    async create() {
        const customer = {
            ...this.data,
        };
        const data = await customers.create(customer);

        return data;
    }

    async findByHash(val) {
        const data = await customers
            .findOne({ hash: val.hash }).lean();

        return data;
    }

    async updateByHash(val) {
        const customerUpdate = {
            ...this.data,
        };

        const data = await customers
            .findOneAndUpdate(
                { hash: val.hash },
                customerUpdate,
                { new: true },
            ).lean();


        return data;
    }

    async removeByHash(val) {
        await customers
            .findOneAndDelete({ hash: val.hash }).lean();
    }
}
