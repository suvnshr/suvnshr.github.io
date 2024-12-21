// Extracts image paths from a string
export function extractImagePaths(inputString) {
  const regex =
    /(?:https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|svg))|(?:\/[^\s]*\.(?:jpg|jpeg|png|gif|bmp|svg))/gi;
  const imagePaths = inputString.match(regex);
  return imagePaths || [];
}
