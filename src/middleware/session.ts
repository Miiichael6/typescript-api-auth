import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext.interface";
import { JWTGenerator, verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ")[1]; // 11111
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      return res.status(401).send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e: any) {
    console.log({ e: e.message });
    res.status(400);
    res.send("SESSION_NO_VALIDAD");
  }
};

export { checkJwt };
