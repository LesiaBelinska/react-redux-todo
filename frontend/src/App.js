import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";

import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));

const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage.jsx"));

const SwapiPage = lazy(() => import("./pages/SwapiPage/SwapiPage.jsx"));

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
            <Route path="contacts" exact element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="todo" exact element={<PrivateRoute><TodoPage /></PrivateRoute>} />
            <Route path="swapi" exact element={<PrivateRoute><SwapiPage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
