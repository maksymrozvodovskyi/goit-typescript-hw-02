import { useEffect, useState } from "react";
import { fetchData } from "../../unsplash-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { type ImageType } from "./App.types";

export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [input, setInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  const openModal = (url: string, alt: string): void => {
    setModalImageUrl(url);
    setModalAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleSearch = async (newImage: string): Promise<void> => {
    setInput(newImage);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (input === "") {
      return;
    }

    async function fetchImages(): Promise<void> {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchData(input, currentPage);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, input]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery data={images} onClick={openModal} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={incrementPage} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={modalImageUrl}
        alt={modalAlt}
      />
    </div>
  );
}
