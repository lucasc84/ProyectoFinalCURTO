const productos = [
  {
    id: '01',
    name: 'Short',
    description: 'Short de entrenamiento resistente al cloro, pensado para sesiones frecuentes. Ajuste cómodo con soporte frontal y cintura segura. Secado rápido y tejido durable que mantiene forma y color. Ideal para piscina y trabajos de técnica.',
    price: 65000,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-short.webp',
  },
    {
    id: '02',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 70000,
    stock: 12,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },
      {
    id: '03',
    name: 'Short de Baño',
    description: 'Short versátil para piscina y playa con calce relajado. Cintura elástica con cordón, bolsillos laterales y malla interior para mayor confort. Secado rápido y tejido liviano para moverte con libertad dentro y fuera del agua.',
    price: 60000,
    stock: 15,
    category: 'hombre',
    image: '/img/hombre-malla.webp',
  },    {
    id: '04',
    name: 'Neoprene Masculino',
    description: 'Neoprene para aguas abiertas orientado a flotabilidad y abrigo. Paneles de distintos espesores que mejoran la posición en el agua, flexibilidad en hombros y puños para cambios rápidos. Cuello cómodo que minimiza rozaduras.',
    price: 120000,
    stock: 8,
    category: 'hombre',
    image: '/img/hombre-traje-neoprene.webp',
  },    {
      id: '05',
    name: 'Malla Enteriza Clásica',
    description: 'Enteriza de uso intensivo con espalda que favorece la movilidad de hombros. Tejido duradero, resistente al cloro y de secado rápido. Soporte frontal y calce que acompaña sin comprimir. Ideal para entrenar a diario..',
    price: 65000,
    stock: 8,
    category: 'mujer',
    image: '/img/mujer-malla-enterisa-clasica.webp',
  },    {
    id: '06',
        name: 'Malla Enteriza Powerskin',
    description: 'Enteriza de rendimiento orientada a velocidad y compresión estratégica. Tejido liviano e hidrodinámico que reduce turbulencias. Sujeción focalizada que mantiene la energía muscular sin limitar la movilidad. Apta para sesiones exigentes.',
    price: 75000,
    stock: 19,
    category: 'mujer',
    image: '/img/mujer-malla-enterisa-powerskin.webp',
  },    {
  id: '07',
    name: 'Bikini',
    description: 'Bikini de entrenamiento con alta resistencia al cloro. Calce seguro y libertad total de movimiento para series largas. Secado rápido y colores estables. Forrería frontal para mayor comodidad y confianza en cada brazada.',
    price: 55000,
    stock: 11,
    category: 'mujer',
    image: '/img/mujer-bikini.webp',
  },    {
    id: '08',
    name: 'Neoprene Femenino',
    description: 'Neoprene para nadadoras de aguas abiertas que combina flotabilidad, flexibilidad y aislamiento térmico. Corte que evita rozaduras en cuello y costuras selladas para mayor confort. Facilita una postura eficiente y brazadas fluidas.',
    price: 120000,
    stock: 16,
    category: 'mujer',
    image: '/img/mujer-traje-neoprene.webp',
  },    {
    id: '09',
    name: 'Antiparras',
    description: 'Antiparras con sello cómodo y estable que reduce presión en el contorno ocular. Lentes con protección UV y tratamiento antiempañante para visión clara. Tira ajustable y perfil bajo para entrenar sin distracciones.',
    price: 23000,
    stock: 20,
    category: 'accesorios',
    image: '/img/accesorios-antiparras.webp',
  },    {
    id: '10',
    name: 'Bolso',
    description: 'Bolso deportivo amplio y resistente, ideal para llevar equipo de natación. Compartimento principal ventilado, bolsillos internos para organizar y bolsillo externo para acceso rápido. Correa regulable y manijas dobles para transporte cómodo.',
    price: 90000,
    stock: 11,
    category: 'accesorios',
    image: '/img/accesorios-bolso.webp',
  },    {
    id: '11',
    name: 'Tapones de Oído',
    description: 'apones de oído de silicona con diseño de triple aro que ayuda a evitar la entrada de agua. Ajuste suave y seguro, fácil de colocar y retirar. Permiten buena percepción del entorno sin comprometer el sellado.',
    price: 12000,
    stock: 4,
    category: 'accesorios',
    image: '/img/accesorios-tapones-oido.webp',
  },    {
    id: '12',
    name: 'Gorra',
    description: 'Gorra de natación 100% silicona con ajuste anatómico y acabado suave. Protege el cabello, reduce la fricción y ayuda a mantener la temperatura. Colocación sencilla y excelente durabilidad para el uso diario.',
    price: 13000,
    stock: 33,
    category: 'accesorios',
    image: '/img/accesorios-gorra.webp',
  },
];


let error = false
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (error) {
            reject('Error al obtener los productos')
        } else {
      resolve(productos)
    }
    }, 2000);
  });
}


// OPCION 1 - Funcion que devuelve un item
export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() =>{
let prod = productos.find ((prod) => prod.id === id)
resolve (prod)
    }, 2000);
  })
}