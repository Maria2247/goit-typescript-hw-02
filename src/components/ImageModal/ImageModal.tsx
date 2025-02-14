import Modal from "react-modal";
import css from "./imageModal.module.css";
import React from "react";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string | null;
};

export default function ImageModal({
  isOpen,
  closeModal,
  imageUrl,
}: Props): React.ReactElement {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: "none",
      background: "none",
    },
    overlay: {
      backgroundColor: "rgba(95,95,95,0.8)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {imageUrl && <img src={imageUrl} className={css.image} />}
    </Modal>
  );
}
