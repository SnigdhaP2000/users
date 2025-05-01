import express, { Request, Response } from 'express';
import { tenantMiddleware } from "../middlewares/tenantMiddleware";
import UserController from "../controllers/userController";

const router = express.Router();
const userController = new UserController();
const baseUrl = "/api/v1/users/";
router.get(`${baseUrl}healthcheck`, tenantMiddleware, userController.healthCheck);


export default router;