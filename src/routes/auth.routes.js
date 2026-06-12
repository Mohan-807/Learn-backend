import { Router } from "express";

import {
  register,
  login,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import asyncHandler from "../utils/asyncHandler.js";
import validate from "../middleware/validate.middleware.js";
import authenticate from "../middleware/auth.middleware.js";

import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mohan
 *               email:
 *                 type: string
 *                 format: email
 *                 example: mohan@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post(
  "/register",
  validate(registerSchema, "body"),
  asyncHandler(register)
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: mohan@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 */
router.post(
  "/login",
  validate(loginSchema, "body"),
  asyncHandler(login)
);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get Current User
 *     description: Returns the currently authenticated user's information.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Mohan
 *                 email:
 *                   type: string
 *                   example: mohan@gmail.com
 *                 role:
 *                   type: string
 *                   example: user
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.get(
  "/me",
  authenticate,
  asyncHandler(getCurrentUser)
);

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get Logged-in User Profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: Mohan
 *                     email:
 *                       type: string
 *                       example: mohan@gmail.com
 *                     role:
 *                       type: string
 *                       example: user
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/profile",
  authenticate,
  asyncHandler(async (req, res) => {
    res.json({
      user: req.user,
    });
  })
);
export default router;