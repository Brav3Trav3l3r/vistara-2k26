import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Footer(props: { styles?: React.CSSProperties }) {
  return (
    <footer className="absolute bottom-0 inset-x-14">
      <div className="mx-auto pt-16 pb-8 lg:pt-24">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <div className="text-3xl font-bold flex gap-3 items-center font-serif">
            <img
              src="/images/clg-logo.png"
              alt="College Logo"
              className="h-16"
            />
            <p>JSS Mahavidyapeetha</p>
          </div>

          <div className="flex-grow flex justify-center items-center">
            <RxCross2 className="text-4xl" />
          </div>

          {/* Logo - Left */}
          <div className="text-3xl font-bold flex gap-3 items-center font-serif">
            <img
              src="/images/clg-logo.png"
              alt="College Logo"
              className="h-16"
            />
            <p>Vistara 2k26</p>
          </div>
        </div>

        <div className="border-t pt-8 sm:flex sm:items-center sm:justify-between mt-6">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" className="transition hover:opacity-75">
                Terms &amp; Conditions
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <FaFacebook className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaGithub className="text-2xl" />
          </ul>
        </div>
      </div>
    </footer>
  );
}
