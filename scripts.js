const mates = [
    {
        title: "MATE POKEBOLA",
        price: 14.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/PokebolaFrente-min.jpg",
        image2: "https://tumatemza.vercel.app/medios/imgLivianas/PokebolaCostado.jpg",
        image3:"https://tumatemza.vercel.app/medios/imgLivianas/PokebolaArriba.jpg",
        url: ""
    },
    {
        title: "MATE BULBASAUR ",
        price: 14.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/bulsasor1-min.jpg",
        image2: "",
        image3:"",
        url: ""
    },{
        title: "MATE CASA DE PAPEL",
        price: 14.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/CasaDePapel-min.jpg",
        image2: "",
        image3:"",
        url: ""
    },
    {
        title: "MATE SQUIRTLE",
        price: 14.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/squirtle1-min.jpg",
        image2: "",
        image3:"",
        url: ""
    },
    {
        title: "MATE HOMERO",
        price: 14.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/Homero-min.jpg",
        image2: "",
        image3:"",
        url: ""
    },
    {
        title: "MATE KITTY",
        price: 19.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/Kitty2-min.jpg",
        image2: "",
        image3:"",
        url: ""
    },
    {
        title: "MATE BUZZ LIGHTYEAR",
        price: 19.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/buzz1-min.webp",
        image2: "",
        image3:"",
        url: ""
    },
    {
        title: "MATE MINION",
        price: 19.99,
        image: "https://tumatemza.vercel.app/medios/imgLivianas/MinionFrente-min.webp",
        image2: "",
        image3:"",
        url: ""
    }
];
  
  let busqueda = document.getElementById('miBusqueda');
  
  busqueda.addEventListener('keyup', function() {
    let valor = busqueda.value.toUpperCase();
    let resultados = document.getElementById('resultadosBusqueda');
  
    if (busqueda.value.trim() === '') {
      resultados.innerHTML = '';
      return;
    }
  
    resultados.innerHTML = '';
  
    mates.forEach((mate, index) => {
      if(mate.title.toUpperCase().includes(valor)) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = mate.image;
        img.alt = mate.title;
        img.style.width = "100px";
        img.style.height = "auto";
        let p = document.createElement('p');
        p.textContent = mate.title;
        let precio = document.createElement('p');
        precio.textContent = 'Precio: $' + mate.price;
        precio.className = 'precio';
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(precio);
  
        div.addEventListener('click', function() {
            window.location.href = 'detalles.html?index=' + index;
          });
  
        resultados.appendChild(div);
      }
    });
  });
  