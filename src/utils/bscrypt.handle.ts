import bscryptjs from "bcryptjs";

export const encrypt = async (password: string) => {
  let passwordHasheada = await bscryptjs.hash(password, 10);

  return passwordHasheada;
};

export const verified = async (password: string, hashedPassword: string) => {
  let confirmPassword = await bscryptjs.compare(password, hashedPassword);

  return confirmPassword
};
