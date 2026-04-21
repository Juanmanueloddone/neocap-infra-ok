export type EventCard = {
  id: string;
  country: string;
  topic: string;
  actor: string;
  title: string;
  summary: string;
  question: string;
  line: string;
};

export const mockEvent: EventCard = {
  id: "event-1",
  country: "Estados Unidos",
  topic: "guerra",
  actor: "Donald Trump",
  title: "Trump impulsa más gasto militar mientras suben costos de vida.",
  summary:
    "Mientras se agrava el costo de vivir, el poder redirige recursos a guerra y dominación exterior.",
  question:
    "Si fueras ciudadano de EE.UU., ¿pagarías contento esos impuestos?",
  line:
    "Si casi nadie elegiría sostener esto en su propia vida, entonces no es voluntad popular: es poder concentrado.",
};

export const essaySummary = [
  "El problema no es un partido ni un gobierno aislado. El problema es el sistema.",
  "Municipio 0 propone decisión directa en lugar de representación cerrada.",
  "El Índice NEOC mide condiciones reales de vida: agua, aire, naturaleza, energía, comunidad, paz y salud.",
  "La moneda NEOC deriva su valor de ese estado real del sistema y no del humo fiduciario.",
  "En NEOCAP votás hechos reales, ganás NEOC y afectás un mundo medible."
];
