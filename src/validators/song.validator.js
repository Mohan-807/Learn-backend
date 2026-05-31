// src/validators/song.validator.js

import { z } from "zod";

export const searchSongSchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "Song name is required"),
});