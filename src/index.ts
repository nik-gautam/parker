import express, { Application, NextFunction, Request, Response, Router } from "express";
import morgan from "morgan";
import mongoose = require("mongoose");

const MONGO_URI: string = "mongodb+srv://nik:nik@parker-o0oad.mongodb.net/db?retryWrites=true&w=majority";

import userRouter from './routes/user';
import parkingRouter from './routes/parking';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use("/users", userRouter);
app.use("/park", parkingRouter);

const PORT: any = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
    else {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`);
        });
    }
})
