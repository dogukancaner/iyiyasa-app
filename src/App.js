import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LazyHome = lazy(() => import("./pages/Home"));
const LazyInstructorPages = lazy(() => import("./pages/InstructorPages"));
const LazySpecialSeriesPage = lazy(() => import("./pages/SpecialSeriesPage"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazySpecialMe = lazy(() => import("./pages/SpecialMe"));
const LazySignUp = lazy(() => import("./pages/SignUp"));
const LazySignIn = lazy(() => import("./pages/SignIn"));
const LazyPricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
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
}

export default App;
