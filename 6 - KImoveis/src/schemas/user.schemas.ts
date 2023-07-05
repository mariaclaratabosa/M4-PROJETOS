import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userReturnSchema = userSchema.omit({ password: true });

const userUpdatedReturnSchema = userSchema.omit({
  password: true,
});

const userUpdateSchema = userSchema.omit({id: true, admin: true}).partial();

const userReadSchema = userReturnSchema.array();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userReadSchema,
  userUpdateSchema,
  userUpdatedReturnSchema
};
