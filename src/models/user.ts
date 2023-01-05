import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "Soy la description"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = model("users", userSchema);
export default userModel;
