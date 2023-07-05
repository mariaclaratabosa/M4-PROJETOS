import { verifyRealEstateIdExists } from "./../middlewares/verifyRealEstateIdExists.middleware";
import { Router } from "express";
import middlewares from "../middlewares";
import { schedulesControllers } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.verifyRealEstateIdExists,
  middlewares.uniqueUserSchedule,
  middlewares.verifyHour,
  middlewares.verifyDay,
  middlewares.uniqueSchedule,
  schedulesControllers.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.verifyRealEstateIdExists,
  schedulesControllers.read
);
