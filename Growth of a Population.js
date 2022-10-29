function nbYear(p0, percent, aug, p) {
   let n = 0;
   for (n; p0 < p; n++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug)
   }
   return n;
}