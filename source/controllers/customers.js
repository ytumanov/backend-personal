import { Customers as CustomerModel } from '../models';

export class Customers {
    constructor(data) {
        this.models = {
            customers: new CustomerModel(data),
        };
    }

    async login() {
        const data = await this.models.customers.login();

        return data;
    }

    async find() {
        const data = await this.models.customers.find();

        return data;
    }

    async create() {
        const data = await this.models.customers.create();

        return data;
    }

    async findByHash(hash) {
        const data = await this.models.customers.findByHash(hash);

        return data;
    }

    async updateByHash(hash) {
        const data = await this.models.customers.updateByHash(hash);

        return data;
    }

    async removeByHash(hash) {
        const data = await this.models.customers.removeByHash(hash);

        return data;
    }
}
