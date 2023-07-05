import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";

export const uniqueUserSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = res.locals.user.id;
  const date: Date | string = req.body.date;
  const hour: Date | string = req.body.hour;

  const userSchedules: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.userId = :userId", { userId: id })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (userSchedules) throw new AppError("User schedule to this real estate at this date and time already exists", 409);

  return next();
};
