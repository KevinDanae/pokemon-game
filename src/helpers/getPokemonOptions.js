const getPokemons = () => {
  const pokemons = Array.from(Array(650));
  return pokemons.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsName(mixedPokemons.splice(0, 4));
  return pokemons
};

const getPokemonsName = async ([a, b, c, d] = []) => {
  const promiseArr = [
    fetch(`https://pokeapi.co/api/v2/pokemon/${a}`).then((data) => data.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${b}`).then((data) => data.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${c}`).then((data) => data.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${d}`).then((data) => data.json()),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promiseArr);
  return [
    { name: p1.name, id: a },
    { name: p2.name, id: b },
    { name: p3.name, id: c },
    { name: p4.name, id: d },
  ];
};

export default getPokemonOptions;
