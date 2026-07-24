import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '+10 anos', label: 'de experiência' },
    { icon: Users, value: '+2.000', label: 'pacientes atendidos' },
    { icon: Clock, value: '98%', label: 'de satisfação' },
  ];

  return (
    <section id="about" className="py-16 px-5 sm:px-8 md:px-16 lg:px-20 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Saiba Mais Sobre Nós
            </h2>
            <div className="mt-6 space-y-4 text-white/70 font-light">
              <p>
                Na nossa clínica, acreditamos que a saúde vai além do tratamento 
                de sintomas. Oferecemos uma abordagem integrada que combina 
                técnicas modernas de fisioterapia com um cuidado humano e 
                personalizado.
              </p>
              <p>
                Nossa equipe é formada por especialistas apaixonados por ajudar 
                pessoas a recuperarem sua mobilidade, qualidade de vida e bem-estar. 
                Cada paciente recebe um plano de tratamento único, desenvolvido 
                com base em suas necessidades específicas.
              </p>
              <p>
                Com anos de experiência e um compromisso com a excelência, 
                estamos aqui para guiar você em sua jornada de recuperação e 
                fortalecimento.
              </p>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="liquid-glass rounded-xl p-4 text-center"
                  >
                    <Icon className="h-6 w-6 text-cyan-400 mx-auto" />
                    <div className="text-xl font-normal text-white mt-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 font-light">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image Placeholder */}
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video bg-black/40 flex items-center justify-center">
              <div className="text-center text-white/20">
                <Users className="h-12 w-12 mx-auto" />
                <p className="text-sm mt-2">Foto da Equipe</p>
                <p className="text-xs mt-1">(em breve)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;