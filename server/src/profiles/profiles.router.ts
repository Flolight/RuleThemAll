/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as ProfileService from "./profiles.service";
 import { Profile } from "./profile.interface";

/**
 * Router Definition
 */
 export const profilesRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items
profilesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const profiles: Profile[] = await ProfileService.findAll();
  
      res.status(200).send(profiles);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id