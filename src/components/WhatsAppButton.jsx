const WhatsAppButton = () => {
  const phoneNumber = "919849675068"; //Number that works for the chat button//
  const message = encodeURIComponent(
    "Hi, I’m interested in your ventures. Please share more details."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white font-semibold
                 px-4 py-3 rounded-full
                 shadow-lg transition flex items-center gap-2"
    >
      💬 WhatsApp
    </a>
  );
};

export default WhatsAppButton;