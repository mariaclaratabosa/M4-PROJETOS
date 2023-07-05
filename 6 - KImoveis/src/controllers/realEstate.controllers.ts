import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstate | null = await realEstateServices.create(
    req.body
  );
  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstates: Array<RealEstate> = await realEstateServices.read();
  return res.status(200).json(realEstates);
};

export default { create, read };
