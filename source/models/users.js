// Core
import bcrypt from 'bcrypt';

// Instruments
import { users } from '../odm';

export class Users {
    constructor(data) {
        this.data = data;
    }

    async register() {
        const { email, password } = this.data;
        const hashedPassword = await bcrypt.hash(password, 11);

        await users.create({ email, password: hashedPassword });

        return true;
    }

    async login() {
        const { email, password } = this.data;
        const { hash, password: userPassword } = await users
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
