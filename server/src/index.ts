/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import { profilesRouter } from "./profiles/profiles.router";
 
 dotenv.config();

/**
 * App Variables
 */
// Check if env variables are loaded
 if (!process.env.PORT) {
    process.exit(1);
 }
 const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use("/api/menu/profiles", profilesRouter);

/**
 * Server Activation
 */

 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });   