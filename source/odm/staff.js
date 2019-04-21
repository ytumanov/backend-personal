// Core
import mongoose from 'mongoose';
import { parents } from './parents';

// Document shape
const schema = new mongoose.Schema({
    role: {
        type:     String,
        required: true,
    },
    disabled: Boolean,

});

// model
export const staff = parents.discriminator(
    'staff',
    schema,
);
