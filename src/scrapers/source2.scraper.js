import { createSongResult } from "../utils/songMapper.js";

export const search = async (
  songName
) => {
  return [
   createSongResult( {
      title: songName,
      source: "Source 2",
      quality: "128kbps",
    }),
  ];
};