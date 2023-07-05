import { Address, Category, RealEstate } from "../entities";
import {
  RealEstateCreate,
  TRealEstate,
} from "../interfaces";
import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";

const create = async (
  payload: RealEstateCreate
): Promise<RealEstate | null> => {

  const address: Address = addressRepository.create(payload.address!);
  await addressRepository.save(address);

  const category: Category | null = await categoryRepository.findOneBy({
    id: payload.categoryId,
  });

  const payloadCreated = { ...payload, address: address, category: category! };

  const realEstate: RealEstate = realEstateRepository.create(payloadCreated)
  await realEstateRepository.save(realEstate)

  return realEstate;
};

const read = async (): Promise<Array<RealEstate>> => {
  const realEstates: Array<RealEstate> | null = await realEstateRepository
    .createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.address", "addresses")
    .getMany();

  return realEstates;
};

export default { create ,read };
