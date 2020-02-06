import {Request, Response, NextFunction} from "express";

import Parking from "../models/parking";

// GET /park/getall -> will return all existing users from DB
export let getAllParking = (req:Request, res:Response, next: NextFunction) => {
    Parking.find({}, (err, result) => {
        if(!err) {
            res.json({
                success: true,
                result
            });
        } else {
            res.json({
                success: false,
                err
            });
        }
    })
}

// POST /park/postparkingreg -> to add a new parking space in DB
export let postAddParking = (req:Request, res:Response, next: NextFunction) => {
    let park = req.query;

    Parking.find({parking_name: park.name}, (err, result) => {
        if(!err) {
            if(!result) {
                const newPark = new Parking({
                    parking_name: park.name,
                    max: parseInt(park.max),
                    geometry: {
                        coordinates: [parseFloat(park.long), parseFloat(park.lat)]
                    },
                    parking: []
                });
            }
        }
    });
}