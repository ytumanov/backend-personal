// Core
import dg from 'debug';

// Instruments
 import { Orders } from '../../../controllers';

const debug = dg('router:orders:order');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const orders = new Orders();
        const hash = req.params;
        const data = await orders.findByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const orders = new Orders(req.body);
        const hash = req.params;
        const data = await orders.updateByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const orders = new Orders();
        const hash = req.params;
        await orders.removeByHash(hash);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
