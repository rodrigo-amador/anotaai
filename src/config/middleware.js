import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./logger.js";
import compression from "compression";
import helmet from "helmet";

class Middleware {
    async init(app) {
        try {
            app.set("port", 3000);
            app.set("json spaces", 4);
            app.use(morgan("common", {
                stream: {
                    write: (message) => {
                        logger.info(message);
                    }
                }
            }));
            app.use(helmet());
            app.use(cors({
                "origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
                "preflightContinue": false,
                "optionsSuccessStatus": 204
            }));
            app.use(compression());
            app.use(bodyParser.json({ limit: '500mb', extended: true }));
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use((req, res, next) => {
                // remove qualquer id que possa estar sendo inserido na requisição
                delete req.body.id;
                next();
            });
            app.use(express.static("public"));
        } catch (error) {
            logger.error(`[${new Date()}] [Middleware.init] -> Error when starting Middlewares: ${error.message}`)
        }
    }
}

export default Middleware