import Footer from "./footer";

export default function Register(props: { styles?: React.CSSProperties }) {
  return (
    <div
      style={{ ...props.styles }}
      className="bg-[#F5EAD7] text-[#2D1C0A] px-4 sm:px-16 pt-18 sm:pt-32 pb-20 relative"
    >
      {/* Main Content Grid */}
      <section className="">
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/clg-event.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-96 rounded-2xl text-[#F5EAD7] text-center flex flex-col justify-center items-center gap-3"
        >
          <p className="text-6xl font-serif">Vistara 2k26</p>
          <p className="text-3xl">
            Cultural <span className="font-serif">&</span> Arts Events
          </p>
          <p className="max-w-prose mt-4 leading-snug font-medium">
            "Discover amazing events happening in our college! Register now to
            participate in exciting activities and make the most of your college
            experience."
          </p>

          <button className="rounded-sm px-12 py-3 mt-6 text-sm font-medium bg-[#FFC106] text-black w-max">
            REGISTER
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
