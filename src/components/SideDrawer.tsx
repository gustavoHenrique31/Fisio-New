import React, { useState } from 'react';
import { X, MessageCircle, Play } from 'lucide-react';
import { BodyZone } from '../data/Zones';

// CONFIGURÁVEL: Número do WhatsApp do especialista
const WHATSAPP_NUMBER = "5511999999999"; // PLACEHOLDER - Substituir com número real

interface SideDrawerProps {
  zone: BodyZone;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ zone, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    symptoms: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.age.trim() || !formData.symptoms.trim()) {
      alert('Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    setIsSubmitting(true);

    const message = `Olá! Meu nome é ${formData.name}, tenho ${formData.age} anos.
Estou sentindo: ${formData.symptoms}
Área de interesse: ${zone.name} - ${zone.area}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-black/80 backdrop-blur-xl shadow-2xl overflow-y-auto transition-transform duration-500 ease-out animate-slide-in"
        style={{
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="p-6 sm:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="h-6 w-6 text-white/60" />
          </button>

          {/* Content */}
          <div className="mt-8">
            <h3 className="text-2xl sm:text-3xl font-normal text-white">
              {zone.name}
            </h3>
            <p className="text-sm text-white/60 font-light mt-1">{zone.area}</p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-medium">
                  Problema Comum
                </h4>
                <p className="text-white/90 font-light">{zone.commonProblem}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-medium">
                  Tempo Estimado de Recuperação
                </h4>
                <p className="text-white/90 font-light">{zone.recoveryTime}</p>
                <p className="text-xs text-white/30 mt-1">
                  *estimativa geral, pode variar por caso
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-medium">
                  Método de Tratamento Sugerido
                </h4>
                <p className="text-white/90 font-light">{zone.treatmentMethod}</p>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="mt-6 relative rounded-xl overflow-hidden bg-black/40 aspect-video flex items-center justify-center">
              {zone.videoUrl ? (
                <video
                  src={zone.videoUrl}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="text-center">
                  <Play className="h-12 w-12 text-white/20 mx-auto" />
                  <p className="text-sm text-white/30 mt-2">Vídeo do exercício</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/40 font-medium mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/40 font-medium mb-1">
                  Idade
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  placeholder="Sua idade"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/40 font-medium mb-1">
                  O que você está sentindo?
                </label>
                <textarea
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none"
                  placeholder="Descreva brevemente sua dor ou desconforto"
                  rows={3}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full liquid-glass rounded-full px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                {isSubmitting ? 'Enviando...' : 'Conversar com Especialista Ortopédico'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SideDrawer;
