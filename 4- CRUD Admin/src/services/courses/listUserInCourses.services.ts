import { client } from "../../database";
import { UserCourseUsage } from "../../interfaces/userCourse.interfaces";

export const listUsersInCourseService = async (
  payload: number
): Promise<UserCourseUsage[]> => {
  const queryString: string = `
    SELECT
    uc."userId" "userId",
    u.name "userName",
    uc."courseId" "courseId",
    c.name "courseName",
    c.description "courseDescription",
    uc.active "userActiveInCourse"
    FROM
    "userCourses" uc
    LEFT JOIN courses c
    ON c.id = uc."courseId"
    INNER JOIN users u
    ON u.id = uc."userId"
    WHERE
    "courseId" = $1;
    `;
  const queryResult = await client.query(queryString, [payload]);
  return queryResult.rows;
};
