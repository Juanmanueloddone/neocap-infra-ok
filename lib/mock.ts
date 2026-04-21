export type EventCard = {
  id: string;
  source: string;
  country: string;
  topic: string;
  actor: string;
  title: string;
  summary: string;
  question: string;
  imageUrl?: string;
};

export const mockEvent: EventCard = {
  id: "event-1",
  source: "World News Feed",
  country: "Estados Unidos",
  topic: "guerra",
  actor: "Donald Trump",
  title: "Trump impulsa más gasto militar mientras suben costos de vida.",
  summary:
    "El presupuesto vuelve a priorizar guerra, presión internacional y gasto militar mientras la vida cotidiana se encarece.",
  question:
    "Si fueras ciudadano de EE.UU., ¿pagarías contento esos impuestos?",
  imageUrl:
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
};

export const essaySummary = [
  "El problema no es un partido ni un gobierno aislado. El problema es el sistema.",
  "Municipio 0 propone decisión directa en lugar de representación cerrada.",
  "El Índice NEOC mide condiciones reales de vida: agua, aire, naturaleza, energía, comunidad, paz y salud.",
  "La moneda NEOC deriva su valor de ese estado real del sistema y no del humo fiduciario.",
  "En NEOCAP votás hechos reales, ganás NEOC y afectás un mundo medible."
];
