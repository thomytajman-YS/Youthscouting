import acosta from "@/assets/acosta.jpg";
import aranda from "@/assets/aranda.jpg";
import baju from "@/assets/baju.jpg";
import blanco from "@/assets/blanco.jpg";
import escudero from "@/assets/escudero.jpg";
import gorosito from "@/assets/gorosito.jpg";
import herrera from "@/assets/herrera.jpg";
import ladstatter from "@/assets/ladstatter.jpg";
import mateoMartinez from "@/assets/mateo-martinez.jpg";
import parmo from "@/assets/parmo.jpg";
import perezCurci from "@/assets/perez-curci.jpg";
import rivas from "@/assets/rivas.jpg";
import sosa from "@/assets/sosa.jpg";
import stenta from "@/assets/stenta.jpg";
import yaciuk from "@/assets/yaciuk.jpg";

export type BasicStat = { label: string; value: string | number };
export type Clip = { title: string; duration: string; thumb: string; url?: string };
export type PlayerStatus = "disponible" | "lesionado";

export type Player = {
  id: string;
  name: string;
  club: string;
  position: string;
  positionFull: string;
  age: number;
  birthYear: number;
  category: string;
  height: number;
  foot: "Derecho" | "Izquierdo" | "Ambidiestro";
  nationality: string;
  agent: string;
  image: string;
  basicStats: BasicStat[];
  goals: number;
  assists: number;
  observations: string;
  scoutingReport: string;
  strengths: string[];
  clips: Clip[];
  videos: Clip[];
  rating: number;
  status: PlayerStatus;
};

