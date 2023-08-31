// let
// {
//   let i = 5;
// }
// console.log("i is equal to ", i); //отримали reference error, бо змінна i не видима поза межами блоку

// const
// {
//   const Pi = 3.14;
// }
// console.log("Pi is equal to ", Pi); // отримали reference error, бо змінна Pi не видима поза межами блоку

// var
// областю видимості змінної var є функція або вся програма, якщо вона визначена поза межами функції
{
  var j = 150;
}
console.log("j = ", j);

function f() {
  var j = 150;
}
console.log("j = ", j); // reference error
