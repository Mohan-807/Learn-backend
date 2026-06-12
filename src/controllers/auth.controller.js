// src/controllers/auth.controller.js

import * as authService from "../services/auth.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const register = async (
  req,
  res
) => {
  const user =
    await authService.register(
      req.validatedData
    );

  return successResponse(
    res,
    user,
    "User registered successfully"
  );
};

export const getCurrentUser = async (
  req,
  res
) => {
  const {
    iat,
    exp,
    ...user
  } = req.user;

  return successResponse(
    res,
    user,
    "Current user fetched"
  );
};

export const login = async (
  req,
  res
) => {
  const result =
    await authService.login(
      req.validatedData
    );

  return successResponse(
    res,
    result,
    "Login successful"
  );
};