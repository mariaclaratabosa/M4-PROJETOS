import { client } from "../../database";
import { AppError } from "../../errors";

export const listUsersCoursesService = async (userId: string) => {
  
  const queryString: string = `
    SELECT
    u."id" "userId",
    u."name" "userName",
    u."email" "userEmail",
    u."admin" "userAdmin",
    c."name" "courseName",
    c."id" "courseId",
    c."description" "courseDescription",
    uc."userId" "userId",
    uc."active" "userActiveInCourse"
    FROM users u
    JOIN "userCourses" uc
    ON u.id = uc."userId"
    JOIN courses c
    ON c.id = uc."courseId"
    WHERE u.id = $1;
    `;

  const queryResult = await client.query(queryString, [userId]);

  if (queryResult.rowCount === 0) {
    throw new AppError("No course found", 404);
  };

  return queryResult.rows;
};
