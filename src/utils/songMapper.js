export const createSongResult = ({
  title,
  artist = null,
  source,
  quality = null,
  downloadUrl = null,
  thumbnail = null,
}) => {
  return {
    title,
    artist,
    source,
    quality,
    downloadUrl,
    thumbnail,
  };
};