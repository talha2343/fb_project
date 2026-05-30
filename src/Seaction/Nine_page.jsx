import React from "react";

const Nine_page = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden py-10 sm:py-16 md:py-20">

      {/* background glow */}
      <div className="absolute top-[-20%] left-[-20%] h-72 w-72 sm:h-96 sm:w-96 md:h-125 md:w-125 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] h-72 w-72 sm:h-96 sm:w-96 md:h-125 md:w-125 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-size-[30px_30px]" />

      <div className="relative z-10 flex flex-col justify-between px-5 sm:px-10 md:px-16 2xl:px-20 py-10 md:py-16">

        {/* top section */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 md:gap-16">

          {/* left */}
          <div className="flex flex-col gap-10 md:gap-14">

            <h1 className="text-4xl sm:text-5xl md:text-7xl 2xl:text-8xl leading-none font-[text] tracking-tight">
              LET'S KEEP IN
              <br />
              TOUCH WITH US
            </h1>

            <div className="space-y-8 md:space-y-10">

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  GET IN TOUCH
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 wrap-break-word">
                  www.fbpropertiesdubai.com
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  CONTACT
                </h3>
                <div className="flex flex-col gap-2 text-lg sm:text-xl md:text-2xl text-zinc-300">
                  <p>+971 55-157-5772</p>
                  <p>+971 4-256-1244</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  EMAIL US
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 wrap-break-word">
                  info@fb-realestate.com
                </p>
              </div>

            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-8 md:gap-12 justify-center">

            {/* dubai */}
            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                DUBAI — UNITED ARAB EMIRATES
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                Head Office — Real Estate Brokerage & Investment Advisory
              </p>

              <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl">

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="font-bold">CONTACT</span>
                  <span className="text-zinc-300">+971 55-157-5772</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="font-bold">ADDRESS</span>
                  <span className="text-zinc-300">
                    DAMAC Business Tower 504, Business Bay, Dubai
                  </span>
                </div>

              </div>
            </div>

            {/* ramallah */}
            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                RAMALLAH — PALESTINE
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                Regional Office — Client Relations & International Business Development
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-base sm:text-lg md:text-xl">
                <span className="font-bold">CONTACT</span>
                <span className="text-zinc-300">+972 59-554-8194</span>
              </div>

            </div>

            <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              CONTACT US TODAY TO EXPLORE
              <br />
              <span>EXCLUSIVE INVESTMENT OPPORTUNITIES</span>
            </div>

          </div>
        </div>

        {/* social */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">

          {[
            { img: "./src/assets/45.png", label: "FACEBOOK", link: "https://www.facebook.com/foreignbrothersrealestate" },
            { img: "./src/assets/46.png", label: "LINKEDIN", link: "https://www.linkedin.com/company/foreign-brothers-real-estate-brokers?originalSubdomain=ae" },
            { img: "./src/assets/47.png", label: "INSTAGRAM", link: "https://www.instagram.com/foreignbrothersre/" },
            { img: "./src/assets/48.png", label: "WHATSAPP", link: "https://wa.me/971551575772?src=qr" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer">

              <a
                href={item.link}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl border overflow-hidden border-yellow-500/30 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              >
                <img src={item.img} className="w-full h-full object-cover" alt="" />
              </a>

              <p className="text-sm sm:text-base md:text-lg tracking-wide">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Nine_page;