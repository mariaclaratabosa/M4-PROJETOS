import { hash } from "bcryptjs";
import {
  UserRequest,
  UserResult,
  UserReturn,
} from "../../interfaces/users.interface";
import format from "pg-format";
import { client } from "../../database";
import { userWithoutPassword } from "../../schemas/users.schemas";

export const createUserService = async (
  userData: UserRequest
): Promise<UserReturn> => {
  userData.password = await hash(userData.password, 10);

  const queryString: string = format(
    `INSERT INTO users (%I) VALUES (%L) RETURNING *;`,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: UserResult = await client.query(queryString);
  return userWithoutPassword.parse(queryResult.rows[0]);
};
