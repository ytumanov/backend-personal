// Core
import dg from 'debug';

// Instruments
import { Customers } from '../../../controllers';

const debug = dg('router:customers:customer');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customers = new Customers();
        const hash = req.params;
        const data = await customers.findByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customers = new Customers(req.body);
        const hash = req.params;
        const data = await customers.updateByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const customers = new Customers();
        const hash = req.params;
        await customers.removeByHash(hash);

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
