import { Request, Response } from "express";
import { ICleaningProduct, IFoodProduct, IProduct, TProductOmit } from "./interface";
import { market } from "./database";

const createProduct = (request: Request, response: Response): Response => {
  const products: TProductOmit[] = request.body;
  const productId = () => {
    return market.length > 0 ? market[market.length -1].id + 1 : 1;
  };
  const newProductsList = products.map((product) => {
    const newProduct: IProduct | ICleaningProduct | IFoodProduct = {
      id: productId(),
      ...product,
      expirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    };
    market.push(newProduct);
    return newProduct;
  });
  market.sort((a, b) => a.id - b.id);
  const total = market.reduce((sum, value) => sum + value.price, 0);
  return response.status(201).json({ total, marketProducts: newProductsList });
};

const readProduct = (request: Request, response: Response): Response => {
  const total = market.reduce((sum, value) => sum + value.price, 0);
  return response.status(200).json({ total, marketProducts: market });
};

const readProductById = (request: Request, response: Response):Response => {
  const productIndex = response.locals.productIndex;
  return response.json(market[productIndex]);
};

const updateProduct = (request: Request, response: Response): Response => {
  const productsInfo: TProductOmit = request.body;
  const productIndex = response.locals.productIndex;

  market[productIndex] = {
    ...market[productIndex],
    ...productsInfo,
  };

  const updatedProduct = market[productIndex];
  return response.status(200).json(updatedProduct);
};

const deleteProduct = (request: Request, response: Response):Response => {
  const productIndex = response.locals.productIndex;
  market.splice(productIndex, 1);
  return response.status(204).send();
};

export { createProduct, readProduct, readProductById, updateProduct, deleteProduct }
