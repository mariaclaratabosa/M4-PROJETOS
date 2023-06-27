import { QueryResult } from "pg";
import { z } from "zod";
import {
  createUserSchema,
  userReadSchema,
  userSchema,
  userWithoutPassword,
} from "../schemas/users.schemas";

type User = z.infer<typeof userSchema>;
type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof userWithoutPassword>;
type UserRead = z.infer<typeof userReadSchema>;
type UserResult = QueryResult<User>;

export { User, UserRequest, UserReturn, UserRead, UserResult };
