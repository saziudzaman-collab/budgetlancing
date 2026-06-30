import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BudgetLancing on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl shadow-green-500/40 hover:scale-110 transition-transform">
        <MessageCircle className="h-7 w-7" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass rounded-full px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
