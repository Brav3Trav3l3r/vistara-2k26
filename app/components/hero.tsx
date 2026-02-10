export default function Hero(props: Readonly<{ styles: React.CSSProperties }>) {
  return (
    <div
      style={{
        ...props.styles,
        background: "#111",
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%), url("/images/clg-fest.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex"
    >
      <header className="flex flex-col justify-end p-4 pb-8 sm:p-16 w-full relative">
        <p className="text-6xl sm:text-6xl lg:text-8xl font-serif">
          Vistara 2k26
        </p>
        <p className="text-4xl lg:text-5xl font-serif italic">
          From Curiosity to Discovery
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-8 justify-between items-start">
          <p className="max-w-prose">
            VISTARA 2K26 is a state-level science fest driven by curiosity,
            creativity, and innovation. We provide a platform for young minds to
            explore science beyond textbooks, exchange ideas, and showcase
            talent that shapes the future
          </p>
          <a
            href={import.meta.env.VITE_FORM_LINK}
            className="mt-8 sm:mt-0 rounded-sm w-max px-12 py-3 text-sm font-medium bg-[#FFC106] text-black"
          >
            REGISTER
          </a>
        </div>
      </header>
    </div>
  );
}
