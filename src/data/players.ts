import acosta from "@/assets/acosta.webp";
import gorosito from "@/assets/gorosito.jpg";
import parmo from "@/assets/parmo.jpg";
import p1 from "@/assets/player-1.jpg";
import p3 from "@/assets/player-3.jpg";
import stenta from "@/assets/stenta.jpg";
import p5 from "@/assets/player-5.jpg";
import p6 from "@/assets/player-6.jpg";

export type BasicStat = { label: string; value: string | number };
export type Clip = { title: string; duration: string; thumb: string; url?: string };

export type Player = {
  id: string;
  name: string;
  club: string;
  position: string;
  positionFull: string;
  age: number;
  category: string;
  height: number;
  foot: "Derecho" | "Izquierdo" | "Ambidiestro";
  agent: string;
  image: string;
  basicStats: BasicStat[];
  goals: number;
  assists: number;
  observations: string;
  scoutingReport: string;
  clips: Clip[];
  videos: Clip[];
  rating: number;
};

export const players: Player[] = [
  {
    id: "parmo",
    name: "Tomás Parmo",
    club: "Independiente",
    position: "MCO",
    positionFull: "Mediapunta (Enganche)",
    age: 18,
    category: "Reserva",
    height: 171,
    foot: "Derecho",
    agent: "Hernán Berman",
    image: parmo,
    rating: 8.8,
    goals: 4,
    assists: 0,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 4 },
      { label: "Asistencias", value: 0 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,71m" },
    ],
    observations:
      "Reconocido por su perfil de enganche clásico, destaca por su excelente visión de juego, gran control del balón, desequilibrio en espacios reducidos y su capacidad para ejecutar tiros libres.",
    scoutingReport:
      "Enganche clásico con visión de juego superior a la media de la categoría. Lectura privilegiada entre líneas y primer toque orientado. Especialista en pelota parada con remate calibrado de tiro libre. Desequilibra en espacios reducidos con cambios de ritmo cortos. Debe seguir trabajando el aspecto físico para sostener el nivel en la Primera.",
    clips: [
      {
        title: "Highlights — Reserva CAI",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/DuMvmkkTq-M/hqdefault.jpg",
        url: "https://youtu.be/DuMvmkkTq-M?si=o-YDW8GaqVdeeHzv",
      },
    ],
    videos: [
      {
        title: "Highlights — Reserva CAI",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/DuMvmkkTq-M/hqdefault.jpg",
        url: "https://youtu.be/DuMvmkkTq-M?si=o-YDW8GaqVdeeHzv",
      },
    ],
  },
  {
    id: "acosta",
    name: "Thiago Acosta",
    club: "River Plate",
    position: "MCO",
    positionFull: "Enganche (MCO)",
    age: 21,
    category: "Reserva",
    height: 183,
    foot: "Derecho",
    agent: "The Elegant Game",
    image: acosta,
    rating: 8.7,
    goals: 1,
    assists: 1,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 1 },
      { label: "Asistencias", value: 1 },
      { label: "Amarillas", value: 0 },
      { label: "Rojas", value: 1 },
      { label: "Altura", value: "1,83m" },
    ],
    observations:
      "Reconocido por su perfil de enganche clásico, destaca por su excelente visión de juego, gran control del balón, desequilibrio en espacios reducidos y su capacidad para ejecutar tiros libres.",
    scoutingReport:
      "Enganche con lectura superior entre líneas y primer toque orientado al pase filtrado. Controla el ritmo en espacios reducidos y desequilibra con cambios de dirección cortos. Especialista en pelota parada con golpeo calibrado desde tiro libre. Debe seguir ganando continuidad física para sostener el nivel en Reserva y Primera.",
    clips: [
      {
        title: "Gol vs Racing Club",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/1amsqDHW2Go/hqdefault.jpg",
        url: "https://youtu.be/1amsqDHW2Go",
      },
    ],
    videos: [
      {
        title: "Gol vs Racing Club",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/1amsqDHW2Go/hqdefault.jpg",
        url: "https://youtu.be/1amsqDHW2Go",
      },
    ],
  },
  {
    id: "gorosito",
    name: "Dylan Gorosito",
    club: "Boca Juniors",
    position: "LDD",
    positionFull: "Lateral derecho",
    age: 20,
    category: "Reserva",
    height: 173,
    foot: "Derecho",
    agent: "Interplayers",
    image: gorosito,
    rating: 8.6,
    goals: 0,
    assists: 1,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 0 },
      { label: "Asistencias", value: 1 },
      { label: "Amarillas", value: 2 },
      { label: "Rojas", value: 1 },
      { label: "Altura", value: "1,73m" },
    ],
    observations:
      "Reconocido por su intensidad y solidez defensiva, Dylan Gorosito se destaca como un lateral derecho de gran despliegue físico, firme en la marca y con constante proyección ofensiva. Posee buen criterio para incorporarse al ataque, capacidad para jugar en velocidad por la banda y una marcada personalidad competitiva dentro del campo de juego.",
    scoutingReport:
      "Lateral derecho con perfil completo: sólido en la marca uno contra uno, buen despliegue en largo recorrido y llegada al área rival con criterio. Transiciona con velocidad y aporta intensidad en recuperación. Proyección alta tras el Mundial Sub-20; debe seguir puliendo la consistencia en duelos aéreos y la toma de decisiones bajo presión en salida.",
    clips: [
      {
        title: "Dylan Gorosito — The Future of Argentina 🇦🇷",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/9GV_-bv9a24/hqdefault.jpg",
        url: "https://youtu.be/9GV_-bv9a24",
      },
    ],
    videos: [
      {
        title: "Dylan Gorosito — The Future of Argentina 🇦🇷",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/9GV_-bv9a24/hqdefault.jpg",
        url: "https://youtu.be/9GV_-bv9a24",
      },
    ],
  },
  {
    id: "stenta",
    name: "Thiago Stenta",
    club: "Platense",
    position: "DEL",
    positionFull: "Delantero centro",
    age: 18,
    category: "Quinta",
    height: 180,
    foot: "Izquierdo",
    agent: "Lesco.Group",
    image: stenta,
    rating: 8.8,
    goals: 7,
    assists: 2,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 7 },
      { label: "Asistencias", value: 2 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,80m" },
    ],
    observations:
      "Es un delantero con mucha clase y potencia, tiene una zurda impresionante y es muy difícil moverlo de espaldas donde juega muy bien. Buen cabezazo y definición dentro del área.",
    scoutingReport:
      "Delantero centro con zurda de élite y gran poderío físico. Domina el juego de espaldas al arco, protege la pelota y habilita al equipo. Goleador con instinto en el área y buen timing en el juego aéreo. Proyección alta en Quinta; debe seguir mejorando la movilidad sin balón en transiciones defensivas.",
    clips: [],
    videos: [],
  },
  {
    id: "morales",
    name: "Bautista Morales",
    club: "Vélez Sarsfield",
    position: "MCD",
    positionFull: "Mediocentro defensivo",
    age: 17,
    category: "Sexta",
    height: 181,
    foot: "Derecho",
    agent: "Marcelo Lombilla Mgmt.",
    image: p5,
    rating: 8.6,
    goals: 3,
    assists: 7,
    basicStats: [
      { label: "PJ", value: 23 },
      { label: "Goles", value: 3 },
      { label: "Asistencias", value: 7 },
      { label: "Minutos", value: 1980 },
      { label: "Amarillas", value: 4 },
      { label: "Rojas", value: 0 },
    ],
    observations:
      "Hijo de ex-jugador de Vélez. Liderazgo natural dentro del vestuario.",
    scoutingReport:
      "Volante central con jerarquía táctica. Distribución limpia, rara vez pierde la pelota. Aprende rápido los conceptos. Necesita ganar agresividad en la recuperación.",
    clips: [{ title: "Pases clave", duration: "2:55", thumb: p5 }],
    videos: [{ title: "Pases clave", duration: "2:55", thumb: p5 }],
  },
  {
    id: "Nosei",
    name: "Tomas Nosei Cordero",
    club: "Velez Sarsfield",
    position: "MC",
    positionFull: "Mediocampista",
    age: 18,
    category: "Reserva",
    height: 182,
    foot: "Derecho",
    agent: "No Information",
    image: p6,
    rating: 9.0,
    goals: 3,
    assists: 0,
    basicStats: [
      { label: "PJ", value: 8 },
      { label: "Goles", value: 3 },
      { label: "Asistencias", value: 0 },
      { label: "Minutos", value: 564 },
      { label: "Amarillas", value: 0 },
      { label: "Rojas", value: 0 },
    ],
    observations:
      "Goleador de la Sub-20. Pretemporada con el plantel profesional confirmada.",
    scoutingReport:
      "Goleador nato. Promedio de 0.8 goles por partido en reserva. Movimientos sin pelota muy maduros, gana posición y remata con ambas piernas. Necesita mejorar la asociación con los volantes.",
    clips: [
      { title: "Todos los goles", duration: "4:10", thumb: p6 },
      { title: "Definiciones", duration: "1:55", thumb: p3 },
    ],
    videos: [
      { title: "Todos los goles", duration: "4:10", thumb: p6 },
      { title: "Definiciones", duration: "1:55", thumb: p3 },
    ],
  },
];

export const positions = ["Todos", "GK", "DFC", "DFI", "LDD", "MCD", "MCO", "EXT", "DEL"];
export const categories = ["Todas", "Reserva", "Cuarta", "Quinta", "Sexta"];
export const clubs = [
  "Todos",
  "River Plate",
  "Boca Juniors",
  "Independiente",
  "Racing Club",
  "Vélez Sarsfield",
  "Estudiantes de La Plata",
  "Platense",
];
