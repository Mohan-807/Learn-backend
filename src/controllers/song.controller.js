// src/controllers/song.controller.js

import * as searchService from "../services/search.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const searchSongs = async (
  req,
  res
) => {
  const { q } = req.validatedData;

  const songs =
    await searchService.searchSongs(q);

  return successResponse(
    res,
    songs,
    "Songs fetched successfully"
  );
};