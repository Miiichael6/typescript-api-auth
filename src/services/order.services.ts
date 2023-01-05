import { ICar } from "../interfaces/car.interface";
import itemModel from "../models/Item";

const getOrders = async (item: ICar) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
};


export {getOrders}