import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { handleErrors } from "./errors";
import { userRouter } from "./routers/users.routes";
import { sessionRouter } from "./routers/session.routes";
import { courseRouter } from "./routers/courses.routes";

const app: Application = express();
app.use(json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/courses", courseRouter);
app.use(handleErrors);

export default app;
