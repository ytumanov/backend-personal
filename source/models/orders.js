
// Instruments
import { orders } from '../odm';

export class Orders {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await orders.find().lean();

        return data;
    }

    async findByHash(val) {
        const data = await orders
            .findOne({ hash: val.hash }).lean();

        return data;
    }

    async updateByHash(val) {
        const productUpdate = {
            ...this.data,
        };

        const data = await orders
            .findOneAndUpdate(
                { hash: val.hash },
                productUpdate,
                { new: true },
            ).lean();


        return data;
    }

    async removeByHash(val) {
        await orders
            .findOneAndDelete({ hash: val.hash }).lean();
    }


    async create() {
        const order = {
            ...this.data,
        };
        const data = await orders.create(order);

        return data;
    }
}
