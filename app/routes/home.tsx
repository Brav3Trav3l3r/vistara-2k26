import MegaScroll from "react-mega-scroll";
import type { Route } from "./+types/home";
import { useState } from "react";
import Navbar from "../components/navbar";
import About from "~/components/about";
import Events from "~/components/events";

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
      <Navbar />
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
          <header className="flex flex-col justify-end p-16 w-full">
            <div className="text-6xl my-4 text-gray-800 dark:text-white font-serif">
              Experience Global Connection and Unity
            </div>
            <div className="flex justify-between">
              <p className="max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, corporis excepturi? Praesentium eligendi nobis quae
                expedita molestias
              </p>
              <button className="rounded-sm px-12 py-3 text-sm font-medium bg-[#FFC106] text-black">
                REGISTER
              </button>
            </div>
          </header>
        </div>
        <About styles={{ ...styles }} />
        <Events styles={{ ...styles }} />
        <div style={{ ...styles, background: "#222" }}>State Listeners</div>
        <div style={{ ...styles, background: "#111" }}>Free Forever</div>
      </MegaScroll>
    </>
  );
}
