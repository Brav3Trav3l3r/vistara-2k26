import { FaLocationDot, FaClock } from "react-icons/fa6";

export default function Article({ event }) {
  return (
    <article
      key={event.id}
      className="shrink-0 w-[320px] sm:w-[360px] rounded-xl bg-[#F5EAD7] text-[#2E1708] overflow-hidden shadow-sm snap-start"
    >
      <div
        className="w-full aspect-4/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="p-5 sm:p-6 flex flex-col gap-2">
        <h2 className="text-xl font-semibold leading-tight">{event.title}</h2>
        <p className="text-sm leading-snug line-clamp-3">{event.description}</p>
        <div className="flex gap-4 mt-4 items-center">
          <div className="flex flex-col">
            <span className="text-4xl leading-none">{event.day}</span>
            <span className="text-xs wrap-break-word text-wrap tracking-wide">
              {event.month}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2">
              <FaLocationDot color="" />
              {event.location}
            </span>
            <span className="flex items-center gap-2">
              <FaClock />
              {event.time}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="mt-2 w-full py-2.5 rounded-lg border font-medium text-sm hover:bg-[#301707]/5 transition-colors"
        >
          DETAILS
        </button>
      </div>
    </article>
  );
}
