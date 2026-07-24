import React from 'react';

const Hero: React.FC = () => {
  const scrollToBodyMap = () => {
    const element = document.getElementById('body-map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_082433_69699cf8-444b-4484-93cc-053e57896dfd.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full pt-32 pb-12 px-5 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          {/* Badge */}
          <div className="liquid-glass rounded-full inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6 w-fit">
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
                'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
                'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
              ].map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="Avatar"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-white/20 object-cover"
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-light text-white/80">
              nossa jornada para o bem-estar natural
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] text-white tracking-[-0.05em]">
            Cuide do Seu Corpo
            <br />
            <span className="text-white/90">Naturalmente</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-light text-white/70">
            Bem-estar holístico. Resultados transformadores.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToBodyMap}
            className="liquid-glass rounded-full px-6 py-3 sm:px-7 sm:py-3.5 mt-6 sm:mt-8 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 w-fit"
          >
            Comece Sua Jornada
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="flex items-end gap-6 sm:gap-10 md:gap-16 pb-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-5 h-5">
              <div className="absolute top-0 left-0 w-[2.5px] h-[2.5px] bg-white/60" />
              <div className="absolute top-[6px] left-[6px] w-[2.5px] h-[2.5px] bg-white/60" />
              <div className="absolute top-[12px] left-[12px] w-[2.5px] h-[2.5px] bg-white/60" />
              <div className="absolute top-[6px] left-[12px] w-[2.5px] h-[2.5px] bg-white/60" />
              <div className="absolute top-[12px] left-[6px] w-[2.5px] h-[2.5px] bg-white/60" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                48 Horas
              </div>
              <div className="text-xs sm:text-sm font-light text-white/60">
                Consulta Inicial
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="grid grid-cols-3 gap-[2px]">
              {[0, 1, 0, 1, 0, 1, 0, 1, 0].map((val, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-sm ${
                    val === 1 ? 'bg-white/60' : 'bg-white/0'
                  }`}
                />
              ))}
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                Sessões de Cura
              </div>
              <div className="text-xs sm:text-sm font-light text-white/60">
                Tratamento Personalizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;