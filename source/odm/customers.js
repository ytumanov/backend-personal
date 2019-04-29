// Core
import mongoose from 'mongoose';
import { parents } from './parents';

// Document shape
const schema = new mongoose.Schema({
    city: {
        type:  String,
        index: true,
    },
    country: String,

});

schema.index({ 'name.first': 'text', 'name.last': 'text', city: 'text', country: 'text' });

// model
export const customers = parents.discriminator(
    'customers',
    schema,
);
