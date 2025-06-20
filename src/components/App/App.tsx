import { useEffect, useState } from "react";
import { fetchData } from "../../unsplash-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export type ImageType = {
  id: string;
  urls: {
    full: string;
    small: string;
  };
  alt_description: string;
};

export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (url: string, alt: string) => {
    setModalImageUrl(url);
    setModalAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async (newImage: string) => {
    setInput(newImage);
    setCurrentPage(1);
    setImages([]);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (input === "") {
      return;
    }

    async function fetchImages() {
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
