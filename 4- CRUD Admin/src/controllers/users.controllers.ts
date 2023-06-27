import { listUsersCoursesService } from "./../services/users/listUserCourses.services";
import { Request, Response } from "express";
import { createUserService } from "../services/users/createUsers.services";
import { UserRead } from "../interfaces/users.interface";
import { listUsersService } from "../services/users/listUsers.services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await listUsersService()
  return res.status(200).json(users)
}

const listenUserCoursesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const coursesUser = await listUsersCoursesService(req.params.id);
  return res.status(200).json(coursesUser);
};


export {
  createUserController,
  listUsersController,
  listenUserCoursesController,
};
