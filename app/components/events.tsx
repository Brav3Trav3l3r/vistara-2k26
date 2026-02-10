"use client";

import Article from "./article";
import events from "./data.json";

export default function Events(props: { styles?: React.CSSProperties }) {
  return (
    <div
      style={{ ...props.styles }}
      className="bg-[#EDD6B4] text-[#301707] px-4 sm:px-16 pt-4 sm:pt-14 pb-20 overflow-x-hidden"
    >
      <p className="text-4xl sm:text-6xl font-serif mb-8 sm:mb-10 tracking-tight">
        Upcoming Events
      </p>

      <div className="flex gap-6 pb-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-proximity">
        {events.map((event) => (
          <Article event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
