const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Add your code here

const createNewElement = function (data) {
  const card = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const typesDiv = document.createElement("div");

  h2.textContent = data.name;

  img.src = data.sprites.other["official-artwork"].front_default;
  img.alt = `image of ${data.name}`;
  img.width = "240";
  img.height = "240";

  card.setAttribute("class", "pokemonCard");

  data.types.forEach((typeInfo) => {
    const typeSpan = document.createElement("span");
    const typeName = typeInfo.type.name;
    typeSpan.textContent = typeName;
    typeSpan.style.backgroundColor = pokemonColors[typeName];
    typeSpan.setAttribute("class", "pokemonType");
    typesDiv.appendChild(typeSpan);
  });

  card.append(h2, img, typesDiv);

  return card;
};

const fetchData = async function () {
  const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

  try {
    const response = await fetch(url);
    const bodyData = await response.json();

    console.log(bodyData);

    const elem = createNewElement(bodyData);
    const pokeList = document.querySelector(".poke-list");
    pokeList.appendChild(elem);
  } catch (error) {
    console.error("Error fetching data:", error);
    const errorElem = document.createElement("p");
    errorElem.textContent = "Failed to fetch data. Please try again later.";
    errorElem.setAttribute("class", "error-message");
    const pokeList = document.querySelector(".poke-list");
    pokeList.appendChild(errorElem);
  } finally {
    console.log("Fetch attempt completed.");
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};

fetchData();
