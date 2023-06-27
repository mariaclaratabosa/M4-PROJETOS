import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { createCourseSchema } from "../schemas/courses.schemas";
import {
  addUserToCourseController,
  createCourseController,
  deleteUserFromCourseController,
  listenCoursesController,
  listenUsersInCourseController,
} from "../controllers/courses.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureAdminTokenMiddleware } from "../middlewares/ensureAdminToken.middleware";

export const courseRouter: Router = Router();

courseRouter.post(
  "",
  ensureDataIsValidMiddleware(createCourseSchema),
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  createCourseController
);

courseRouter.post(
  "/:courseId/users/:userId",
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  addUserToCourseController
);

courseRouter.get("", listenCoursesController);

courseRouter.get(
  "/:id/users",
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  listenUsersInCourseController
);

courseRouter.delete(
  "/:courseId/users/:userId",
  ensureTokenIsValidMiddleware,
  ensureAdminTokenMiddleware,
  deleteUserFromCourseController
);
