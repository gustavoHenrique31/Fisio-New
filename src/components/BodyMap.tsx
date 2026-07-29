import React, { useState } from 'react';
import { BODY_ZONES } from '../data/Zones';
import SideDrawer from './SideDrawer';

const BodyMap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  const selectedZoneData = BODY_ZONES.find((z: BodyZone) => z.id === selectedZone);
  return (
    <section id="body-map" className="relative py-16 px-5 sm:px-8 md:px-16 lg:px-20 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Mapa Corporal Interativo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/60 font-light">
            Clique em qualquer área para descobrir tratamentos personalizados
          </p>
        </div>

        <div className="flex justify-center">
          <div className="liquid-glass-dark rounded-2xl p-6 sm:p-8 max-w-3xl w-full">
            <div className="relative w-full max-w-[600px] mx-auto">
              {/* SVG Body Map */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                style={{ maxWidth: '600px' }}
              >
                {/* Body outline - simplified silhouette */}
                <path
                  d="M 200 30 
                     C 160 30 140 50 135 80 
                     L 130 110 C 120 120 110 140 110 160 
                     L 105 200 C 100 220 100 240 105 260 
                     L 110 290 C 115 310 120 330 125 350 
                     L 120 380 C 115 400 120 420 130 440 
                     L 140 460 C 145 470 150 475 155 470 
                     L 170 460 C 175 455 180 450 185 440 
                     L 190 420 C 195 400 200 400 200 400 
                     C 200 400 205 400 210 420 
                     L 215 440 C 220 450 225 455 230 460 
                     L 245 470 C 250 475 255 470 260 460 
                     L 270 440 C 280 420 285 400 280 380 
                     L 275 350 C 280 330 285 310 290 290 
                     L 295 260 C 300 240 300 220 295 200 
                     L 290 160 C 290 140 280 120 270 110 
                     L 265 80 C 260 50 240 30 200 30 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />

                {/* Body zones */}
                {BODY_ZONES.map((zone) => {
                  const isHovered = hoveredZone === zone.id;
                  const isSelected = selectedZone === zone.id;

                  return (
                    <g key={zone.id}>
                      <path
                        d={zone.path}
                        fill={isSelected ? 'rgba(34, 211, 238, 0.15)' : 'transparent'}
                        stroke={
                          isHovered || isSelected 
                            ? 'rgba(34, 211, 238, 0.6)' 
                            : 'rgba(255,255,255,0.1)'
                        }
                        strokeWidth={isHovered || isSelected ? 3 : 1.5}
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          filter: isHovered ? 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.3))' : 'none',
                        }}
                        onMouseEnter={() => setHoveredZone(zone.id)}
                        onMouseLeave={() => setHoveredZone(null)}
                        onClick={() => setSelectedZone(zone.id)}
                      />
                      {/* Zone label on hover */}
                      {isHovered && (
                        <g>
                          <rect
                            x={zone.id === 'head-neck' ? 170 : 210}
                            y={zone.id === 'head-neck' ? 40 : 200}
                            width={100}
                            height={30}
                            rx={8}
                            fill="rgba(0,0,0,0.8)"
                            className="backdrop-blur-sm"
                          />
                          <text
                            x={zone.id === 'head-neck' ? 220 : 260}
                            y={zone.id === 'head-neck' ? 60 : 220}
                            textAnchor="middle"
                            fill="white"
                            fontSize="12"
                            className="font-medium"
                          >
                            {zone.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-white/40 font-light">
                Passe o mouse para explorar • Clique para mais informações
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      {selectedZoneData && (
        <SideDrawer
          zone={selectedZoneData}
          onClose={() => setSelectedZone(null)}
        />
      )}
    </section>
  );
};

export default BodyMap;
