// src/services/search.service.js
import * as scraperService from "./scraper.service.js";
import logger from "../config/logger.js";

export const searchSongs = async (
  songName
) => {
  const results =
    await scraperService.searchAllSources(
      songName
    );

  return results;
};