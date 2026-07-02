import { site } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#1EBE5D] shadow-2xl shadow-black/50 transition-all duration-500 hover:gap-2 hover:pr-5 hover:shadow-[0_10px_40px_-8px_rgba(30,190,93,0.6)]"
    >
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#1EBE5D] opacity-30" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7 text-white" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.3.1 1.7.8 1.9.9.3.2.5.2.5.3.1.2.1.7-.1 1.2Z" />
        </svg>
      </span>
      <span className="max-w-0 whitespace-nowrap text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:max-w-[160px] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
