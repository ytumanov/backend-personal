// Core
import dg from 'debug';

// Instruments
//import { Staff } from '../../controllers';

const debug = dg('router:staff');

export const get = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const data = {};

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};