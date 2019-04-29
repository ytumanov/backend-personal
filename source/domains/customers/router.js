// Core
import express from 'express';

// Instruments
import { authenticateCustomer } from '../../helpers';
import { authenticateStaff } from '../../helpers';

const route = express.Router();

// Handlers
import * as customers from './';
import * as customerHash from './customer';

route.get('/', [ authenticateStaff ], customers.get);
route.post('/', customers.post);

route.get('/:hash', [ authenticateCustomer ], customerHash.get);
route.put('/:hash', [ authenticateCustomer ], customerHash.put);
route.delete('/:hash', [ authenticateCustomer ], customerHash.remove);

export { route as customers };
