import express from "express";

import * as userController from "../controllers/user";

const userRouter = express.Router();

userRouter.get('/get', userController.getUsers)

export default userRouter;