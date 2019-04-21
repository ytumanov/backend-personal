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
    name: {
        first: {
            type:     String,
            required: true,
        },
        last: {
            type:     String,
            required: true,
        },
    },
    emails: [
        {
            email: {
                type:   String,
                unique: true,
            },
            primary: Boolean,
        },
    ],
    phones: [
        {
            phone:   String,
            primary: Boolean,
        },
    ],
    password: {
        type:     String,
        required: true,
        select:   false,
    },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified',
    },
});

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const parents = mongoose.model('parents', schema);
