export type Film = {
  id: number;
  name: string;
  genre: string;
  releaseDate: string;
  poster: string;
  preview: string;
  background: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scores: number;
  director: string;
  starring: string[];
  runTime: number;
};

export type Films = Film[];
