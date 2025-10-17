/* fetch('https://pokeapi.co/api/v2/pokemon/arceus')
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data.abilities))
  .catch((error) => console.error(error)); */

try {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/arceus');

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
