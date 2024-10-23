import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

export default function StandarLayout() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === "/") {
      return "body";
    } else if (location.pathname === "/Cities") {
      return "cities-bg";
    }
    return "";
  };
  return (
    <>
      <div className={getBackgroundClass()}>
        <header className="h-[15dvh]">
          <NavBar></NavBar>
        </header>
        <main className="min-h-[85dvh]">
          <Outlet></Outlet>
        </main>
        <footer>
          <h2>
            <footer className="flex w-full items-center h-fit justify-center bg-black text-white">
              <Footer />
            </footer>
          </h2>
        </footer>
      </div>
    </>
  );
}
