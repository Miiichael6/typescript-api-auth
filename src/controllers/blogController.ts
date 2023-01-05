import { Request, Response } from "express";
import handleHttp from "../utils/errorHandler";

const getItem = (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const getItems = (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const postItem = (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const deleteItem = (_req: Request, res: Response) => {
  try {
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export { getItem, getItems, deleteItem, postItem };
