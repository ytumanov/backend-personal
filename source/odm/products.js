// Core
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: {
        type:     String,
        required: true,
        unique:   true,
        index:    true,
    },
    title: {
        type:     String,
        required: true,
    },
    description: String,
    price:       {
        type:     Number,
        required: true,
    },
    discount: Number,
    total:    {
        type:     Number,
        required: true,
    },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified',
    },
});


// Collection
export const products = mongoose.model('products', schema);
