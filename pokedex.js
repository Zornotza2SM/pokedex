

// MODELOA

let pokedex;
let pokemon;
let num = 0;

async function init(){

    pokedex = await fetch ("assets/pokedex.json")
        .then(response => response.json())

    pokemon = pokedex[0]


    //Deitu vista lehenengo aldiz
    view()
}

function view(){
    
    listaView()
    pokemonView()

    setTimeout(()=> {
        if(num<9){
            num++;
        }else{
            num=0;
        }
        cambiarPokemonIndex(num);  
    }, 1000);

}

function listaView(){
    document.getElementById("pokedex-lista").innerHTML =

    `<ul>
        ${pokedex.map(poke => `<li 
            
            class="${poke.name == pokemon.name ? "active" : ""}">
            
            ${poke.name}
            
            </li>` ).join("")}
    <ul>
    `
}

function cambiarPokemonNombre(name){
    pokemon = pokedex.find(poke => poke.name == name)
    view();
}
function cambiarPokemonIndex(num){
    pokemon = pokedex[num]
    view()
}

/// VISTA

function pokemonView() {

    document.getElementById("pokemon-view").innerHTML = `
    

    <div class="left-column">
        <div class="pokemon-image-wrapper">
            <img src="assets/images/${pokemon.image}" alt="${pokemon.name}" class="pokemon-img">
        </div>

        <div class="stats-card">
            <h3>Puntos de base</h3>
            <div class="chart-container">
                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.ps}%;"></div>
                        <div class="bar-grid"></div> </div>
                    <span class="label">PS</span>
                </div>

                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.ataque}%;"></div>
                        <div class="bar-grid"></div>
                    </div>
                    <span class="label">Ataque</span>
                </div>

                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.defensa_especial}%;"></div>
                        <div class="bar-grid"></div>
                    </div>
                    <span class="label">Defensa</span>
                </div>

                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.ataque_especial}%;"></div>
                        <div class="bar-grid"></div>
                    </div>
                    <span class="label">Ataque Especial</span>
                </div>

                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.defensa}%;"></div>
                        <div class="bar-grid"></div>
                    </div>
                    <span class="label">Defensa Especial</span>
                </div>

                <div class="stat-col">
                    <div class="bar-track">
                        <div class="bar-fill" style="height: ${pokemon.stats.velocidad}%;"></div>
                        <div class="bar-grid"></div>
                    </div>
                    <span class="label">Velocidad</span>
                </div>
            </div>
        </div>
    </div>

    <div class="right-column">
        <p class="description">
            ${pokemon.description}
        </p>

        <div class="info-box">
            <div class="info-row">
                <div class="info-item">
                    <span class="info-label">Altura</span>
                    <span class="info-value">${pokemon.altura}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Categoría</span>
                    <span class="info-value">${pokemon.categoria}</span>
                </div>
            </div>
            
            <div class="info-row">
                <div class="info-item">
                    <span class="info-label">Peso</span>
                    <span class="info-value">${pokemon.peso}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Habilidad</span>
                    <span class="info-value">${pokemon.habilidad} <span class="question">?</span></span>
                </div>
            </div>

            <div class="info-row">
                <div class="info-item">
                    <span class="info-label">Sexo</span>
                    <span class="info-value sex-icons">
                        <span class="male">&#9794;</span>
                        <span class="female">&#9792;</span>
                    </span>
                </div>
            </div>
        </div>

        <div class="type-section">
            <h3>Tipo</h3>
            <div class="badges">
                
                ${vistaTipos(pokemon.types)}
            </div>
        </div>

        <div class="weakness-section">
            <h3>Debilidad</h3>
            <div class="badges">
            ${vistaTipos (pokemon.debilidades)}
            </div>
        </div>
    </div>

</div>
    `

}

// Deitu vista lehenengo aldiz


function vistaTipos(types) {

   return types.map(t =>  `<span class="badge ${t}">${t} </span>`).join("")
}

init()