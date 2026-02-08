export default function Hero(props: Readonly<{ styles: React.CSSProperties }>) {
  return (
    <div
      style={{
        ...props.styles,
        background: "#111",
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url("/images/clg-fest.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex"
    >
      <header className="flex flex-col justify-end p-16 w-full">
        <div className="text-6xl my-4 text-gray-800 dark:text-white font-serif">
          Experience Global Connection and Unity
        </div>
        <div className="flex justify-between">
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            corporis excepturi? Praesentium eligendi nobis quae expedita
            molestias
          </p>
          <button className="rounded-sm px-12 py-3 text-sm font-medium bg-[#FFC106] text-black">
            REGISTER
          </button>
        </div>
      </header>
    </div>
  );
}
