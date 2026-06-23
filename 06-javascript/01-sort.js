const pokemons = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"] },
  { id: 2, name: "Ivysaur", types: ["Grass", "Poison"] },
  { id: 3, name: "Venusaur", types: ["Grass", "Poison"] },
  { id: 4, name: "Charmander", types: ["Fire"] },
  { id: 5, name: "Charmeleon", types: ["Fire"] },
  { id: 6, name: "Charizard", types: ["Fire", "Flying"] },
  { id: 7, name: "Squirtle", types: ["Water"] },
  { id: 8, name: "Wartortle", types: ["Water"] },
  { id: 9, name: "Blastoise", types: ["Water"] },
  { id: 10, name: "Caterpie", types: ["Bug"] },
  { id: 11, name: "Metapod", types: ["Bug"] },
  { id: 12, name: "Butterfree", types: ["Bug", "Flying"] },
  { id: 13, name: "Weedle", types: ["Bug", "Poison"] },
  { id: 14, name: "Kakuna", types: ["Bug", "Poison"] },
  { id: 15, name: "Beedrill", types: ["Bug", "Poison"] },
  { id: 16, name: "Pidgey", types: ["Normal", "Flying"] },
  { id: 17, name: "Pidgeotto", types: ["Normal", "Flying"] },
  { id: 18, name: "Pidgeot", types: ["Normal", "Flying"] },
  { id: 19, name: "Rattata", types: ["Normal"] },
  { id: 20, name: "Raticate", types: ["Normal"] },
];

const sortPokemons = function logSortedPokemons(sortType) {
  const sortedPokemons = [...pokemons];
  // Add your code here

  switch (sortType) {
    case "numerically, in ascending order":
      sortedPokemons.sort((a, b) => a.id - b.id);
      break;
    case "numerically, in descending order":
      sortedPokemons.sort((a, b) => b.id - a.id);
      break;
    case "alphabetically, in ascending order":
      sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "alphabetically, in descending order":
      sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return sortedPokemons;
};

console.log(sortPokemons("numerically, in ascending order"));
console.log(sortPokemons("numerically, in descending order"));
console.log(sortPokemons("alphabetically, in ascending order"));
console.log(sortPokemons("alphabetically, in descending order"));
