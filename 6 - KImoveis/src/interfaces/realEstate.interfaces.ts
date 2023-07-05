import { z } from "zod";
import { realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema, realEstateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>
type RealEstateRepo = Repository<RealEstate>;
type TRealEstate = z.infer<typeof realEstateSchema>

export { RealEstateCreate, RealEstateRead, RealEstateRepo, RealEstateReturn, TRealEstate };
