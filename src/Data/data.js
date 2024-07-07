
const productos = [
    {
      id: "Adff21",
      nombre: "Empanadas",
      descripcion: "Descubre el sabor inigualable de nuestras empanadas artesanales. Perfectas para cualquier ocasión, nuestras empanadas son la elección ideal para una comida rápida, un aperitivo delicioso o un bocado para llevar. ¡Ven y prueba la auténtica tradición y sabor que solo nuestras empanadas pueden ofrecer!",
      stock: 12,
      categoria: "restaurant",
      imagen: "/img/empanadas.jpg",
      precio: 1000
    },
    {
      id: "Gjmn222",
      nombre: "Pastas",
      descripcion: "Sumérgete en el delicioso mundo de nuestras pastas frescas. Elaboradas con ingredientes de la más alta calidad, nuestras pastas ofrecen una experiencia culinaria única. ¡Disfruta de la autenticidad y frescura de nuestras pastas, preparadas para satisfacer tus antojos y elevar tus comidas!",
      stock: 10,
      categoria: "restaurant",
      imagen: "/img/pasta.jpg",
      precio: 3000
    },
    {
      id: "Lom222",
      nombre: "Pizzas",
      descripcion: "Deléitate con nuestras pizzas artesanales. Nuestras pizzas están diseñadas para satisfacer todos los gustos. Cada pizza es horneada a la perfección, logrando una mezcla ideal de sabores en cada bocado. Nuestras pizzas son la opción ideal para cualquier ocasión. ¡Ven y prueba la diferencia de una pizza hecha con pasión y calidad insuperable!",
      stock: 5,
      categoria: "restaurant",
      imagen: "/img/pizza.jpg",
      precio: 6000
    },
    {
      id: "Htm123",
      nombre: "Sandwich",
      descripcion: "Descubre la frescura y el sabor de nuestros sándwiches. Desde clásicos como el sándwich de jamón y queso hasta opciones innovadoras y saludables, tenemos algo para todos los gustos. Nuestros sándwiches están hechos para satisfacer tus antojos. ¡Ven y disfruta de la calidad y el sabor inigualable de nuestros sándwiches!",
      stock: 3,
      categoria: "restaurant",
      imagen: "/img/sandwich.jpg",
      precio: 2500
    },
    {
      id: "Jfw222",
      nombre: "Chocolate Cofler Block",
      descripcion: "Ideal para disfrutar su cremosidad y crocancia en un solo bocado. Perfecto para regalar a quien más quieras y compartir con tus amigos",
      stock: 1,
      categoria: "kiosco",
      imagen: "/img/block.jpg",
      precio: 1600
    },
    {
      id: "Gtm222",
      nombre: "Gaseosa Coca-Cola Zero",
      descripcion: "Nada supera el sabor de una Coca-Cola. Diseñado para acompañar cada momento. Tan rica, que es muy dificil diferenciarla de la original",
      stock: 4,
      categoria: "kiosco",
      imagen: "/img/coca.jpeg",
      precio: 1400
    },
    {
      id: "Gtm221",
      nombre: "Alfajor Guaymallen",
      descripcion: "Es la exquisitez argentina que conquista paladares con su combinación perfecta de suave masa, generosa capa de dulce de leche y el toque final de chocolate. No esperes más, y disfruta al lado de tus familiares o amigos",
      stock: 8,
      categoria: "kiosco",
      imagen: "/img/guaymallen.png",
      precio: 500
    },
    {
      id: "Gtm566",
      nombre: "Gaseosa Sprite",
      descripcion: "Es una bebida transparente que al probrarla te lleva a una experiencia refrescante, con su delicioso sabor a lima limón. Ideal para disfrutarla sola o acompañar tus comidas",
      stock: 5,
      categoria: "kiosco",
      imagen: "/img/sprite.jpg",
      precio: 1100
    },
    {
      id: "Tmy543",
      nombre: "Royal Canin Poodle Adulto",
      descripcion: "Royal Canin Poodle 30 es un alimento balanceado recomendado para perros caniches de más de 10 meses de edad. Colabora con la belleza del pelaje fino y rizado, la reducción del sarro y el mantenimiento de las funciones cognitivas. Contiene nutrientes que ayudan a mantener la salud del pelaje lanoso del Poodle. Contribuye al mantenimiento del tono muscular del Poodle y ayuda a estimular su apetito.",
      stock: 6,
      categoria: "mascotas",
      imagen: "/img/royalCaninPoodle.webp",
      precio: 10000
    },
    {
      id: "Tmy545",
      nombre: "Excellent Smart Gato Adulto Pollo Y Arroz",
      descripcion: "Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes. Ayuda a mantener un pH adecuado en la orina, el cual contribuye a impedir la formación de cálculos y cristales. Los ácidos activos grasos omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante. También las proteínas de pollo de alta digestibilidad garantizan el desarrollo de músculos fuertes y sanos.",
      stock: 7,
      categoria: "mascotas",
      imagen: "/img/purinaExcellent.webp",
      precio: 37000
    },
    {
      id: "Tmy546",
      nombre: "Juguete Perro Kong Crunch Air Ball",
      descripcion: "Mantén a tu perro entretenido y activo con nuestra divertida pelota de juguete. Diseñada especialmente para masticar y jugar, esta pelota es perfecta para lanzar, perseguir y atrapar. Su textura y rebote impredecible mantendrán a tu perro intrigado y comprometido durante horas. Ideal para juegos en interiores y exteriores, nuestra pelota de juguete es el complemento perfecto para la rutina diaria de tu mascota. ¡Haz feliz a tu perro con un juguete que garantiza diversión sin fin!",
      stock: 10,
      categoria: "mascotas",
      imagen: "/img/juguetePerro.webp",
      precio: 4400
    },
    {
      id: "Tmy547",
      nombre: "Juguete para Gato CanCat",
      descripcion: "Despierta el instinto cazador de tu gato con nuestra divertida vara con un ratón de juguete. Diseñada para ofrecer horas de entretenimiento, esta vara cuenta con un ratón suave y realista que cuelga y se mueve de manera impredecible, capturando la atención y el interés de tu felino. Esta vara es ideal para fortalecer el vínculo entre tú y tu mascota mientras disfrutan de momentos de diversión juntos. ¡Haz que cada día sea una aventura con nuestra vara con ratón para gatos!",
      stock: 15,
      categoria: "mascotas",
      imagen: "/img/jugueteGato.webp",
      precio: 5500
    }
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }
  
  export { obtenerProductos }
  