// const poke = document.getElementById('pokemon');
const input = document.getElementById('poke-input');
const btn = document.getElementById('fetch-poke');

const img = document.getElementById('poke-img');
const pokeName = document.getElementById('poke-name');

async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      {
        method: 'POST',
      }
    );
    'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    const data = await response.json();

    img.src = data.sprites.front_default;
    pokeName.innerHTML = data.name;
  } catch (err) {
    console.log(SyntaxError);
  }
}

btn.addEventListener('click', async () => {
  const poke = input.value;
  await getPokemon(poke);
});
