import { useEffect, useState } from "react";
import { FaClock, FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    console.log("fetching");
    fetch(event.markdown)
      .then((res) => res.text())
      .then((text) => {
        console.log("text", text);
        setMarkdown(text);
      });
  }, []);

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
        <div className="mt-4 px-4 pb-2">
          <p className="text-sm sm:text-base leading-snug line-clamp-3">
            {event.description}
          </p>

          {/* Co-ordinators */}
          <div className="mt-3">
            <p>
              <span className="font-semibold">Faculty Co-ordinator:</span>{" "}
              {event.faculty_coordinator}
            </p>
            <p>
              <span className="font-semibold">Student Co-ordinator:</span>{" "}
              {event.student_coordinator}
            </p>
          </div>

          <div className="flex gap-6 mt-4">
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
        {markdown && (
          <div className="overflow-y-auto p-6 prose prose-slate max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl font-bold mt-2 mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-4 leading-relaxed" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc ml-6 mb-4 space-y-2" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal ml-6 mb-4 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                strong: ({ node, ...props }) => (
                  <strong className="font-bold" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-6 border-gray-300" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <table className="border-collapse w-full my-4" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="border border-gray-300 px-4 py-2 bg-gray-100"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
              }}
              remarkPlugins={[remarkGfm]}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
