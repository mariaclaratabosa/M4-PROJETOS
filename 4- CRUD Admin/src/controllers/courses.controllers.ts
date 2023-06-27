import { Request, Response } from "express";
import { createCourseService } from "../services/courses/createCourse.services";
import { addUserToCourseService } from "../services/courses/addUserToCourse.services";
import { deleteUserFromCourseService } from "../services/courses/deleteUserFromCourse.services";
import { CourseRead } from "../interfaces/courses.interfaces";
import { listCoursesServices } from "../services/courses/listCourses.services";
import { listUsersInCourseService } from "../services/courses/listUserInCourses.services";

const createCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCourse = await createCourseService(req.body);
  return res.status(201).json(newCourse);
};

const addUserToCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { courseId, userId } = req.params;
  await addUserToCourseService(courseId, userId);
  return res
    .status(201)
    .json({ message: "User successfully vinculed to course" });
};

const listenCoursesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const courses: CourseRead = await listCoursesServices();
  return res.status(200).json(courses);
};

const listenUsersInCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const usersInCourse = await listUsersInCourseService(+req.params.id);
  return res.status(200).json(usersInCourse);
};

const deleteUserFromCourseController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserFromCourseService(+req.params.courseId, +req.params.userId);
  return res.status(204).json();
};

export {
  createCourseController,
  addUserToCourseController,
  listenCoursesController,
  listenUsersInCourseController,
  deleteUserFromCourseController,
};
