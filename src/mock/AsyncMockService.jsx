const productos = [
  {
    id: '1',
    name: 'Short',
    description: 'Short de entrenamiento resistente al cloro, pensado para sesiones frecuentes. Ajuste cómodo con soporte frontal y cintura segura. Secado rápido y tejido durable que mantiene forma y color. Ideal para piscina y trabajos de técnica.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-short.webp',
  },
    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },
      {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
  },    {
    id: '2',
    name: 'Jammer',
    description: 'Jammer hidrodinámico para entrenamientos intensivos. Reduce la resistencia al avance y ofrece sujeción muscular suave. Tejido de secado rápido, alta resistencia al cloro y protección UV. Ajuste firme sin sacrificar comodidad ni movilidad.',
    price: 100,
    stock: 10,
    category: 'hombre',
    image: '/img/hombre-jammer.webp',
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