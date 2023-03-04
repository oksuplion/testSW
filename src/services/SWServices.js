const BASE_URL = "https://swapi.dev/api/"

const getResource = async (url) => {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }
   return await res.json();
}

export const getCharacters = async () => {
   const res = await getResource(`${BASE_URL}/people`);
   return res.results;
}

const transformCharacter = (char) => {
   return {
      name: char.name,
      height: char.height,
      mass: char.mass,
      birth_year: char.birth_year
   }
}
