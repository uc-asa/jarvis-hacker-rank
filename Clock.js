// how many time does hour and minute hand overlap
// 12:00
// 1:05
// 2:11
// 3:16
// 4:22
// 5:27
// 6:33
// 7:38
// 8:44
// 9:49
// 10:55



function getClapHand( day = 1) {
 let arr = [];
 for (let hour = 1; hour<=12; hour++) {
   if (hour == 12) {
     arr.push('12:00');
   } else {
     for (let min = 0; min<60; min++) {
       if (hour*30+(hour-1)*6 === min *6) {
         arr.push(`${hour}:${min}`);
       }
     }
   }
 }
 if (day === parseInt(day, 10)) {
   return {
     count: arr.length*2*day,
     value: arr,
   }
 } else {
   return {
     value: arr, 
   }
 }
}


console.log(getClapHand());