import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";
import { AddressCreate } from "../interfaces";

export const uniqueAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address: AddressCreate = req.body.address;
  if (!address) return next();

  if(!address.number) address.number = ""

  const foundEntity: Address | null = await addressRepository.findOne({
    where: {
      street: address.street,
      zipCode: address.zipCode,
      number: address.number,
      city: address.city,
      state: address.state,
    },
  });

  if (foundEntity) throw new AppError("Address already exists", 409);

  return next();
};
