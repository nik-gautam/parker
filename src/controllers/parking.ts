import { Request, Response, NextFunction } from "express";

import Parking from "../models/parking";

// GET /park/getall -> will return all existing users from DB
export let getAllParking = (req: Request, res: Response, next: NextFunction) => {
    Parking.find({}, (err, result) => {
        if (!err) {
            res.json({
                success: true,
                result
            });
        } else {
            res.status(404).json({
                success: false,
                err
            });
        }
    })
}

// POST /park/postparkingreg -> to add a new parking space in DB
export let postAddParking = (req: Request, res: Response, next: NextFunction) => {
    let park = req.body;

    Parking.find({ parking_name: park.name }, (err, result) => {
        if (!err) {
            if (result.length == 0) {
                const newPark = new Parking({
                    parking_name: park.name,
                    max: park.max,
                    geometry: {
                        coordinates: [parseFloat(park.long), parseFloat(park.lat)]
                    },
                    parking: []
                });

                newPark.save().then((result) => {
                    res.json({
                        success: true,
                        uid: newPark._id,
                        msg: "Parking space added Sucessfully"
                    });
                }).catch(err => {
                    res.status(404).json({
                        success: false,
                        msg: "Failed to add Parking space",
                        err
                    });
                });
            } else {
                res.status(404).json({
                    success: false,
                    uid: result[0]._id,
                    msg: "Parking space already exits",
                });
            }
        } else {
            res.status(404).json({
                success: false,
                err
            });
        }
    });
}

// GET /park/getvehicle-> returns all vehicle in parking slot

// POST /park/postaddvehicle-> to add a new vehicle in parking slot  

// GET /park/checkempty-> will check if a parking slot is empty in given time