export const players: Player[] = [
  {
    id: "parmo",
    name: "Tomás Parmo",
    club: "Independiente",
    position: "MCO",
    positionFull: "Mediapunta (Enganche)",
    age: 18,
    birthYear: 2007,
    category: "Reserva",
    height: 171,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Hernán Berman",
    image: parmo,
    rating: 8.8,
    status: "disponible",
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
      "Enganche clásico formado en el predio de Avellaneda. Referente ofensivo de la Reserva roja, convocado al plantel profesional bajo Gustavo Quinteros. Destaca por visión, control en espacios reducidos y ejecución en pelota parada.",
    scoutingReport:
      "Enganche clásico con visión de juego superior a la media de la categoría. Lectura privilegiada entre líneas y primer toque orientado. Especialista en pelota parada con remate calibrado de tiro libre. Desequilibra en espacios reducidos con cambios de ritmo cortos. Debe seguir trabajando el aspecto físico para sostener el nivel en Primera.",
    strengths: ["Visión de juego", "Pelota parada", "Primer toque", "Desequilibrio"],
    clips: [
      {
        title: "Highlights — Reserva CAI",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/DuMvmkkTq-M/hqdefault.jpg",
        url: "https://youtu.be/DuMvmkkTq-M",
      },
    ],
    videos: [
      {
        title: "Highlights — Reserva CAI",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/DuMvmkkTq-M/hqdefault.jpg",
        url: "https://youtu.be/DuMvmkkTq-M",
      },
    ],
  },
  {
    id: "perez-curci",
    name: "Mateo Pérez Curci",
    club: "Independiente",
    position: "MC",
    positionFull: "Volante interno",
    age: 20,
    birthYear: 2006,
    category: "Reserva",
    height: 179,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: perezCurci,
    rating: 8.5,
    status: "disponible",
    goals: 2,
    assists: 3,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 2 },
      { label: "Asistencias", value: 3 },
      { label: "Amarillas", value: 2 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,79m" },
    ],
    observations:
      "Volante mendocino llegado desde Gimnasia de Mendoza en 2024. Hincha del club y referente de la Reserva, ya integrado al plantel profesional con debut en noviembre de 2025. Versátil entre el 5 y el 8, con buen despliegue y criterio en la salida.",
    scoutingReport:
      "Volante box-to-box con buena lectura del juego y despliegue en ambos sectores. Recupera con intensidad y distribuye con precisión en corto y medio. Se adaptó del enganche al rol de interno sin perder influencia ofensiva. Proyección alta hacia Primera; debe pulir la toma de decisiones bajo presión alta.",
    strengths: ["Despliegue", "Recuperación", "Distribución", "Versatilidad"],
    clips: [],
    videos: [],
  },
  {
    id: "acosta",
    name: "Thiago Acosta",
    club: "River Plate",
    position: "MCO",
    positionFull: "Enganche (MCO)",
    age: 21,
    birthYear: 2004,
    category: "Reserva",
    height: 183,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "The Elegant Game",
    image: acosta,
    rating: 8.7,
    status: "disponible",
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
      "Enganche de inferiores millonarias con buen físico y calidad técnica. Campeón de Copa Proyección con la Reserva y referente creativo del mediocampo. Gol ante Racing en el Torneo de Reserva 2025.",
    scoutingReport:
      "Enganche con lectura superior entre líneas y primer toque orientado al pase filtrado. Controla el ritmo en espacios reducidos y desequilibra con cambios de dirección cortos. Especialista en pelota parada con golpeo calibrado desde tiro libre. Debe seguir ganando continuidad física para sostener el nivel en Reserva y Primera.",
    strengths: ["Visión", "Pelota parada", "Conducción", "Pase filtrado"],
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
    id: "baju",
    name: "Lisandro Bajú",
    club: "River Plate",
    position: "LI",
    positionFull: "Lateral izquierdo",
    age: 20,
    birthYear: 2005,
    category: "Reserva",
    height: 171,
    foot: "Izquierdo",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: baju,
    rating: 8.4,
    status: "disponible",
    goals: 0,
    assists: 4,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 0 },
      { label: "Asistencias", value: 4 },
      { label: "Amarillas", value: 3 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,71m" },
    ],
    observations:
      "Lateral zurdo santafesino formado en Tiro Federal y llegado a River en 2017. Campeón de Copa Proyección y Trofeo de Campeones con la Reserva. Contrato profesional con cláusula de 30 millones de euros; cedido a Montevideo Wanderers en 2026 para ganar minutos.",
    scoutingReport:
      "Lateral ofensivo con gran velocidad y proyección constante por la banda. Sólido en el uno contra uno defensivo y preciso en centros al área. Aporta amplitud y llegada al ataque sin descuidar la marca. Experiencia internacional temprana en Uruguay acelerará su madurez táctica.",
    strengths: ["Velocidad", "Proyección", "Centros", "1v1 defensivo"],
    clips: [],
    videos: [],
  },
  {
    id: "gorosito",
    name: "Dylan Gorosito",
    club: "Boca Juniors",
    position: "LD",
    positionFull: "Lateral derecho",
    age: 20,
    birthYear: 2005,
    category: "Reserva",
    height: 173,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Interplayers",
    image: gorosito,
    rating: 8.6,
    status: "disponible",
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
      "Lateral derecho de gran intensidad y solidez defensiva. Convocado al Mundial Sub-20 con Argentina. Proyección ofensiva constante, firme en la marca y con personalidad competitiva en cada duelo.",
    scoutingReport:
      "Lateral derecho con perfil completo: sólido en la marca uno contra uno, buen despliegue en largo recorrido y llegada al área rival con criterio. Transiciona con velocidad y aporta intensidad en recuperación. Proyección alta tras el Mundial Sub-20; debe seguir puliendo la consistencia en duelos aéreos.",
    strengths: ["Intensidad", "Marca", "Despliegue", "Recuperación"],
    clips: [
      {
        title: "Dylan Gorosito — The Future of Argentina",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/9GV_-bv9a24/hqdefault.jpg",
        url: "https://youtu.be/9GV_-bv9a24",
      },
    ],
    videos: [
      {
        title: "Dylan Gorosito — The Future of Argentina",
        duration: "Video",
        thumb: "https://img.youtube.com/vi/9GV_-bv9a24/hqdefault.jpg",
        url: "https://youtu.be/9GV_-bv9a24",
      },
    ],
  },
  {
    id: "aranda",
    name: "Tomás Leandro Aranda",
    club: "Boca Juniors",
    position: "MCO",
    positionFull: "Enganche (MCO)",
    age: 19,
    birthYear: 2007,
    category: "Reserva",
    height: 164,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: aranda,
    rating: 9.0,
    status: "disponible",
    goals: 3,
    assists: 4,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 3 },
      { label: "Asistencias", value: 4 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,64m" },
    ],
    observations:
      "Enganche categoría 2007, capitán de Séptima y referente de la Reserva bicampeona. Debutó en Primera en enero de 2026 y se consolidó como titular bajo Claudio Úbeda. Admirador de Riquelme, con cláusula estimada en 20 millones de euros.",
    scoutingReport:
      "Enganche de bajo centro de gravedad con excelente control orientado y pausa en el último tercio. Dicta el ritmo del equipo, filtra pases entre líneas y mantiene la calma bajo presión. Capitán natural en inferiores con madurez táctica superior a su edad. Debe seguir desarrollando impacto desde media distancia.",
    strengths: ["Pauses y control", "Pases filtrados", "Liderazgo", "Calma bajo presión"],
    clips: [],
    videos: [],
  },
  {
    id: "herrera",
    name: "Facundo Ezequiel Herrera",
    club: "Boca Juniors",
    position: "DFC",
    positionFull: "Defensor central",
    age: 19,
    birthYear: 2006,
    category: "Reserva",
    height: 180,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "SP",
    image: herrera,
    rating: 8.5,
    status: "disponible",
    goals: 1,
    assists: 0,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 1 },
      { label: "Asistencias", value: 0 },
      { label: "Amarillas", value: 4 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,80m" },
    ],
    observations:
      'Central categoría 2006 apodado por su parecido con Mick Jagger en redes del club. Figura de la Reserva campeona 2025, ejecutor de los penales decisivos en cuartos y final. Contrato hasta 2028 y convocado a entrenamientos con el plantel profesional.',
    scoutingReport:
      "Central de corte clásico con fuerte presencia en el área y liderazgo vocal. Sólido en el juego aéreo y templado en situaciones de máxima presión. Buena salida limpia con primer pase seguro. Proyección clara hacia Primera; debe mejorar la velocidad en espacios abiertos ante delanteros rápidos.",
    strengths: ["Juego aéreo", "Temple", "Marca", "Liderazgo"],
    clips: [],
    videos: [],
  },
  {
    id: "escudero",
    name: "Gonzalo Escudero",
    club: "Racing Club",
    position: "DFC",
    positionFull: "Defensor central",
    age: 19,
    birthYear: 2007,
    category: "Cuarta",
    height: 180,
    foot: "Izquierdo",
    nationality: "Argentina",
    agent: "Hernán Berman",
    image: escudero,
    rating: 8.7,
    status: "disponible",
    goals: 0,
    assists: 1,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 0 },
      { label: "Asistencias", value: 1 },
      { label: "Amarillas", value: 2 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,80m" },
    ],
    observations:
      "Central avellanerense formado en La Academia desde los 3 años. Debutó en Primera con 16 años ante Tigre. Convocado a Selección Sub-17 y Sub-20. Entrenó con categoría 2005 por su contextura y talento con la pelota.",
    scoutingReport:
      "Central zurdo con buena técnica y salida limpia desde atrás. Fuerte en anticipación y juego aéreo para su edad. Se adaptó a categorías superiores con solvencia defensiva. Proyección internacional clara; debe ganar consistencia en duelos físicos contra delanteros experimentados.",
    strengths: ["Salida limpia", "Anticipación", "Juego aéreo", "Técnica"],
    clips: [],
    videos: [],
  },
  {
    id: "sosa",
    name: "Gonzalo Sebastián Sosa",
    club: "Racing Club",
    position: "MCO",
    positionFull: "Enganche / mediapunta",
    age: 21,
    birthYear: 2005,
    category: "Reserva",
    height: 176,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: sosa,
    rating: 8.9,
    status: "disponible",
    goals: 2,
    assists: 5,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 2 },
      { label: "Asistencias", value: 5 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,76m" },
    ],
    observations:
      "Volante creativo oriundo de Rafael Castillo. Pasó por Boca y Defensa y Justicia antes de llegar a Racing a cambio de diez pelotas. Superó una rotura de ligamentos cruzados en 2021; debutó en Primera y Copa Sudamericana en 2026.",
    scoutingReport:
      "Enganche nato con freno, visión periférica y pases de gol en uno o dos toques. No es volante de ida y vuelta sino generador de juego entre líneas. Comparado en inferiores con el estilo de Riquelme por su manejo de la pelota. Debe recuperar ritmo competitivo tras años de inactividad por lesión.",
    strengths: ["Visión", "Pases de gol", "Manejo de balón", "Creatividad"],
    clips: [],
    videos: [],
  },
  {
    id: "mateo-martinez",
    name: "Mateo Ezequiel Martínez",
    club: "Racing Club",
    position: "DFC",
    positionFull: "Defensor central",
    age: 17,
    birthYear: 2008,
    category: "Quinta",
    height: 174,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: mateoMartinez,
    rating: 8.3,
    status: "disponible",
    goals: 2,
    assists: 0,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 2 },
      { label: "Asistencias", value: 0 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,74m" },
    ],
    observations:
      "Central rosarino categoría 2008 con contrato profesional firmado en 2025. Integrante de la Selección Sub-17 que disputó el Mundial de la categoría, con goles ante Fiji. Aún sin debut en Reserva pero con proyección alta en el predio de Avellaneda.",
    scoutingReport:
      "Central joven con buen físico, salida limpia y primer pase preciso. Guapo en el duelo y con buena lectura de líneas de pase rivales. Destacó en el Mundial Sub-17 como referente defensivo. Debe ganar experiencia en Reserva antes del salto a Primera.",
    strengths: ["Primer pase", "Físico", "Lectura defensiva", "Proyección"],
    clips: [],
    videos: [],
  },
  {
    id: "rivas",
    name: "Alejo Benjamín Rivas",
    club: "San Lorenzo",
    position: "MCD",
    positionFull: "Volante central",
    age: 20,
    birthYear: 2006,
    category: "Reserva",
    height: 178,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: rivas,
    rating: 8.4,
    status: "disponible",
    goals: 1,
    assists: 2,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 1 },
      { label: "Asistencias", value: 2 },
      { label: "Amarillas", value: 3 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,78m" },
    ],
    observations:
      "Volante merlense en el club desde 2014. Capitán en varias categorías inferiores y referente de la Reserva azulgrana. Convocado a Primera y a la Selección Sub-20. Especialista en pelota parada y penales.",
    scoutingReport:
      "Volante central con buena pegada, criterio en la distribución y liderazgo natural. Dueño de la pelota parada en inferiores con golpeo limpio y preciso. Recupera con intensidad y mantiene la posesión bajo presión. Proyección a Primera inmediata; debe mejorar el desmarque sin balón en fase ofensiva.",
    strengths: ["Pelota parada", "Distribución", "Liderazgo", "Recuperación"],
    clips: [],
    videos: [],
  },
  {
    id: "blanco",
    name: "Nicolás Blanco",
    club: "San Lorenzo",
    position: "LD",
    positionFull: "Lateral derecho",
    age: 18,
    birthYear: 2007,
    category: "Cuarta",
    height: 175,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "FC3 Sports",
    image: blanco,
    rating: 8.2,
    status: "disponible",
    goals: 0,
    assists: 3,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 0 },
      { label: "Asistencias", value: 3 },
      { label: "Amarillas", value: 2 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,75m" },
    ],
    observations:
      "Lateral escobense formado en el Ciclón desde los 6 años. Debutó en Reserva junto a Rivas y Yaciuk. Utilizado también como lateral izquierdo por su solidez defensiva y proyección ofensiva.",
    scoutingReport:
      "Lateral completo con buena marca, proyección y participación activa en el ataque. Versátil en ambos perfiles por su lectura defensiva y capacidad de centrar. Regular y comprometido en cada categoría. Debe seguir ganando explosividad para duelos contra extremos de élite.",
    strengths: ["Versatilidad", "Marca", "Proyección", "Centros"],
    clips: [],
    videos: [],
  },
  {
    id: "yaciuk",
    name: "Tomás Fabricio Yaciuk",
    club: "San Lorenzo",
    position: "MCO",
    positionFull: "Volante ofensivo",
    age: 18,
    birthYear: 2008,
    category: "Quinta",
    height: 172,
    foot: "Derecho",
    nationality: "Argentina",
    agent: "Sin representante confirmado",
    image: yaciuk,
    rating: 8.6,
    status: "disponible",
    goals: 5,
    assists: 3,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 5 },
      { label: "Asistencias", value: 3 },
      { label: "Amarillas", value: 1 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,72m" },
    ],
    observations:
      "Volante ofensivo moronense en el club desde 2015. Explosivo, veloz y con notable capacidad goleadora. Promovido a Reserva en 2026 tras destacarse en Quinta y Sexta como extremo y mediapunta.",
    scoutingReport:
      "Volante ofensivo desequilibrante con velocidad, potencia y definición certera. Transiciona rápido de extremo a mediapunta con buen timing de llegada al área. Goleador nato para su categoría con movimientos inteligentes sin balón. Debe mejorar la participación en la elaboración y la lectura defensiva en transición.",
    strengths: ["Velocidad", "Definición", "Desequilibrio", "Llegada al área"],
    clips: [],
    videos: [],
  },
  {
    id: "ladstatter",
    name: "Agustín Alejo Ladstatter",
    club: "San Lorenzo",
    position: "EXT",
    positionFull: "Extremo derecho",
    age: 20,
    birthYear: 2005,
    category: "Reserva",
    height: 174,
    foot: "Izquierdo",
    nationality: "Argentina",
    agent: "Dodici",
    image: ladstatter,
    rating: 8.5,
    status: "disponible",
    goals: 2,
    assists: 4,
    basicStats: [
      { label: "PJ", value: 9 },
      { label: "Goles", value: 2 },
      { label: "Asistencias", value: 4 },
      { label: "Amarillas", value: 2 },
      { label: "Rojas", value: 0 },
      { label: "Altura", value: "1,74m" },
    ],
    observations:
      "Extremo sanjuanino. Pasó por River antes de llegar a San Lorenzo a los 14 años. Debutó en Primera en enero de 2025 y se consolidó como titular bajo Damián Ayude, quien también lo dirigió en Reserva.",
    scoutingReport:
      "Extremo zurdo por derecha con regate, velocidad y cambio de ritmo en el uno contra uno. Desborda por banda y centra con criterio; también puede jugar por izquierda o como mediapunta. Mentalidad competitiva forjada tras una adaptación difícil en inferiores. Debe convertir más sus ocasiones claras en Primera.",
    strengths: ["Regate", "Velocidad", "Desborde", "Centros"],
    clips: [],
    videos: [],
  },
  {
    id: "stenta",
    name: "Thiago Stenta",
    club: "Platense",
    position: "DEL",
    positionFull: "Delantero centro",
    age: 18,
    birthYear: 2007,
    category: "Quinta",
    height: 180,
    foot: "Izquierdo",
    nationality: "Argentina",
    agent: "Lesco.Group",
    image: stenta,
    rating: 8.8,
    status: "disponible",
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
      "Delantero centro con zurda de élite y gran poderío físico. Referente goleador de Quinta del Calamar. Domina el juego de espaldas, protege la pelota y define con instinto dentro del área.",
    scoutingReport:
      "Delantero centro con zurda de élite y gran poderío físico. Domina el juego de espaldas al arco, protege la pelota y habilita al equipo. Goleador con instinto en el área y buen timing en el juego aéreo. Proyección alta en Quinta; debe seguir mejorando la movilidad sin balón en transiciones defensivas.",
    strengths: ["Zurda", "Juego de espaldas", "Goleador", "Físico"],
    clips: [],
    videos: [],
  },
];

export const positions = ["Todos", "GK", "DFC", "LI", "LD", "MCD", "MC", "MCO", "EXT", "DEL"];
export const categories = ["Todas", "Reserva", "Cuarta", "Quinta", "Sexta"];
export const clubs = [
  "Todos",
  "River Plate",
  "Boca Juniors",
  "Independiente",
  "Racing Club",
  "San Lorenzo",
  "Platense",
];
