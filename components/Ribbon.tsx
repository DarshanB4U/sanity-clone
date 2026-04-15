function Ribbon() {
  const items = [
    "Hunter",
    "Douglas",
    "Baggu",
    "Trusted by leaders and innovators",
    "loveholiday",
    "Mejuri",
    "Shopify",
    "Tecovas",
    "Unity",
    "Linear",
    "Skims",
    "Spotify",
    "Anthropic",
  ];

  // Duplicate items for seamless infinite loop
  const scrollItems = [...items, ...items];

  return (
    <div className="absolute z-10 bg-[#ff4100] bottom-1 w-full h-17 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-container {
          display: flex;
          animation: scroll 50s linear infinite;
          width: fit-content;
        }
      `}</style>

      <div className="scroll-container flex items-center gap-8 h-full">
        {scrollItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="text-black text-nowrap text-2xl font-bold font-(family-name:--font-ibm-plex-mono) flex items-center justify-between h-full px-4 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ribbon;
