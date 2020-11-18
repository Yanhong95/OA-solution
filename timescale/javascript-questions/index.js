const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  const newHeros = heroes.filter(hero => hero.publisher === 'Marvel Comics');
  return newHeros;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  const newHeros = heroes.map(hero => {
    hero.characters = [...hero.characters.split(', ')];
    return hero;
  });
  return newHeros;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const newHeros = {};
  heroes.forEach(hero => {
    if(!(hero.publisher in newHeros)){
      newHeros[hero.publisher] = [];
    }
    newHeros[hero.publisher].push(hero);
  });
  return newHeros;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */

// the original function:
// const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
//   const dcHeros = heroes.filter(hero => hero.publisher === 'DC Comics');
//   const newHeros = []
//   dcHeros.forEach(hero => {
//     const charactersArr = hero.characters.split(',');
//     console.log(charactersArr);
//     if(charactersArr.length >1){
//       hero.characters = [...charactersArr];
//       newHeros.push(hero);
//     };
//   });
//   return newHeros;
// }

//  bove is the correnct answer I think.

// ######### there is a bug right here I dont know why this heroes parameter structure is like:
// {  superhero: 'Blue Beetle',
//    publisher: 'DC Comics',
//    alter_ego: 'Dan Garret',
//    first_appearance: 'Mystery Men Comics #1',
//    characters: [ 'Dan Garret', 'Ted Kord', 'Jaime Reyes' ] },
// the characters property of input object is already an array, Looks weird. 

const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  console.log(heroes);
  const dcHeros = heroes.filter(hero => hero.publisher === 'DC Comics');
  const newHeros = dcHeros.filter(hero => hero.characters.length >1 );
  return newHeros;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
