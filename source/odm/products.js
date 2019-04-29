// Core
import mongoose from 'mongoose';
import {hashPlugin} from '../helpers/plugins/hash';

// Document shape
const schema = new mongoose.Schema({
    title: {
        type:     String,
        required: true,
    },
    description: String,
    price:       {
        type:     Number,
        required: true,
        min:      0,
    },
    discount: {
        type: Number,
        min:  0,
        max:  50,
    },
    total: {
        type:     Number,
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified',
    },
});

mongoose.plugin(hashPlugin);


// Collection
export const products = mongoose.model('products', schema);
