  // Cambio de secciones
  function mostrarSeccion(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // Datos del Barman
  const barman = {
    nombre: "ofelia Rodriguez",
    email: "ofelia.rodriguez@email.com",
    nacimiento: "1980-07-23",
    celular: "3124567890",
    genero: "mujer"
  };

  const imagenGenero = barman.genero === "mujer" ? "/img/descarga.jpg" : "/img/descarga (1).jpg";
  const contenedor = document.getElementById("contenedorBarman");
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-barman");
  tarjeta.innerHTML = `
    <img src="${imagenGenero}" alt="Barman">
    <div class="info-barman">
      <h3>${barman.nombre}</h3>
      <div class="campo"><i class="fa-solid fa-envelope"></i>${barman.email}</div>
      <div class="campo"><i class="fa-solid fa-cake-candles"></i>${barman.nacimiento}</div>
      <div class="campo"><i class="fa-solid fa-phone"></i>${barman.celular}</div>
    </div>
  `;
  contenedor.appendChild(tarjeta);

  // Datos de cócteles desde API del profesor
  const api = {
    "drinks": [
      {
        "strDrink": "Absolut Summertime",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/trpxxs1472669662.jpg",
        "idDrink": "14107"
      },
      {
        "strDrink": "Downshift",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/y36z8c1503563911.jpg",
        "idDrink": "16991"
      },
      {
        "strDrink": "Pink Panty Pulldowns",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/squsuy1468926657.jpg",
        "idDrink": "13535"
      },
      {
        "strDrink": "Vodka Slime",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/apex461643588115.jpg",
        "idDrink": "178362"
      }
    ]
  };

  const coctelesContainer = document.getElementById("coctelesContainer");
  api.drinks.forEach(drink => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
      <h3>${drink.strDrink}</h3>
      <p>Precio: $${drink.idDrink}</p>
      <button>Seleccionar</button>
    `;

    tarjeta.querySelector("button").addEventListener("click", () => {
      tarjeta.classList.toggle("seleccionado");
    });

    coctelesContainer.appendChild(tarjeta);
  });