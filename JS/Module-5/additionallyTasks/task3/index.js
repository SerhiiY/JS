const users = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true }
];

// const setGuestState = function(guests, period){
//   for(let i = 0; i < guests.length; i++){
//     if(guests[i].inactiveDays >= period){
//       guests[i].isActive = false;
//     }else{
//       guests[i].isActive = true;
//     }
//   }
// return guests;
// };
//
// function setGuestState(guests, period){
//   for(let guest of guests){
//     if(guest.inactiveDays >= period){
//       guest.isActive = false;
//     }else{
//       guest.isActive = true;
//     }
//   }
// return guests;
// }

function setGuestState(guests, period){
  console.log(period);
  const state = guests.map(object => object.inactiveDays > period ? object.isActive = false : object.isActive = true);
  return state;
}



// Вызовы функции для проверки
setGuestState(users, 10);
console.log(users); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

setGuestState(users, 20);
console.log(users); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

setGuestState(users, 50);
console.log(users); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
