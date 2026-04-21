export type NewsItem = {
  id: string;
  source: string;
  country: string;
  topic: string;
  actor: string;
  title: string;
  summary: string;
  question: string;
  imageUrl?: string;
  url?: string;
};

export async function getNews(): Promise<NewsItem[]> {
  return [
    {
      id: "1",
      source: "World News Feed",
      country: "Estados Unidos",
      topic: "guerra",
      actor: "Donald Trump",
      title: "Trump impulsa más gasto militar mientras suben costos de vida.",
      summary:
        "El presupuesto vuelve a priorizar guerra y presión exterior mientras se encarece la vida cotidiana.",
      question:
        "Si fueras ciudadano de EE.UU., ¿pagarías contento esos impuestos?",
      imageUrl:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "2",
      source: "World News Feed",
      country: "Israel",
      topic: "guerra",
      actor: "Gobierno de Israel",
      title: "Bombardeo sobre infraestructura civil en zona de conflicto.",
      summary:
        "Un nuevo ataque vuelve a dejar víctimas civiles y reabre el debate sobre el costo humano de la guerra.",
      question: "¿Vos habrías ordenado eso?",
      imageUrl:
        "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1200&q=80",
    },
  ];
}
``
