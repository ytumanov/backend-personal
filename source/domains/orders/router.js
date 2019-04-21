// Core
import express from 'express';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

// Handlers
import * as orders from './';
import * as orderHash from './order';

route.get('/', [ authenticate ], orders.get);
route.post('/', [ authenticate ], orders.post);

route.get('/:hash', [ authenticate ], orderHash.get);
route.put('/:hash', [ authenticate ], orderHash.put);
route.delete('/:hash', [ authenticate ], orderHash.remove);

export { route as orders };
