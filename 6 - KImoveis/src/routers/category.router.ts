import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoryControllers } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.uniqueCategory,
  middlewares.validateBody(categoryCreateSchema),
  categoryControllers.create
);

categoryRouter.get("", categoryControllers.read);

categoryRouter.get(
  "/:id/realEstate",
  middlewares.verifyCategoryIdExists,
  categoryControllers.retrieve
);
