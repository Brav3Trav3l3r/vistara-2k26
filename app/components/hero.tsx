export default function Hero(props: Readonly<{ styles: React.CSSProperties }>) {
  return (
    <div
      style={{
        ...props.styles,
        background: "#111",
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%), url("/images/clg-fest.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex"
    >
      <header className="flex flex-col justify-end p-4 pb-8 sm:p-16 w-full">
        <div className="text-5xl sm:text-6xl my-4 text-gray-800 dark:text-white font-serif">
          From Curiosity to Discovery
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-start">
          <p className="max-w-prose font-medium">
            VISTARA 2K26 is a state-level science fest driven by curiosity,
            creativity, and innovation. We provide a platform for young minds to
            explore science beyond textbooks, exchange ideas, and showcase
            talent that shapes the future
          </p>
          <button className="mt-4 sm:mt-0 rounded-sm w-max px-12 py-3 text-sm font-medium bg-[#FFC106] text-black">
            REGISTER
          </button>
        </div>
      </header>
    </div>
  );
}
