import { env } from "../config";
import { IUnsplashResponse, IUnsplashImage } from "../types";
import { getRequest } from "./http.service";

const UNSPLASH_URL = "https://api.unsplash.com/photos/random";

export const getImagesFromApi = async (count: number): Promise<string[]> => {
  try {
    const config = {
      headers: {
        Authorization: `Client-ID ${env.UNSPLASH_ACCESS_KEY}`,
        "Accept-Version": "v1",
      },
      params: {
        count,
      },
    };

    const response = await getRequest<IUnsplashResponse>(UNSPLASH_URL, config);

    const imageUrls = response.map((image: IUnsplashImage) => image.urls.full);

    return imageUrls;
  } catch (error) {
    console.error("Failed to fetch images from Unsplash third party");

    throw new Error(
      `Failed to fetch images from Unsplash third party: ${
        (error as Error).message
      }`
    );
  }
};
