import { sign, verify } from "jsonwebtoken";
import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../.env") });
const JWT_SECRET = process.env.JWT_SECRET || "token.0.0.0.0";

export const JWTGenerator = (id: string) => {
  const jsonwebtoken = sign({ id: id }, JWT_SECRET, { expiresIn: "2h" });

  return jsonwebtoken;
};

export const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
