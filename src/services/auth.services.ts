import userModel from "../models/user";
import { IUser } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bscrypt.handle";
import { JWTGenerator } from "../utils/jwt.handle";

export const registrarNewUser = async (authUser: IUser) => {
  const checkIs = await userModel.findOne({ email: authUser.email });

  if (checkIs) throw new Error("el Usuario ya existe");

  const passHash = await encrypt(authUser.password);

  const registerNewUser = await userModel.create({
    email: authUser.email,
    password: passHash,
    name: authUser.email,
  });

  return registerNewUser;
};

export const loginUser = async (authUser: IUser) => {
  const checkIs = await userModel.findOne({ email: authUser.email });
  if (!checkIs) throw new Error("el usuario no está registrado");

  const passwordHash = checkIs.password;
  const isCorrect = await verified(authUser.password, passwordHash);

  if (!isCorrect) throw new Error("contraseña incorrecta");

  const token = JWTGenerator(checkIs._id.toString());

  const data = {
    token,
    user: checkIs,
  };

  return data;
};
