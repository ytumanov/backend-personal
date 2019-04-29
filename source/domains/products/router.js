// Core
import express from 'express';

// Instruments
import { authenticateStaff } from '../../helpers';

const route = express.Router();

// Handlers
import * as products from './';
import * as productHash from './product';

route.get('/', products.get);
route.post('/', [ authenticateStaff ], products.post);

route.get('/:hash', productHash.get);
route.put('/:hash', [ authenticateStaff ], productHash.put);
route.delete('/:hash', [ authenticateStaff ], productHash.remove);

export { route as products };
