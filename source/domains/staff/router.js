// Core
import express from 'express';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

// Handlers
import * as staff from './';

route.get('/', [ authenticate ], staff.get);
route.post('/', staff.post);

export { route as staff };
