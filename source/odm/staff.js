// Core
import mongoose from 'mongoose';
import v4 from 'uuid/v4';

// Document shape
const schema = new mongoose.Schema(
    {
        email: {
            type:     String,
            required: true,
            unique:   true,
        },
        hash: {
            type:    String,
            index:   true,
            default: () => v4(),
        },
        password: {
            type:     String,
            select:   false,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

// Collection
export const users = mongoose.model('staff', schema);
