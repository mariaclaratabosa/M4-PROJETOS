import { client } from "../../database";
import { CourseRead, CourseResult } from "../../interfaces/courses.interfaces";
import { courseReadSchema } from "../../schemas/courses.schemas";

export const listCoursesServices = async (): Promise<CourseRead> => {
    const queryResult: CourseResult = await client.query(
        `SELECT * FROM courses;`
    )
    return courseReadSchema.parse(queryResult.rows)
}