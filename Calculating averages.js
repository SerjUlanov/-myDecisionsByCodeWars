var Calculator = {
   average: function () {
      var average = 0;
      for (var i = 0; i < arguments.length; i++) {
         average += arguments[i];
      }
      average = average / Math.max(arguments.length, 1);
      return average;
   }
};