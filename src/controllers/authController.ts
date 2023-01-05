import { Request, Response } from "express";
import { loginUser, registrarNewUser } from "../services/auth.services";
import handleHttp from "../utils/errorHandler";

export const registrarUsuario = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const responseUser = await registrarNewUser(data);

    return res.send(responseUser);
  } catch (error: any) {
    return handleHttp(res, error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const responseUser = await loginUser(req.body);

    res.send({ responseUser });
  } catch (error) {
    return handleHttp(res, error);
  }
};
