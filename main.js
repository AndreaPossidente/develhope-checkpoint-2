const btn = document.getElementById("search-btn");
const input = document.getElementById("search");

const img = document.querySelector("#pokemon-img");
const namee = document.querySelector("#name");
const esperienza = document.querySelector("#esperienza");
const abilita = document.querySelector("#abilita");

async function search(pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokemonInfo = await res.json();

  img.src = pokemonInfo.sprites.front_default;
  namee.innerHTML = pokemonInfo.name;
  esperienza.innerHTML = pokemonInfo.base_experience;
  pokemonInfo.abilities.forEach((ability) => {
    const d = document.createElement("div");
    d.innerHTML = ability.ability.name;
    abilita.append(d);
  });
}

btn.addEventListener("click", (e) => {
  search(input.value);
});

const moreInfo = document.querySelector("#more-info");
