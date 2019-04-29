// Core
import bcrypt from 'bcrypt';

// Instruments
import { staff } from '../odm';

export class Staff {
    constructor(data) {
        this.data = data;
    }

    async login() {
        const { email, password } = this.data;

        const res = await staff
            .findOne({ 'emails.email': email });
        
        if (res === null) {
            return null;
        }

        const { hash, password: userPassword } = await staff
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
        const data = await staff.find().lean();

        return data;
    }

    async create() {
        const st = {
            ...this.data,
        };
        const data = await staff.create(st);

        return data;
    }
}
