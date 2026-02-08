export default function Navbar() {
  return (
    <nav className="fixed top-6 inset-x-14 bg-[#F5EAD7] shadow-xl rounded-lg z-50 py-4 px-8">
      <div className="flex items-center justify-between relative">
        {/* Logo - Left */}
        <div className="text-xl font-bold text-gray-800 flex gap-3 items-center font-serif">
          <img
            src="/images/clg-logo.png"
            alt="College Logo"
            className="h-8" // Adjust height as needed
          />
          <p>JSS Mahavidyapeetha</p>
        </div>

        {/* Nav Links - Absolute Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
              >
                EVENTS
              </a>
            </li>
          </ul>
        </div>

        {/* Register Button - Right */}
        <button className="cursor-pointer text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
          REGISTER
        </button>
      </div>
    </nav>
  );
}
