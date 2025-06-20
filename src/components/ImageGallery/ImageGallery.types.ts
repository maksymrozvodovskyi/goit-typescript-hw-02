import { type ImageType } from "../App/App.types";

export type Props = {
  data: ImageType[];
  onClick: (url: string, alt: string) => void;
};
