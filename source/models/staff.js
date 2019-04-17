// Core
import bcrypt from 'bcrypt';

// Instruments
import { staff } from '../odm';

export class Staff {
    constructor(data) {
        this.data = data;
    }

    async register() {
        const { email, password } = this.data;
        const hashedPassword = await bcrypt.hash(password, 11);

        const { hash } = await staff.create({ email, password: hashedPassword });

        return hash;
    }

    async login() {
        const { email, password } = this.data;
        const { hash, password: userPassword } = await staff
            .findOne({ email })
            .select('password hash')
            .lean();

        const match = await bcrypt.compare(password, userPassword);

        if (!match) {
            throw new Error('Credentials are not valid');
        }

        return hash;
    }
}
