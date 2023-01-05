import itemModel from "../models/Item";
import { ICar } from "../interfaces/car.interface";

const insertCar = async (item: ICar) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await itemModel.find();

  return responseItem;
};

const getAnCar = async (id: string) => {
  const response = await itemModel.findById(id);

  return response;
};

const updateCar = async (id: string, data: ICar) => {
  const response = await itemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return response;
};

const deleteCar = async (id: string) => {
  const response = await itemModel.remove({ _id: id });
  return response;
};

export { insertCar, getCars, getAnCar, updateCar, deleteCar };
