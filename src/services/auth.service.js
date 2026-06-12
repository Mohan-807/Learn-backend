// src/services/auth.service.js
import { userResponseDto } from "../dto/user.dto.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const register = async (userData) => {
  const hashedPassword = await bcrypt.hash(
    userData.password,
    10
  );

  const user = {
    id: 1,
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
    role: "user",
  };

  return userResponseDto(user);
};

export const login = async (
  loginData
) => {

  const token = generateToken({
    id: 1,
    email: loginData.email,
    role: "user",
  });

  return {
    token,
  };
};