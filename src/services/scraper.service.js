import { scrapers } from "../scrapers/index.js";

export const searchAllSources = async (
  songName
) => {
  const results = await Promise.allSettled(
    scrapers.map((scraper) =>
      scraper.search(songName)
    )
  );

  return results.flat();
};