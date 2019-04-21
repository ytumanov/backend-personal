// Core
import express from 'express';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

// Handlers
import * as customers from './';
import * as customerHash from './customer';

route.get('/', [ authenticate ], customers.get);
route.post('/', customers.post);

route.get('/:hash', [ authenticate ], customerHash.get);
route.put('/:hash', [ authenticate ], customerHash.put);
route.delete('/:hash', [ authenticate ], customerHash.remove);

export { route as customers };
