import MegaScroll from "react-mega-scroll";
import type { Route } from "./+types/home";
import { useState } from "react";
import Navbar from "../components/navbar";
import About from "~/components/about";
import Events from "~/components/events";
import Register from "~/components/register";
import Hero from "~/components/hero";

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
      {/* TODO BE REMOVED <Navbar /> */}
      <MegaScroll onChange={setActive}>
        <Hero styles={{ ...styles }} />
        <About styles={{ ...styles }} />
        <Events styles={{ ...styles }} />
        <Register styles={{ ...styles }} />
      </MegaScroll>
    </>
  );
}
