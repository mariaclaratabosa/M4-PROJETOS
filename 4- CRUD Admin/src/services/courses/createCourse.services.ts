import format from "pg-format";
import { client } from "../../database";
import {
  Course,
  CourseRequest,
  CourseResult,
} from "../../interfaces/courses.interfaces";

export const createCourseService = async (
  courseData: CourseRequest
): Promise<Course> => {
  const queryString: string = format(
    `INSERT INTO courses (%I) VALUES (%L) RETURNING *;`,
    Object.keys(courseData),
    Object.values(courseData)
  );

  const queryResult: CourseResult = await client.query(queryString);
  return queryResult.rows[0];
};
