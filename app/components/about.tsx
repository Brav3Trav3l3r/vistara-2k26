export default function About(
  props: Readonly<{ styles?: React.CSSProperties }>
) {
  return (
    <div
      style={{ ...props.styles }}
      className="bg-[#F5EAD7] text-[#2D1C0A] px-4 sm:px-16 pt-18 sm:pt-32 pb-20"
    >
      {/* Header */}
      <p className="text-5xl sm:text-6xl font-serif mb-8 tracking-tight">
        About Us
      </p>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Logo and Quote */}
        <div className="flex flex-col items-center lg:items-start gap-12">
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
            <p className="text-lg sm:text-2xl font-medium leading-relaxed text-gray-800">
              “Diversity is the one true thing we all have in common. Celebrate
              it every day with ISS.”
            </p>
          </div>
        </div>

        {/* Right Column - Content and Images */}
        <div className="flex flex-col gap-8">
          {/* Who We Are Section */}
          <div>
            <h2 className="text-3xl sm:text-3xl font-medium mb-2">
              Who we are
            </h2>
            <p className="text-base sm:text-md leading-snug font-medium">
              The International Students Service (ISS) Club is a dynamic
              community dedicated to fostering inclusivity and building
              meaningful relationships among international and domestic
              students. Founded in 2022, the club aims to bridge cultural gaps
              through engaging events, workshops, and activities. At ISS Club,
              we celebrate diversity and create opportunities for members to
              connect, grow, and thrive together.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded shadow-lg h-64 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop"
                alt="ISS Club members at an event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded shadow-lg h-64 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                alt="ISS Club sports activity"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
