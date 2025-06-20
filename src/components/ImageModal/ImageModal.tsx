import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  alt: string;
};

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: 0,
          border: "none",
          background: "transparent",
        },
      }}
    >
      <img
        src={imageUrl}
        alt={alt}
        style={{ maxHeight: "80vh", maxWidth: "90vw" }}
      />
    </Modal>
  );
}
