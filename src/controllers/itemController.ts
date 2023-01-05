import { Request, Response } from "express";
import {
  deleteCar,
  getAnCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item.services";
import handleHttp from "../utils/errorHandler";

const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getAnCar(id);

    return res.send(result);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();

    return res.send(response);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const postItem = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const resultItem = await insertCar(data);

    return res.send(resultItem);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;

  try {
    const resultItem = await updateCar(id, data);

    return res.send(resultItem);
  } catch (error: any) {
    handleHttp(res, error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await deleteCar(id);

    return res.send({ msg: "correctly eliminated", result });
  } catch (error: any) {
    handleHttp(res, error);
  }
};

export { getItem, getItems, deleteItem, postItem, updateItem };
