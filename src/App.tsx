import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import Shop from "./routes/shop/shop";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import NotFound from "./components/not-found/not-found";
import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: "999",
    transform: "translate(-50%, -50%)",
    yOverflow: "hidden",
    backgroundColor: "red",
  },
};

export function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let subtitle;
  function openModal() {
    setIsModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          {" "}
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      ) : null}
      <Navigation setModalState={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:categoryName" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
