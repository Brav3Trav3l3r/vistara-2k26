import MegaScroll from "react-mega-scroll";
import type { Route } from "./+types/home";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vistara 2k26" },
    { name: "description", content: "Welcome to JSS College" },
  ];
}

const styles: React.CSSProperties = {};

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <>
      <nav className="fixed top-4 inset-x-4 bg-white shadow-xl rounded-lg z-50 p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Vistara 2k26</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <MegaScroll onChange={setActive}>
        <div
          style={{
            ...styles,
            background: "#111",
            backgroundImage:
              'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url("/images/clg-img1.jpg")', // Added linear-gradien
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex"
        >
          <header className="flex flex-col justify-end p-10">
            <div className="text-2xl my-4 font-bold text-gray-800 dark:text-white">
              Experience Global Connection and Unity
            </div>
            <p className="max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              corporis excepturi? Praesentium eligendi nobis quae expedita
              molestias
            </p>
            <button className="rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600">
              Register
            </button>
          </header>
        </div>
        <div style={{ ...styles, background: "#222" }}>Smooth Scrolling</div>
        <div style={{ ...styles, background: "#333" }}>Keyboard Support</div>
        <div style={{ ...styles, background: "#222" }}>State Listeners</div>
        <div style={{ ...styles, background: "#111" }}>Free Forever</div>
      </MegaScroll>
    </>
  );
}
