import { Response } from "express";
import handleHttp from "../utils/errorHandler";
import userModel from "../models/user";
import { RequestExt } from "../interfaces/req-ext.interface";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    const id = req.user?.id;
    const userName = await userModel.findById(id);

    return res.send(userName);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export { getItems };
