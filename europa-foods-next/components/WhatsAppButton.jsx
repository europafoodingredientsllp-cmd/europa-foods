export default function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-stark-white p-4 rounded-full shadow-lg flex items-center justify-center whatsapp-btn transition-all duration-300 group"
      href="https://wa.me/917041226666"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-in-out font-body-md font-semibold text-sm">
        Inquire on WhatsApp
      </span>
    </a>
  );
}
