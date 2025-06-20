import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

import { type Props } from "./ImageGallery.types";

export default function ImageGallery({ data, onClick }: Props) {
  return (
    <ul className={css.list}>
      {data.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard
            data={image}
            onClick={() => {
              onClick(image.urls.full, image.alt_description);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
