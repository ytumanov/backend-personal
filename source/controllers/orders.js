import { Orders as OrdersModel } from '../models';
import { Products as ProductsModel } from '../models';

export class Orders {
    constructor(data) {
        this.data = data;
        this.models = {
            orders:   new OrdersModel(data),
            products: new ProductsModel(data),

        };
    }

    async find() {
        const data = await this.models.orders.find();

        return data;
    }

    async findByHash(hash) {
        const data = await this.models.orders.findByHash(hash);

        return data;
    }

    async updateByHash(hash) {
        const { pid, count} = this.data;
        const order = await this.models.orders.findByHash(hash);

        if (pid !== order.pid.toString()) {
            throw new Error('Not allowed update product id in order');
        }

        const product = await this.models.products.findById(order.pid);

        if (product.total + order.count < count) {
            throw new Error(`Not enough items at the store, only ${product.total + order.count} available, but ${count} requested`);
        }
        await this.models.products.findByIdAndUpdateCount(pid, product.total + order.count - count);


        const data = await this.models.orders.updateByHash(hash);

        return data;
    }

    async removeByHash(hash) {
        const data = await this.models.orders.removeByHash(hash);

        return data;
    }

    async create() {
        const {pid, count} = this.data;
        const product = await this.models.products.findById(pid);
        if (product.total < count) {
            throw new Error(`Not enough items at the store, only ${product.total} available, but ${count} requested`);
        }
        await this.models.products.findByIdAndUpdateCount(pid, product.total - count);

        const data = await this.models.orders.create();
        

        return data;
    }
}
