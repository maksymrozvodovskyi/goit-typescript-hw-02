import css from "./LoadMoreBtn.module.css";
import { type Props } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        Load more
      </button>
    </>
  );
}
