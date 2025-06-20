import css from "./ImageCard.module.css";
import { type ImageType } from "../App/App";

export type Props = {
  data: ImageType;
  onClick: () => void;
};

export default function ImageCard({ data, onClick }: Props) {
  return (
    <>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        onClick={onClick}
        className={css.img}
      />
    </>
  );
}
