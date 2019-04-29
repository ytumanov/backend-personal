// Core
import dg from 'debug';
import bcrypt from 'bcrypt';

// Instruments
import { Staff } from '../../controllers';

const debug = dg('router:staff');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const staff = new Staff();
        const data = await staff.find();

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
        const staff = new Staff(body);
        const data = await staff.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};