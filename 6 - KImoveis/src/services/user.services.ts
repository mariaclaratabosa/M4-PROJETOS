import { AppDataSource } from "../data-source";
import { User } from "../entities";
import {
  UserCreate,
  UserRead,
  UserRepo,
  UserReturn,
  UserUpdate,
} from "../interfaces";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema, userUpdatedReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const read = async (admin: boolean): Promise<UserRead> => {
  if (admin) {
    const users: Array<User> = await userRepository.find();
    return userReadSchema.parse(users);
  }
  return userReadSchema.parse(await userRepository.find());
};

const update = async (userId: string, payload: UserUpdate) => {
  const repo: UserRepo = AppDataSource.getRepository(User);
  const userFound = await userRepository.findOneBy({id: Number(userId)})
  const user = await repo.save({ ...userFound, ...payload })
  return userUpdatedReturnSchema.parse(user);
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, update, destroy };
