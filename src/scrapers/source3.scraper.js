import { createSongResult } from "../utils/songMapper.js";

export const search = async (
  songName
) => {
  return [
    createSongResult({
      title: songName,
      source: "Source 3",
      quality: "320kbps",
    }),
  ];
};