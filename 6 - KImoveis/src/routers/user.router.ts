import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
);

userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userControllers.read
);

userRouter.use(
  "/:id",
  middlewares.verifyIdExists,
  middlewares.verifyToken,
);

userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  middlewares.isAdminOrOwner,
  userControllers.update
);

userRouter.delete("/:id", middlewares.isAdmin, userControllers.destroy);
