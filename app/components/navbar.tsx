export default function Navbar() {
  return (
    <nav className="fixed top-4 sm:top-6 inset-x-8 sm:inset-x-14 bg-[#F5EAD7] text-[#241910] shadow-xl rounded-lg z-50 py-4 px-8">
      <div className="flex items-center justify-center md:justify-between relative">
        {/* Logo - Left */}
        <div className="text-2xl font-semibold flex gap-3 items-center font-serif">
          <img
            src="/images/fest-logo.png"
            alt="College Logo"
            className="h-10 sm:h-10" // Adjust height as needed
          />
          <p>Vistara 2k26</p>
        </div>

        {/* Nav Links - Absolute Center */}
        <div className="hidden md:inline absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-sm font-bold transition-colors">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold transition-colors">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-bold transition-colors">
                EVENTS
              </a>
            </li>
          </ul>
        </div>

        {/* Register Button - Right */}
        <a
          href={import.meta.env.VITE_FORM_LINK}
          className="hidden md:inline cursor-pointer text-sm font-bold  transition-colors"
        >
          REGISTER
        </a>
      </div>
    </nav>
  );
}
