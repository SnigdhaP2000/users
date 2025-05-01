import express, { Request, Response } from 'express';
import { tenantMiddleware } from "../middlewares/tenantMiddleware";
import UserController from "../controllers/userController";

const router = express.Router();
const userController = new UserController();

router.get('/healthcheck', tenantMiddleware, userController.healthCheck);


export default router;