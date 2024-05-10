import { UserModel } from "../models/index.js";
import APIError from "../utils/ApiError.js";

const getUserFromId = async(userId) => {
    const user = await UserModel.findById(userId);
    if(!user)
        throw new APIError("Invalied User Id")
    return user;
}

export {
    getUserFromId
}