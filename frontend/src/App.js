import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));

const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage.jsx"));

const SwapiPage = lazy(() => import("./pages/SwapiPage/SwapiPage.jsx"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" exact element={<ContactsPage />} />
            <Route path="todo" exact element={<TodoPage />} />
            <Route path="swapi" exact element={<SwapiPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
