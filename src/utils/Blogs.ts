import Spain from "../icons/Spain.astro";
import Germany from "../icons/Germany.astro";
import UnitedStates from "../icons/UnitedStates.astro";

interface Blog {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  date: string;
  country: string;
  iconCountry: any;
  mainImage: string;
  images: {
    label?: string[];
    src: string[];
    description: string[];
  }[];
}

const BLOGS: Blog[] = [
  {
    slug: "rodaje-pelicula-knight-and-day",
    metaTitle: "Rodaje de Knight and Day con Tom Cruise y Cameron Diaz | Chef Armando Rivera",
    metaDescription: "Armando Rivera, chef del catering Rafael, participó en el rodaje de Knight and Day en Austria y Sevilla. Su colaboración destacó la cocina española en una producción de alto nivel junto a Tom Cruise, Cameron Diaz y el director James Mangold.",
    title: "Rodaje de pelicula Knight and day con Tom cruise y Cameron Diaz",
    description:
      "Durante el rodaje de Knight and Day, participé como chef del equipo de catering Rafael de Cine, brindando servicios culinarios de alta calidad para una mega producción internacional. La filmación se realizó entre Austria y Sevilla, con la presencia de los reconocidos actores Tom Cruise y Cameron Diaz, además del director James Mangold. Nuestra labor consistió en garantizar una experiencia para el elenco y equipo de producción, la cocina española fue protagonista, destacándose y aportando un valor cultural y sensorial al proyecto cinematográfico.",
    date: "2009",
    country: "Austria y España",
    iconCountry: Spain,
    mainImage:
      "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279002/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-09_w8uvxl.jpg",
    images: [
      {
        src: [
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278998/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-000_st526y.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278998/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-00_rgl6yz.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278999/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-02_ze6lmv.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278999/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-03_qwt8pc.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279000/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-04_fb29fg.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279000/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-05_paz5mp.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279001/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-06_myqwb0.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279001/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-07_s7i02l.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279002/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-08_uzwrww.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279002/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-09_w8uvxl.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279003/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-10_k6pnip.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279003/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-11_h8fkvi.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279004/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-12_uk4xa2.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279004/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-13_koznej.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279005/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-14_izbdqm.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279005/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-15_omcb1j.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279005/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-16_cpmowd.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279006/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-17_zdghwv.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279006/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-18_rm23if.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279007/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-19_fgedcb.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279007/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-20_u41e4f.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279008/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-21_heuppp.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279008/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-22_dm3y56.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279009/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-23_o0acbb.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279009/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-24_p24qja.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279010/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-25_jaupds.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279010/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-26_jjkulz.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736279011/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-27_r53x76.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278993/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-28_a4jeei.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278995/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-29_qq7fzt.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278994/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-30_vfiofj.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278994/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-31_pclkup.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278994/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-32_oyfkpj.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278995/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-33_ro9auz.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278994/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-34_ls1xqe.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278995/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-35_mfy8uz.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278996/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-36_xy4we1.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278996/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-37_ezt7bz.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278996/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-38_agz6ka.jpg",
          "https://res.cloudinary.com/docw5yqzl/image/upload/v1736278997/chef-armando-rivera/blog/sevilla-wichita/pelicula-wichita-austria-sevilla-39_hcmkqf.jpg",
        ],
        description: [
          "Basecamp del catering",
          "Fortaleza “festung Hohensalzbburg” en Salzburgo – Austria, punto de rodaje 01",
          "Fortaleza “festung Hohensalzbburg” en Salzburgo – Austria, punto de rodaje 02",
          "Fortaleza “Festung Hohensalzbburg” en Salzburgo – Austria, punto de rodaje 03",
          "Food truck Catering Rafael",
          "Una noche de grill 01",
          "Una noche de grill 02",
          "Una noche de grill 03",
          "Actores principales Cameron Diaz y Tom Cruise",
          "Con el actor Español Jordi Mollà",
          "En el cumpleaños del director James Mangold 01",
          "Cumpleaños del director James Mangold 02",
          "Con el equipo de Catering Rafael 01",
          "Con el equipo de Catering Rafael 02",
          "Con el equipo de Catering Rafael 03",
          "Con el equipo de Catering Rafael 04",
          "Con el equipo de Catering Rafael 05",
          "Con el equipo de Catering Rafael 06",
          "Con el equipo de Catering Rafael 07",
          "Con el equipo de Catering Rafael 08",
          "Recorriendo las calles de Salzburgo - Austria 01",
          "Recorriendo las calles de Salzburgo - Austria 02",
          "Recorriendo las calles de Salzburgo - Austria 03",
          "Recorriendo las calles de Salzburgo - Austria 04",
          "Recorriendo las calles de Salzburgo - Austria 05",
          "Comida de equipo de producción 01",
          "Comida de equipo de producción 02",
          "Noche de vinos calientes",
          "Rio Salzach en Salzburgo - Austria",
          "Tradicionales huevos de pascua en Austria",
          "En el bar de Perejil en Sevilla 01",
          "En el bar de Perejil en Sevilla 02",
          "En el bar de Perejil en Sevilla 03",
          "Dia de rodaje en Sevilla 01",
          "Dia de rodaje en Sevilla 02",
          "Parte del equipo de producción en Sevilla 01",
          "Parte del equipo de producción en Sevilla 02",
          "Buffet ¡Es hora de comer!",
          "Panorámicas de Sevilla 01",
          "Panorámicas de Sevilla 02",
        ],
      },
    ],
  },
];

export default BLOGS;
