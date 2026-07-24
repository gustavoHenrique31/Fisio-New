import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-5 sm:px-8 md:px-16 lg:px-20 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 256 256"
                className="w-8 h-8 fill-white"
              >
                <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z" />
              </svg>
              <span className="text-white font-medium">FisioClínica</span>
            </div>
            <p className="text-white/40 text-sm font-light mt-3">
              Cuidando do seu bem-estar com excelência e dedicação.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm mb-3">Contato</h4>
            <div className="space-y-2 text-white/50 text-sm font-light">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Rua da Saúde, 123 - São Paulo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@fisioclinica.com.br</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium text-sm mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <Icon className="h-5 w-5 text-white/40 hover:text-white/80 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-3">Links Rápidos</h4>
            <div className="space-y-2 text-white/50 text-sm font-light">
              <button className="block hover:text-white/80 transition-colors">
                Mapa Corporal
              </button>
              <button className="block hover:text-white/80 transition-colors">
                Especializações
              </button>
              <button className="block hover:text-white/80 transition-colors">
                Sobre Nós
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm font-light">
            © {new Date().getFullYear()} FisioClínica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;