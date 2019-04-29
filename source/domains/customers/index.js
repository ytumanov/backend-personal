// Core
import dg from 'debug';
import bcrypt from 'bcrypt';

// Instruments
import { Customers } from '../../controllers';

const debug = dg('router:customers');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customers = new Customers();
        const data = await customers.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const body = req.body;
        body.password = await bcrypt.hash(body.password, 11);
        const customers = new Customers(body);
        const data = await customers.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};