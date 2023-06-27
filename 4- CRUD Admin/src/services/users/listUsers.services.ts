import { client } from "../../database";
import { UserRead, UserResult } from "../../interfaces/users.interface";
import { userReadSchema } from "../../schemas/users.schemas";

export const listUsersService = async (): Promise<UserRead> => {
  const queryResult: UserResult = await client.query(`SELECT * FROM users;`);
  return userReadSchema.parse(queryResult.rows);
};
