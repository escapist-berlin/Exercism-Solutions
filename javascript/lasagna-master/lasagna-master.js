/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (Boolean(remainingTime) === false) {
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

export function quantities(layers) {
  let noodlesNeeded = 0;
  let sauceNeeded = 0;

  layers.forEach(element => {
    if (element === "noodles") {
      noodlesNeeded += 50;
    } else if (element === "sauce") {
      sauceNeeded += 0.2;
    }
  })

  return {
    noodles: noodlesNeeded,
    sauce: sauceNeeded
  }
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList.at(-1);
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, numOfPortions) {
  const count = numOfPortions / 2

  // Creating a deep copy of the recipe object
  const newRecipe = JSON.parse(JSON.stringify(recipe));

  for(const item in newRecipe) {
    newRecipe[item] = newRecipe[item] * count
  }

  return newRecipe;
}
