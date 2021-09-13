   // Closure 

   // kont ak t functionthakae kono  akta funtion return kore ta ke closure bole ... akta closed environment toire kore thake closure  bole .....
   function stopWatch() {
       let count = 0;
       return function() {
           count++;
           return count;
       }
   }

   const clock1 = stopWatch();
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());
   console.log(clock1());