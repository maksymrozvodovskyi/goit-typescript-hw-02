import css from "./ImageCard.module.css";
import { type Props } from "./ImageCard.types";

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
