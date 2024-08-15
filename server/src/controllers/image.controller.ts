import { Request, Response } from "express";
import { getImagesFromApi, getFromCache, appendToCache } from "../services";
import { HTTP_STATUS_CODE } from "../constants";

const RANDOM_IMAGE_CACHE_KEY = "images-cache";

export const getRandomImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { limit } = req.query as unknown as { limit: number };
  try {
    if (!limit) {
      res
        .status(HTTP_STATUS_CODE.BAD_REQUEST)
        .send("Limit query parameter is required");
      return;
    }

    let images = (await getFromCache(RANDOM_IMAGE_CACHE_KEY)) || [];

    if (images.length < limit) {
      const delta = limit - images.length;

      const newImages = await getImagesFromApi(delta);
      await appendToCache(RANDOM_IMAGE_CACHE_KEY, newImages);
      images = images.concat(newImages);
    }

    res.status(HTTP_STATUS_CODE.OK).json({ images: images.slice(0, limit) });
  } catch (error) {
    console.error("Error fetching random image:", (error as Error).message);
    res
      .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send("Error fetching random image");
  }
};
