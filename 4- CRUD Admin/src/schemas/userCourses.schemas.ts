import { z } from "zod";

const userCourse = z.object({
  id: z.number().positive(),
  active: z.boolean().default(() => true),
  userId: z.number(),
  courseId: z.number(),
});

const userCourseCreate = userCourse.omit({ id: true });
const userCourseRead = userCourse.array();

const userCourseUsage = z.object({
  courseId: z.number().positive(),
  courseName: z.string(),
  courseDescription: z.string(),
  userActive: z.boolean().default(() => true),
  userId: z.number().positive(),
  userName: z.string(),
});

const userCourseUsageRead = userCourseUsage.array();

export {
  userCourse,
  userCourseCreate,
  userCourseRead,
  userCourseUsage,
  userCourseUsageRead,
};
