// Core
import express from 'express';

// Instruments
import { authenticateStaff } from '../../helpers';

const route = express.Router();

// Handlers
import * as staff from './';

route.get('/', [ authenticateStaff ], staff.get);
route.post('/', staff.post);

export { route as staff };
