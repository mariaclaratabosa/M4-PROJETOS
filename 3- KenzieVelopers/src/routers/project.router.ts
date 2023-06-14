import { Router } from "express";
import middlewares from "../middlewares";
import { projectsController } from "../controllers";

const projectRouter: Router = Router()

projectRouter.post("/", middlewares.verifyDeveloperIdBody, projectsController.create);
projectRouter.use("/:id", middlewares.verifyProjectIdParams);
projectRouter.get("/:id", projectsController.retrieve);
projectRouter.patch("/:id",  middlewares.verifyDeveloperIdBody, projectsController.update);

export default projectRouter;