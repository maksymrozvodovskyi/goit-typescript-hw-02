import { type ImageType } from "./components/App/App.types";

export type Response = {
  total: number;
  total_page: number;
  results: ImageType[];
};
