// Деструктурізація
// Синтаксис деструктуризаційного присвоєння Javascript вираз, який робить можливим розпакування значень з масивів або властивостей із обʼєктів у певні окремі змінні

///////////////////////////////////////////////
// об'єкти
// const user = {
//   id: 25,
//   isVerified: true,
// };

// const id = user.id;
// const isVerified = user.isVerified;

// console.log(id);
// console.log(isVerified);

// const { id: number, isVerified: isApproved } = user; // destructuring

// console.log(number);
// console.log(isApproved);

///////////////////////////////////////////////
// масиви
// const numbers = ["one", "two", "three", "four"];

// const [a, b, c, d, e] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e); // undefined

// const [a, b, c, d, e = "some defeult"] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e); // some defeult

// const [a, , , d] = numbers;
// console.log(a);
// console.log(d);

// Якщо ми хочемо записати перше значення у змінну a, a всі інші у змінну b, то використовуємо оператор REST (...d)
// const [a, ...d] = numbers;
// console.log(a);
// console.log(d);

///////////////////////////////////////////////
// обмін змінних значеннями
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

///////////////////////////////////////////////
// аргументи функцій
const student = {
  direction: "Programming",
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

// коли ми викликаємо функцію studentDirection і передаємо їй об'єкт student, наша функція витягує з нього властивість direction і працює з нею
function studentDirection({ direction }) {
  return direction;
}

console.log(studentDirection(student));

// Витягуємо властивість displayName та firstName з об'єкта fullName у змінну name
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(student));
