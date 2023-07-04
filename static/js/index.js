
// capturo los clicks en las imagenes 
document.getElementById("Batman").addEventListener("click", function(event) { 
   cargarHeroes("Batman");
  });

document.getElementById("Superman").addEventListener("click", function(event) { 
    cargarHeroes("Superman");
   });

document.getElementById("Hulk").addEventListener("click", function(event) { 
    cargarHeroes("Hulk");
   });

document.getElementById("Spiderman").addEventListener("click", function(event) { 
    cargarHeroes("Spider-Man");
   });

document.getElementById("Venom").addEventListener("click", function(event) { 
    cargarHeroes("Venom");
   });

document.getElementById("Thor").addEventListener("click", function(event) { 
    cargarHeroes("Thor");
   });

document.getElementById("Joker").addEventListener("click", function(event) { 
    cargarHeroes("Joker");
   });

document.getElementById("Capitan").addEventListener("click", function(event) { 
    cargarHeroes("Captain America");
   });



const cargarHeroes = async(pj) => {
    try{
        const rta = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        // console.log(rta)
        // si esta todo ok
        if(rta.status === 200){
            const datos = await rta.json();
            
            // itero el array para mostrar solo los datos que necesito
            datos.forEach(personaje => {
                if (personaje.name == pj ){
                    
                    // console.log(personaje.name,personaje.biography,personaje.images.md)
                    crearPersonaje(personaje);
                    bioPersonaje(personaje)
                }
                // console.log(personaje.name,personaje.biography);
            })

        
            // console.log(datos);
        }else if (rta.status === 401){
           console.log('error');
           
        }else if (rta.status === 404){
            console.log('el personaje solicitado no existe')
        }

    }
    catch(error){
        console.log(error)
    }
}


// funcion para crear el div con el se muestra el resultado de la consulta (nombre foto y alias)
function crearPersonaje(personaje){
    const img = document.createElement('img');
    img.src = personaje.images.md;

    const h2 = document.createElement('h2')
    h2.textContent = personaje.name;

    const h3 = document.createElement('h3')
    h3.textContent = "Alias";

    const p = document.createElement('p');
    p.textContent = personaje.biography.aliases;

    



    // document.getElementById('infoPersonaje').innerHTML = '';
    const div = document.getElementById('infoPersonaje');
    div.innerHTML=''
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    div.style.display = ""

}
// funcion para crear el div con el se muestra el resultado de la consulta (fullname, alineacion, lugar de nacimiento)
function bioPersonaje(personaje){

    const fullName= document.createElement('h2');
    fullName.textContent = "Nombre"
    const name = document.createElement('h3');
    name.textContent = personaje.biography.fullName ;
    const bando = document.createElement('h2');
    bando.textContent = "Bando";
    const alineacion = document.createElement('h3');
    alineacion.textContent = personaje.biography.alignment;
    const nacimiento = document.createElement('h2');
    nacimiento.textContent = "Lugar de nacimiento";
    const placeOfBirth = document.createElement('h3');
    placeOfBirth.textContent = personaje.biography.placeOfBirth



    const div = document.getElementById('bioPersonaje');
    div.innerHTML='';
    div.appendChild(bando);
    div.appendChild(alineacion);
    div.appendChild(fullName);
    div.appendChild(name);
    div.appendChild(nacimiento);
    div.appendChild(placeOfBirth);
    div.style.display = ""
}

