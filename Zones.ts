export interface BodyZone {
  id: string;
  name: string;
  area: string;
  commonProblem: string;
  recoveryTime: string;
  treatmentMethod: string;
  videoUrl: string; // Placeholder - substituir com URLs reais
  path: string; // SVG path data
  viewBox?: string;
}

export const BODY_ZONES: BodyZone[] = [
  {
    id: 'head-neck',
    name: 'Cabeça e Cervical',
    area: 'Pescoço',
    commonProblem: 'Cervicalgia, torcicolo, dor de cabeça tensional',
    recoveryTime: '2 a 6 semanas',
    treatmentMethod: 'Terapia manual + alongamentos específicos',
    videoUrl: 'https://example.com/videos/neck.mp4', // PLACEHOLDER
    path: 'M 180 80 Q 200 60 220 80 L 220 110 Q 200 105 180 110 Z',
  },
  {
    id: 'shoulder',
    name: 'Ombro',
    area: 'Ombro',
    commonProblem: 'Bursite, tendinite, capsulite adesiva',
    recoveryTime: '4 a 12 semanas',
    treatmentMethod: 'Terapia manual + fortalecimento progressivo',
    videoUrl: 'https://example.com/videos/shoulder.mp4',
    path: 'M 140 110 Q 120 100 110 120 L 115 160 Q 125 165 140 155 Z M 260 110 Q 280 100 290 120 L 285 160 Q 275 165 260 155 Z',
  },
  {
    id: 'elbow',
    name: 'Cotovelo e Antebraço',
    area: 'Cotovelo',
    commonProblem: 'Epicondilite (cotovelo de tenista/golfista)',
    recoveryTime: '6 a 12 semanas',
    treatmentMethod: 'Ondas de choque + exercícios excêntricos',
    videoUrl: 'https://example.com/videos/elbow.mp4',
    path: 'M 120 170 L 120 200 L 135 210 L 150 195 L 150 170 Z M 250 170 L 250 200 L 235 210 L 220 195 L 220 170 Z',
  },
  {
    id: 'wrist',
    name: 'Punho e Mão',
    area: 'Punho',
    commonProblem: 'Túnel do carpo, tendinite de punho',
    recoveryTime: '4 a 8 semanas',
    treatmentMethod: 'Órtese + terapia manual + exercícios',
    videoUrl: 'https://example.com/videos/wrist.mp4',
    path: 'M 110 215 L 110 240 L 125 245 L 140 235 L 140 220 Z M 260 215 L 260 240 L 245 245 L 230 235 L 230 220 Z',
  },
  {
    id: 'thoracic',
    name: 'Coluna Torácica',
    area: 'Costas Superior',
    commonProblem: 'Dor postural, escoliose leve, hipercifose',
    recoveryTime: '8 a 16 semanas',
    treatmentMethod: 'RPG + fortalecimento paravertebral',
    videoUrl: 'https://example.com/videos/thoracic.mp4',
    path: 'M 140 110 L 130 130 L 125 160 L 130 190 L 140 210 L 160 210 L 170 190 L 175 160 L 170 130 L 160 110 Z',
  },
  {
    id: 'lumbar',
    name: 'Coluna Lombar',
    area: 'Costas Inferior',
    commonProblem: 'Lombalgia, hérnia de disco, protrusão discal',
    recoveryTime: '8 a 20 semanas',
    treatmentMethod: 'Terapia manual + pilates + fortalecimento core',
    videoUrl: 'https://example.com/videos/lumbar.mp4',
    path: 'M 135 210 L 130 240 L 135 270 L 145 290 L 165 290 L 175 270 L 180 240 L 175 210 L 165 205 L 145 205 Z',
  },
  {
    id: 'chest',
    name: 'Peito e Tórax',
    area: 'Tórax',
    commonProblem: 'Reabilitação respiratória, pós-cirúrgico torácico',
    recoveryTime: '4 a 10 semanas',
    treatmentMethod: 'Fisioterapia respiratória + reexpansão pulmonar',
    videoUrl: 'https://example.com/videos/chest.mp4',
    path: 'M 140 110 L 130 130 L 135 150 L 140 170 L 155 175 L 170 170 L 175 150 L 170 130 L 160 110 Z',
  },
  {
    id: 'hip',
    name: 'Quadril',
    area: 'Quadril',
    commonProblem: 'Tendinite de quadril, bursite trocantérica',
    recoveryTime: '6 a 14 semanas',
    treatmentMethod: 'Terapia manual + fortalecimento glúteo',
    videoUrl: 'https://example.com/videos/hip.mp4',
    path: 'M 130 290 L 120 320 L 125 350 L 140 360 L 155 350 L 160 320 L 155 290 L 145 285 L 135 285 Z M 230 290 L 240 320 L 235 350 L 220 360 L 205 350 L 200 320 L 205 290 L 215 285 L 225 285 Z',
  },
  {
    id: 'knee',
    name: 'Joelho',
    area: 'Joelho',
    commonProblem: 'Condromalácia, lesão de menisco, LCA',
    recoveryTime: '8 a 24 semanas',
    treatmentMethod: 'Fortalecimento progressivo + propriocepção',
    videoUrl: 'https://example.com/videos/knee.mp4',
    path: 'M 125 370 L 120 400 L 125 430 L 140 435 L 155 430 L 160 400 L 155 370 L 145 365 L 135 365 Z M 235 370 L 240 400 L 235 430 L 220 435 L 205 430 L 200 400 L 205 370 L 215 365 L 225 365 Z',
  },
  {
    id: 'ankle',
    name: 'Tornozelo e Pé',
    area: 'Tornozelo',
    commonProblem: 'Entorse, fascite plantar, tendinite de Aquiles',
    recoveryTime: '4 a 12 semanas',
    treatmentMethod: 'Terapia manual + fortalecimento + alongamento',
    videoUrl: 'https://example.com/videos/ankle.mp4',
    path: 'M 125 445 L 120 470 L 125 490 L 135 495 L 150 490 L 155 470 L 150 445 L 140 440 L 135 440 Z M 235 445 L 240 470 L 235 490 L 225 495 L 210 490 L 205 470 L 210 445 L 220 440 L 225 440 Z',
  },
];