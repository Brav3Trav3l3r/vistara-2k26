import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer(props: { styles?: React.CSSProperties }) {
  return (
    <footer className="absolute bottom-0 inset-x-4 sm:inset-x-14">
      <div className="mx-auto pt-16 pb-4 sm:pb-8 lg:pt-24">
        <div className="flex flex-col items-center justify-center lg:flex-row md:justify-between md:items-center">
          {/* Logo - Left */}
          <div className="text-xl sm:text-3xl font-bold flex gap-3 items-center font-serif">
            <img
              src="/images/clg-logo.png"
              alt="College Logo"
              className="h-10 sm:h-16"
            />
            <p>JSS Mahavidyapeetha</p>
          </div>

          <div className="flex-grow flex justify-center items-center">
            <RxCross2 className="text-xl sm:text-4xl" />
          </div>

          {/* Logo - Right */}
          <div className="text-lg sm:text-3xl font-bold flex gap-3 items-center font-serif">
            <img
              src="/images/fest-logo.png"
              alt="College Logo"
              className="h-10 sm:h-16"
            />
            <p>Vistara 2k26</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-8 border-t pt-8 sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="">
                {" "}
                Terms &amp; Conditions{" "}
              </a>
            </li>

            <li>
              <a href="#" className="">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a href="#" className="">
                {" "}
                Cookies{" "}
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <FaFacebook className="text-lg sm:text-2xl" />
            </li>

            <li>
              <FaInstagram className="text-lg sm:text-2xl" />
            </li>

            <li>
              <FaTwitter className="text-lg sm:text-2xl" />
            </li>

            <li>
              <FaGithub className="text-lg sm:text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
