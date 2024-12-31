import Spain from "../icons/Spain.astro";
import Germany from "../icons/Germany.astro";
import UnitedStates from "../icons/UnitedStates.astro";

interface Project {
  metaTitle: string;
  metaDescription: string;
  images: {
    label?: string[];
    src: string[];
    description: string[];
  }[];
  country: string;
  iconCountry: any;
  date: string;
  title: string;
  description: string;
  slug: string;
}

const PROJECTS: Project[] = [
  {
    metaTitle: "a ",
    metaDescription: "S",
    images: [
      {
        src: [
          "/richtershof-alemania-cover-card.webp",
          "/richtershof-alemania-cover-card.webp",
        ],
        description: ["Primera vez en alemania", "Segunda vez en Alemania"],
      },
    ],
    country: "Alemania",
    iconCountry: Germany,
    date: "2014",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    title: "Weinromantikhotel, cocinando en Alemania",
    slug: "alemania-weinromantikhotel",
  },
  {
    metaTitle: "a ",
    metaDescription: "S",
    images: [
      {
        src: [
          "/about-me/amigo-camion-catering-rafael-chef-armando-rivera.webp",
          "/about-me/amigo-camion-catering-rafael-chef-armando-rivera.webp",
        ],
        description: ["Primera vez en alemania", "Segunda vez en Alemania"],
      },
    ],
    country: "Marruecos",
    iconCountry: Germany,
    date: "2024-11-25",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    title: "Sabores de Marruecos",
    slug: "aa",
  },
  {
    metaTitle: "a ",
    metaDescription: "S",
    images: [
      {
        src: [
          "/richtershof-alemania-cover-card.webp",
          "/richtershof-alemania-cover-card.webp",
        ],
        description: ["Primera vez en alemania", "Segunda vez en Alemania"],
      },
    ],
    country: "Marruecos",
    iconCountry: Germany,
    date: "2024-11-25",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    title: "Sabores de Marruecos",
    slug: "ss",
  },
  {
    metaTitle: "a ",
    metaDescription: "S",
    images: [
      {
        src: [
          "/about-me/amigo-camion-catering-rafael-chef-armando-rivera.webp",
          "/about-me/amigo-camion-catering-rafael-chef-armando-rivera.webp",
        ],
        description: ["Primera vez en alemania", "Segunda vez en Alemania"],
      },
    ],
    country: "Marruecos",
    iconCountry: Germany,
    date: "2024-11-25",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    title: "Sabores de Marruecos",
    slug: "dd",
  },
];

export default PROJECTS;
