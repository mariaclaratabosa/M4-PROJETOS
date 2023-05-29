import express, { Application, json } from "express";
import { ensureNameExistsMiddleware, ensureProductExistsMiddlware } from "./middlewares";
import { createProduct, deleteProduct, readProduct, readProductById, updateProduct } from "./logics";

const app: Application = express();
app.use(json());

app.post("/products", ensureNameExistsMiddleware, createProduct);
app.get("/products", readProduct);
app.get("/products/:id", ensureProductExistsMiddlware, readProductById);
app.patch("/products/:id", ensureNameExistsMiddleware, ensureProductExistsMiddlware, updateProduct);
app.delete("/products/:id", ensureProductExistsMiddlware, deleteProduct);

const PORT: number = 3000;
const runningMsg: string = `Server is running on http://localhost:${PORT}`;
app.listen(PORT, () => console.log(runningMsg));
