import { NextFunction, Request, Response } from "express";
import { market } from "./database";
import { TProductOmit } from "./interface";

const ensureProductExistsMiddlware = (request: Request, response: Response, next: NextFunction): Response | void => {
  const { id } = request.params;
  const productIndex: number = market.findIndex((element): boolean => element.id === Number(id));
  if (productIndex === -1) {
    const error: string = "Product not found"
    return response.status(404).json({error});
  }
  response.locals.productIndex = productIndex;
  return next();
};

const ensureNameExistsMiddleware = (request: Request, response: Response, next: NextFunction): Response | void => {
  const products: TProductOmit[] = request.body;
  let productFounded: boolean = false;
  if (request.method === "POST") {
    productFounded = products.some((product) => market.find((element) => element.name === product.name));
  } else if (request.method === "PATCH") {
    const productName = request.body.name;
    productFounded = market.some((product):boolean => product.name === productName);
  }
  if (productFounded) {
    return response.status(409).json({ error: "Product already registered" });
  }
  return next();
};

export { ensureProductExistsMiddlware, ensureNameExistsMiddleware }
