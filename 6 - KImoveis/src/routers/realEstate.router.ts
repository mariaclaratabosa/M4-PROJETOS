import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";
import { realEstateControllers } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.uniqueAddress,
  realEstateControllers.create
);

realEstateRouter.get("", realEstateControllers.read)
