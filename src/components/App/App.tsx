import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchUnsplashImages } from "../../helpers/images-api";
import { IImage, Query } from "./App.types";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App(): React.ReactElement {
  const [images, setImages] = useState<IImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [largeImg, setLargeImg] = useState<string | null>(null);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const openModal = (largeImg: string) => {
    setModalIsOpen(true);
    setLargeImg(largeImg);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLargeImg(null);
  };

  const handleSearch = async (newQuery: string) => {
    setImages([]);
    setPage(1);
    setInputValue(newQuery);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (inputValue === "") return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const queryResult: Query = await fetchUnsplashImages(inputValue, page);

        if (queryResult.results.length === 0) {
          setShowBtn(false);
          toast("Oops, couldn't find anything", { duration: 2000 });
          return;
        }
        setImages((prevImages) => {
          return [...prevImages, ...queryResult.results];
        });
        setMaxPage(queryResult.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [inputValue, page]);

  useEffect(() => {
    setShowBtn(page < maxPage);
  }, [page, maxPage]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery imageObj={images} onClick={openModal} />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageUrl={largeImg}
      />
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} id="app" />}
      <Toaster />
      {error && <ErrorMessage />}
    </div>
  );
}
