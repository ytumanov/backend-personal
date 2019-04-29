// Core
import mongoose from 'mongoose';
import { customers, products } from './';
import {hashPlugin} from '../helpers/plugins/hash';

// Document shape

const schema = new mongoose.Schema({
    uid: {
        type:     mongoose.SchemaTypes.ObjectId,
        required: true,
        unique:   true,
        validate: {
            validator(id) {
                return customers.findById(id).lean();
            },
            message: ({ value }) => `Customer with id '${value}' does not exist in customers collection`,
        },
    },
    pid: {
        type:     mongoose.SchemaTypes.ObjectId,
        required: true,
        unique:   true,
        validate: {
            validator(id) {
                return products.findById(id).lean();
            },
            message: ({ value }) => `Product with id '${value}' does not exist in products collection`,
        },
    },
    count: {
        type:     Number,
        required: true,
    },
    comment: String,
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified',
    },
});

mongoose.plugin(hashPlugin);

// Collection
export const orders = mongoose.model('orders', schema);
