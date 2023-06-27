import { Router } from "express";
import { sessionController } from "../controllers/session.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { sessionSchema } from "../schemas/session.schemas";

export const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  ensureDataIsValidMiddleware(sessionSchema),
  sessionController
);
