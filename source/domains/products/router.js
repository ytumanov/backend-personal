// Core
import express from 'express';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

// Handlers
import * as products from './';
import * as productHash from './product';

route.get('/', [ authenticate ], products.get);
route.post('/', products.post);

route.get('/:hash', productHash.get);
route.put('/:hash', [ authenticate ], productHash.put);
route.delete('/:hash', [ authenticate ], productHash.remove);

export { route as products };
