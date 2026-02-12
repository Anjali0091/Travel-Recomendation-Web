import { Router } from "express";
import RecommendationController from '../controllers/recommendationController.js';

const router = Router();
const recommendationController = new RecommendationController();

router.get('/recommendations', recommendationController.getRecommendations);
router.post('/recommendations', recommendationController.createRecommendation);

export default router;
