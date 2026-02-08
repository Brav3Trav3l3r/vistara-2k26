export default function About(
  props: Readonly<{ styles?: React.CSSProperties }>
) {
  return (
    <div
      style={{ ...props.styles }}
      className="bg-[#F5EAD7] text-[#2D1C0A] px-4 sm:px-16 pt-28 sm:pt-32 pb-20"
    >
      {/* Header */}
      <p className="text-4xl sm:text-6xl font-serif mb-8 sm:mb-10 tracking-tight">
        About Us
      </p>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Left Column - Logo and Quote */}
        <div className="flex flex-row sm:flex-col items-center lg:items-start gap-4 sm:gap-12">
          {/* Logo Section */}
          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src="/images/mono-logo.png"
              alt="ISS Club Logo"
              className="w-full h-auto drop-shadow-lg"
            />
          </div>

          {/* Quote Section */}
          <div className="w-full">
            <p className="text-lg sm:text-2xl italic font-medium leading-relaxed text-gray-800">
              “Empowering Women Through Knowledge, Values, and Excellence.”
            </p>
          </div>
        </div>

        {/* Right Column - Content and Images */}
        <div className="flex flex-col gap-8">
          {/* Who We Are Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl sm:text-3xl font-medium mb-2">
              Who we are
            </h2>
            <p className="sm:text-md leading-snug font-medium">
              JSS College for Women, Mysuru is a premier institution dedicated
              to academic excellence, character building, and the empowerment of
              women through holistic education. Rooted in strong values and
              progressive thinking, the college nurtures young women to become
              confident leaders, innovators, and responsible citizens.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden rounded shadow-lg h-40 sm:h-96">
              <img
                src="/images/clg-1.jpeg"
                alt="ISS Club members at an event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded shadow-lg h-40 sm:h-96">
              <img
                src="/images/baba.jpeg"
                alt="ISS Club sports activity"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
