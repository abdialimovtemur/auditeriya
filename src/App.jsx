import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/home";
import SingleShop from "./pages/SingleShop";
import NotFound from "./404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="singleShop/:path/:id" element={<SingleShop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
