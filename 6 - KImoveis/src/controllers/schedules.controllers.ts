import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.id;
  const schedule: string = await scheduleServices.create(req.body, id);
  return res.status(201).json({ message: schedule });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstateId: number = res.locals.realEstate.id;
  const schedules: RealEstate | null = await scheduleServices.read(
    realEstateId
  );

  return res.status(200).json(schedules);
};

export default { create, read };
