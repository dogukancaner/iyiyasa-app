import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const LazyHome = lazy(() => import("./pages/Home"));
const LazyInstructorPages = lazy(() => import("./pages/InstructorPages"));
const LazySpecialSeriesPage = lazy(() => import("./pages/SpecialSeriesPage"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazySpecialMe = lazy(() => import("./pages/SpecialMe"));
const LazySignUp = lazy(() => import("./pages/SignUp"));
const LazySignIn = lazy(() => import("./pages/SignIn"));
const LazyPricing = lazy(() => import("./pages/Pricing"));

const App = () => {
  const [users, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar users={users} />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="/instructor"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazyInstructorPages />
              </Suspense>
            }
          />
          <Route
            path="/specialseries"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazySpecialSeriesPage />
              </Suspense>
            }
          />
          <Route
            path="/specialme"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazySpecialMe />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazyBlog />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazySignUp />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazySignIn />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense
                fallback={
                  <div className="text-center text-2xl font-medium ">
                    Yükleniyor...
                  </div>
                }
              >
                <LazyPricing />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
