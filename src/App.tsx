import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import Shop from "./routes/shop/shop";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import NotFound from "./components/not-found/not-found";
import { useEffect, useState } from "react";
import LoginModal from "./components/login-modal/login-modal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? <LoginModal state={{ isModalOpen, setIsModalOpen }} /> : null}
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
