import React from 'react';
import { Bone, Activity, HeartPulse, Dumbbell, Sparkles, Users } from 'lucide-react';

const Specializations: React.FC = () => {
  const specializations = [
    {
      icon: Bone,
      title: 'Ortopedia e Traumatologia',
      description: 'Reabilitação de lesões musculoesqueléticas',
    },
    {
      icon: Activity,
      title: 'Fisioterapia Esportiva',
      description: 'Prevenção e recuperação de atletas',
    },
    {
      icon: HeartPulse,
      title: 'Fisioterapia Respiratória',
      description: 'Reabilitação pulmonar e torácica',
    },
    {
      icon: Dumbbell,
      title: 'Reabilitação Pós-Cirúrgica',
      description: 'Recuperação após procedimentos ortopédicos',
    },
    {
      icon: Sparkles,
      title: 'RPG (Reeducação Postural Global)',
      description: 'Correção postural e alívio de dores',
    },
    {
      icon: Users,
      title: 'Fisioterapia Geriátrica',
      description: 'Cuidados musculoesqueléticos para idosos',
    },
  ];

  return (
    <section id="specializations" className="py-16 px-5 sm:px-8 md:px-16 lg:px-20 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Nossas Especializações
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            Tratamentos especializados para cada necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="liquid-glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 shrink-0">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-base">
                      {spec.title}
                    </h3>
                    <p className="text-white/50 text-sm font-light mt-1">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specializations;