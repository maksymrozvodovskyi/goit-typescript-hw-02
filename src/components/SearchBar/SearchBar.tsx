import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { type Props } from "./SearchBar.types";

export default function SearchBar({ onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const searchInput = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    if (searchInput.trim() === "") {
      toast.error("Please input something in search!");
      return;
    }
    onSubmit(searchInput);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
}
