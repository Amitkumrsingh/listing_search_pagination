import { Router } from 'express';
import { getBatches } from '../controllers/batchController.js';

const router = Router();

router.get('/', getBatches);

export default router;
