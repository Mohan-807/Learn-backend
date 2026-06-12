// src/routes/song.routes.js

import { Router } from "express";
import { searchSongs } from "../controllers/song.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
import validate from "../middleware/validate.middleware.js";
import { searchSongSchema } from "../validators/song.validator.js";

const router = Router();

/**
 * @swagger
 * /api/songs/search:
 *   get:
 *     tags:
 *       - Songs
 *     security:
 *       - bearerAuth: []
 *     summary: Search songs
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Song name to search
 *     responses:
 *       200:
 *         description: Songs fetched successfully
 *       400:
 *         description: Invalid request
 */
router.get(
  "/search",
  validate(searchSongSchema),
  asyncHandler(searchSongs)
);

export default router;