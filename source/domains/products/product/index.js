// Core
import dg from 'debug';

// Instruments
import { Products } from '../../../controllers';

const debug = dg('router:products:product');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const products = new Products();
        const hash = req.params;
        const data = await products.findByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const put = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const products = new Products(req.body);
        const hash = req.params;
        const data = await products.updateByHash(hash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const remove = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const products = new Products();
        const hash = req.params;
        await products.removeByHash(hash);
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
