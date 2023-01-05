import { Response } from "express";

const handleHttp = (res: Response, error: any) => {
  const statusErr= Number(error.status) || 404
  const errorMsg = error.message
  console.log(errorMsg);

  return res.status(statusErr).send({ error: errorMsg });
};

export default handleHttp;
