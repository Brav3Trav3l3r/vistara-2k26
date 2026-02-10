import { useEffect } from "react";
import { FaClock, FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen, onClose, event }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#301707]/95"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F5EAD7] text-[#301707] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between border-b-2 p-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{event?.title}</h2>
            <i className="">{event?.subtitle}</i>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 cursor-pointer rounded-lg transition-colors hover:bg-[#EDD6B4]"
            aria-label="Close modal"
          >
            <RxCross2 className="w-5 h-5 m-auto text-[#301707]/90" />
          </button>
        </div>

        {/* Metadata */}
        <div className="mt-4 px-4">
          <p className="text-sm sm:text-base leading-snug line-clamp-3">
            {event.description}
          </p>

          <div className="flex gap-6 mt-6">
            <span className="flex items-center gap-2">
              <FaLocationDot />
              {event.location}
            </span>
            <span className="flex items-center gap-2">
              <FaClock />
              {event.day} {event.month} - {event.time}
            </span>

            <span className="flex items-center gap-2">
              <FaIndianRupeeSign />
              {event.fee}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          <div dangerouslySetInnerHTML={{ __html: event.html }} />
        </div>
      </div>
    </div>
  );
}
