
// Instruments
import { products } from '../odm';

export class Products {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await products.find().lean();

        return data;
    }

    async findByHash(val) {
        const data = await products
            .findOne({ hash: val.hash }).lean();

        return data;
    }

    async findById(pid) {
        const data = await products
            .findById({ _id: pid }).lean();
        
        return data;
    }

    async findByIdAndUpdateCount(pid, count) {
        const data = await products
            .findByIdAndUpdate({ _id: pid },
                { total: count},
                { new: true }).lean();

        return data;
    }

    async updateByHash(val) {
        const productUpdate = {
            ...this.data,
        };

        const data = await products
            .findOneAndUpdate(
                { hash: val.hash },
                productUpdate,
                { new: true },
            ).lean();


        return data;
    }

    async removeByHash(val) {
        await products
            .findOneAndDelete({ hash: val.hash }).lean();
    }


    async create() {
        const product = {
            ...this.data,
        };
        const data = await products.create(product);

        return data;
    }
}
