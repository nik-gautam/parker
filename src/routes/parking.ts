import express from "express";

import * as parkingController from "../controllers/parking";

const parkingRouter = express.Router();

// GET /park/getall -> will return all existing users from DB
parkingRouter.get('/getall', parkingController.getAllParking);

// POST /park/postparkingreg -> to add a new parking space in DB
parkingRouter.get('/postparkingreg', parkingController.postAddParking);

export default parkingRouter;