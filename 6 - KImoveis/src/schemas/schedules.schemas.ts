import { z } from "zod";
import { userSchema } from "./user.schemas";
import { realEstateSchema } from "./realEstate.schema";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true
});

const scheduleCreate = scheduleSchema.omit({
  id: true
})

const scheduleReadSchema = scheduleSchema.array();
const scheduleUpdateSchema = scheduleCreateSchema.partial();

export {
  scheduleSchema,
  scheduleCreateSchema,
  scheduleReadSchema,
  scheduleUpdateSchema,
  scheduleCreate,
};
