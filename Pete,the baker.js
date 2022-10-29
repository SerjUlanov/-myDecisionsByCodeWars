function cakes(recipe, available) {
   return Object.keys(recipe).reduce(function (val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
   }, Infinity)
}

 //I'll try to understand this code later
 // way to kata https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript