// Core
import dg from 'debug';

// Instruments
import { Staff, Customers } from '../../controllers';

const debug = dg('router:auth');

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        if (!req.headers.authorization) {
            throw new Error('credentials are not valid');
        }

        const [ , credentials ] = req.headers.authorization.split(' ');
        const [ email, password ] = Buffer.from(credentials, 'base64')
            .toString()
            .split(':');

        const staff = new Staff({ email, password });
        let hash = await staff.login();
        let userType = 'staff';

        if (hash === null) {
            const customer = new Customers({ email, password });
            hash = await customer.login();
            userType = 'customer';
        }

        req.session.user = { hash, type: userType };
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
