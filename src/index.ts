import express, {Application, NextFunction, Request, Response, Router}  from "express";
import morgan from "morgan";

import userRouter from './routes/user' ;

const app: Application = express();

app.use(morgan('dev'));

app.use("/users", userRouter);

const PORT: any = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});