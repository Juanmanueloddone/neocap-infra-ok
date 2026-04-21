export type EventCard = {
  id: string;
  source: string;
  country: string;
  topic: string;
  actor: string;
  title: string;
  summary: string;
  question: string;
  line: string;
  imageUrl?: string;
  url?: string;
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
  line:
    "Si casi nadie elegiría sostener esto en su propia vida, entonces no es voluntad popular: es poder concentrado.",
  imageUrl:
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
};
