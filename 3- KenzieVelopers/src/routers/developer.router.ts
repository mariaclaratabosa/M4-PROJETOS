import { Router } from "express";
import {
  developersControllers,
  developerInfosControllers,
} from "../controllers";
import middlewares from "../middlewares";

const developerRouter: Router = Router();
developerRouter.post(
  "/",
  middlewares.uniqueEmail,
  developersControllers.create
);
developerRouter.use("/:id", middlewares.verifyDeveloperIdParams);
developerRouter.get("/:id", developersControllers.retrieve);
developerRouter.delete("/:id", developersControllers.destroy);
developerRouter.patch(
  "/:id",
  middlewares.uniqueEmail,
  developersControllers.update
);
developerRouter.post(
  "/:id/infos",
  middlewares.verifyInfosExists,
  middlewares.verifyOsValid,
  developerInfosControllers.create
);

export default developerRouter;
