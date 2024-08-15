export interface IUnsplashImage {
  urls: {
    full: string;
  };
}

export interface IUnsplashResponse extends Array<IUnsplashImage> {}
