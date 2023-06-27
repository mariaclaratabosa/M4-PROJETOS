import { client } from "../../database";
import { AppError } from "../../errors";
import { UserCourseResult } from "../../interfaces/userCourse.interfaces";
import { UserResult } from "../../interfaces/users.interface";

export const deleteUserFromCourseService = async (
  courseId: number,
  userId: number
): Promise<void> => {
  const queryUserResult: UserResult = await client.query(
    `SELECT id FROM users WHERE id = $1;`, 
    [userId]
)
const queryCourseResult: UserCourseResult = await client.query(
    `SELECT id FROM courses WHERE id = $1;`, 
    [courseId]
)
if(queryUserResult.rowCount > 0 && queryCourseResult.rowCount > 0){
    await client.query(
        ` UPDATE "userCourses" SET active=false WHERE "courseId" = $1 AND "userId" = $2;`, [courseId, userId]
    )
} else {
    throw new AppError("User/course not found", 404)
}
};
