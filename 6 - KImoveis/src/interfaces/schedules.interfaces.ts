import { z } from "zod";
import { scheduleCreate, scheduleCreateSchema, scheduleReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleCreateSchema = z.infer<typeof scheduleCreate>
type ScheduleRead = z.infer<typeof scheduleReadSchema>;
type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleCreateSchema, ScheduleRead, ScheduleRepo };
