import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import songRoutes from "./song.routes.js";
import AppError from "../utils/AppError.js";
import authRoutes from "./auth.routes.js";

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health Check
 *     description: Verify server is running
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is healthy
 */

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

router.use(
  "/songs",
  songRoutes
);

router.use("/auth", authRoutes);

router.get("/error-test",asyncHandler(async (req, res) => { throw new AppError("Test error"); }));

export default router;