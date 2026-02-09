import Footer from "./footer";

export default function Register(props: { styles?: React.CSSProperties }) {
  return (
    <div
      style={{ ...props.styles }}
      className="bg-[#F5EAD7] text-[#2D1C0A] px-4 sm:px-16 pt-28 sm:pt-32 pb-20 relative"
    >
      {/* Main Content Grid */}
      <section className="">
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/ghibli-group.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-[40vh] rounded-2xl p-4 text-[#F5EAD7] text-center flex flex-col justify-center items-center"
        >
          <p className="text-4xl font-medium sm:text-6xl font-serif">
            Vistara 2k26
          </p>
          <p className="text-2xl font-serif sm:text-3xl mt-1">
            Science, Innovation & Exploration
          </p>
          <p className="max-w-prose mt-3 sm:mt-4 leading-snug sm:text-lg">
            "Discover amazing events happening in our college! Register now to
            participate in exciting activities and make the most of your college
            experience."
          </p>

          <a
            target="_blank"
            href={import.meta.env.VITE_FORM_LINK}
            className="rounded-sm px-12 py-3 mt-6 text-sm font-medium bg-[#FFC106] text-black w-max"
          >
            REGISTER
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
