import { z } from "zod";
import {
  addressCreateSchema,
  addressSchema,
  categorySchema,
} from "../schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false).nullable(),
  value: z.number().or(z.string()),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    address: z.object({
      street: z.string().max(45),
      zipCode: z.string().max(8),
      number: z.string().max(7).nullish(),
      city: z.string().max(20),
      state: z.string().max(2),
    }),
    categoryId: z.number().int(),
  });

const realEstateReturnSchema = realEstateSchema.extend({
  address: addressSchema,
  category: categorySchema,
});

const realEstateReadSchema = realEstateSchema.array();

export {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
};
