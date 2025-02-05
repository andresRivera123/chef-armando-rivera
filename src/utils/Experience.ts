import Spain from "../icons/Spain.astro";
import Germany from "../icons/Germany.astro";
import UnitedStates from "../icons/UnitedStates.astro";

interface Experience {
  date: string;
  title: string;
  icon: any;
  ubication: string;
  description: string;
  linkTitle?: string;
  linkURL?: string;
  image: string;
}

export const EXPERIENCE: Experience[] = [
  {
    date: "2005 - Actualidad",
    title: "Cocinero Comida Española",
    icon: Spain,
    ubication: "Rafael Servicios de Catering Internacional. Madrid, España.",
    description:
      "Responsable de la producción y elaboración de alimentos como Cocinero y jefe de Cocina para producciones cinematográficas de alto perfil, tanto en películas como en series nacionales e internacionales. Aseguré la calidad y consistencia de los menús, adaptando la oferta culinaria a las necesidades específicas de cada producción y supervisando al equipo de cocina. ",
    linkTitle: "Conocer empresa",
    linkURL: "https://rafaelcatering.com/",
    image: "/about-me/camion-catering-rafael-chef-armando.webp",
  },
  {
    date: "2014 - 2015",
    title: "Chef de Partida en Gastronomía Mediterránea",
    icon: Germany,
    ubication: "Weinromantikhotel Richtershof, Alemania.",
    description:
      "Responsable del desarrollo y planificación de menús personalizados para los huéspedes del hotel y del restaurante culinario, asegurando la calidad y autenticidad de los platos. ",
    linkTitle: "Conocer el hotel",
    linkURL: "https://www.weinromantikhotel.com/",
    image:
      "/about-me/experiencia-richtershof-lemania-chef-armando-rivera-colegas.webp",
  },
  {
    date: "2009",
    title: "Cocinero Comida Rápida",
    icon: UnitedStates,
    ubication: "Deli Carwash. New York, Estados Unidos.",
    description:
      "Responsable de la preparación y cocción de menús americanos en un entorno de alta demanda y ritmo acelerado. ",
    image: "/about-me/colegas-estados-unidos-chef-armando-rivera.webp",
  },
  {
    date: "2009",
    title: "Cocinero Comida Americana",
    icon: UnitedStates,
    ubication: "Brewing Company Restauran. New York, Estados Unidos.",
    description:
      "Responsable de la preparación y presentación de una variedad de platos típicos de ambas cocinas (americana y mexicana) en un entorno de alto volumen.",
    linkTitle: "Conocer Pub",
    linkURL: "https://es.restaurantguru.com/Chelsea-Brewing-Company-New-York",
    image: "/about-me/nueva-york-estatua-libertad-chef-armando-rivera.webp",
  },
  {
    date: "1998 - 2003",
    title: "Cocinero en Comida Castellana Abulense",
    icon: Spain,
    ubication: "Restaurante Los Galayos. Madrid, España",
    description:
      "Un establecimiento de comida castellana avulense desde 1894; Encargado de la preparación y cocción de platos tradicionales españoles.",
    linkTitle: "Conocer restaurante",
    linkURL: "https://www.losgalayos.net/",
    image: "",
  },
  {
    date: "1995 -  1998",
    title: "Cocinero Comida Castellana",
    icon: Spain,
    ubication: "Restaurante La Barraca. Madrid, España",
    description:
      "Una casa valenciana especializada en arroces y paellas, fui responsable de la preparación y ejecución de una amplia variedad de platos tradicionales. Trabajé en una arrocería de renombre, donde perfeccioné la técnica de cocción de arroces y la elaboración de paellas, asegurando un sabor auténtico y una presentación impecable. ",
    linkTitle: "Conocer restaurante",
    linkURL: "https://www.labarraca.es/",
    image: "",
  },
];
