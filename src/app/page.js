'use client';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LEFT: LOGO + BRAND */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/images/tc-logo.png"
              alt="Triumph Chess Logo"
              className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.6)]"
            />

            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-yellow-500 tracking-wide">
                TRIUMPH CHESS
              </h1>
              <p className="text-[10px] text-gray-400 tracking-[0.3em]">
                CRAFTED FOR ROYALTY
              </p>
            </div>
          </div>

          {/* RIGHT: ACTION BUTTON */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="hidden md:block text-gray-300 hover:text-yellow-400 transition"
            >
              Collections
            </a>

            <a
              href="#"
              className="hidden md:block text-gray-300 hover:text-yellow-400 transition"
            >
              Craftsmanship
            </a>

            <a
              href="https://wa.me/918591998911"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
              Enquire Now
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.08),transparent_60%),black] overflow-hidden">
        <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
          <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm">
            Pure Metal • Handcrafted • Premium
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-yellow-500">
            Triumph Chess
          </h2>

          <p className="mt-6 text-2xl text-gray-200">
            Crafted for Royalty
          </p>

          <p className="mt-4 max-w-xl text-gray-400">
            Premium handcrafted and machined metal chess sets for collectors,
            gifting, exhibitions, offices, and luxury spaces.
          </p>

          <a
            href="https://wa.me/918591998911"
            target="_blank"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            WhatsApp Enquiry
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 animate-float">
          <img
            src="/images/tc-king.png"
            alt="Triumph Chess King"
            className="h-[520px] object-contain drop-shadow-[0_0_45px_rgba(234,179,8,0.45)] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
          />
        </div>
      </section>

      {/* PIECES GRID */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-4xl text-center text-yellow-500 font-semibold">
          The Pieces of Power
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Each piece carries character, presence, and command.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            ["/images/tc-king.png", "KING", "Rule Your Realm"],
            ["/images/tc-queen.png", "QUEEN", "Wise • Versatile • Lethal"],
            ["/images/tc-rook.png", "ROOK", "Fortress Strength"],
            ["/images/tc-bishop.png", "BISHOP", "Strategic Mover"],
            ["/images/tc-knight.png", "KNIGHT", "Agile Yet Muscular"],
            ["/images/tc-pawn.png", "PAWN", "Fearless Frontline"],
          ].map(([img, title, text]) => (
            <div
              key={title}
              className="group border border-yellow-500/30 p-6 bg-gray-950 rounded-xl transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(234,179,8,0.35)] hover:-translate-y-2"
            >
              <img
                src={img}
                alt={title}
                className="h-64 mx-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_28px_rgba(234,179,8,0.55)]"
              />
              <h3 className="mt-4 text-yellow-400 text-xl">{title}</h3>
              <p className="text-gray-400 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center bg-gray-950">
        <h2 className="text-4xl text-yellow-500 font-semibold">
          Exhibition Enquiry
        </h2>

        <p className="mt-6 text-gray-400">
          Contact us for premium chess sets, gifting editions, and custom requirements.
        </p>

        <div className="mt-8 text-lg text-gray-200">
          <p>📞 1800 890 2090</p>
          <p className="mt-2">📱 WhatsApp: +91 85919 98911</p>
          <p className="mt-2">✉ web@triumphchess.com</p>
          <p className="mt-2">🌐 www.triumphchess.com</p>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918591998911"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(34,197,94,0.65)] hover:scale-110 transition-transform duration-300"
      >
        ☎
      </a>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(6px);
          }
          to {
            opacity
      `}</style>
    </main>
  );
}