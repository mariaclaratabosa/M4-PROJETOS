import { z } from "zod";
import { courseReadSchema, courseSchema, createCourseSchema } from "../schemas/courses.schemas";
import { QueryResult } from "pg";

type Course = z.infer<typeof courseSchema>;
type CourseRequest = z.infer<typeof createCourseSchema>;
type CourseRead = z.infer<typeof courseReadSchema>
type CourseResult = QueryResult<Course>;

export { Course, CourseRequest, CourseRead, CourseResult };
