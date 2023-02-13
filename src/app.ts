import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import router from "./router/router";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(router);

export = app
