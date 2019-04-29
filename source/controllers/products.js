import { Products as ProductsModel } from '../models';

export class Products {
    constructor(data) {
        this.models = {
            products: new ProductsModel(data),
        };
    }

    async find() {
        const data = await this.models.products.find();

        return data;
    }

    async findByHash(hash) {
        const data = await this.models.products.findByHash(hash);

        return data;
    }

    async updateByHash(hash) {
        const data = await this.models.products.updateByHash(hash);

        return data;
    }

    async removeByHash(hash) {
        const data = await this.models.products.removeByHash(hash);

        return data;
    }

    async create() {
        const data = await this.models.products.create();

        return data;
    }
}
