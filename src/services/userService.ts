import express,{ Request } from 'express';
import { CustomRequest } from "../middlewares/tenantMiddleware";

export default class TaskService {
    public healthCheck = async (req: CustomRequest)=> {
        const {tenantDb}=req;
        const result =await tenantDb.query("SELECT NOW()");
        return result;
    }
}