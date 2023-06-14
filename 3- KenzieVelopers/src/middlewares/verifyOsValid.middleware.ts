import { NextFunction, Request, Response } from "express";
import AppError from "../error";

const verifyOsValid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {preferredOS} = req.body
    if(preferredOS != "Windows" && preferredOS != "Linux" && preferredOS != "MacOS"){
        throw new AppError ("Invalid OS option", 400)
    }
    return next()
}
export default verifyOsValid;