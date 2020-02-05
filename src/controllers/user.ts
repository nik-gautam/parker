import {Request, Response, NextFunction} from "express";

export let getUsers = (req:Request, res:Response, next: NextFunction) => {
    res.json({
        sucess: true,
        msg: "All users alive and well"
    })
}