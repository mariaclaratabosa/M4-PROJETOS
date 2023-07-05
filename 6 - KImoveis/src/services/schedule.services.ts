import { RealEstate, Schedule } from "../entities";
import { ScheduleCreate, ScheduleCreateSchema } from "../interfaces";
import { realEstateRepository, scheduleRepository } from "../repositories";

const create = async (
  payload: ScheduleCreate,
  userId: number
): Promise<string> => {
  const payloadCreated: ScheduleCreateSchema = { ...payload, userId: userId };

  const schedule: Schedule = scheduleRepository.create(payloadCreated)
  await scheduleRepository.save(schedule)

  return "Schedule created"
};

const read = async (realEstateId: number): Promise<RealEstate | null> => {
  const realEstate: RealEstate | null = await realEstateRepository
    .createQueryBuilder("realEstate")
    .where("realEstate.id = :realEstateId", {
      realEstateId: realEstateId,
    })
    .leftJoinAndSelect("realEstate.address", "addresses")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("realEstate.category", "categories")
    .leftJoinAndSelect("schedules.user", "user")
    .getOne();

  return realEstate;
};

export default { create, read };
