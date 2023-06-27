import { z } from "zod";
import {
  userCourse,
  userCourseUsageRead,
  userCourseCreate,
  userCourseUsage,
  userCourseRead,
} from "../schemas/userCourses.schemas";
import { QueryResult } from "pg";

type UserCourse = z.infer<typeof userCourse>;
type UserCourseCreate = z.infer<typeof userCourseCreate>;
type UserCourseRead = z.infer<typeof userCourseRead>;
type UserCourseResult = QueryResult<UserCourse>;

type UserCourseUsage = z.infer<typeof userCourseUsage>;
type UserCourseUsageRead = z.infer<typeof userCourseUsageRead>;
type UserCourseUsageResult = QueryResult<UserCourseUsage>;

export {
  UserCourse,
  UserCourseCreate,
  UserCourseRead,
  UserCourseResult,
  UserCourseUsage,
  UserCourseUsageRead,
  UserCourseUsageResult,
};
