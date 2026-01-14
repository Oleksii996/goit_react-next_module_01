//Типізація функцій

// TypeScript дозволяє вказувати типи аргументів і значення, яке повертає функція. Це допомагає уникнути помилок і зробити код більш передбачуваним.

//#region Типізація аргументів
// Аргументи функції можна типізувати так само, як і звичайні змінні:
{
  function greet(name: string, age: number): void {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }

  greet("Alice", 30); // ✅
  greet(25, "Alice");
  // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
}
//name: string – означає, що перший параметр name очікує рядок.
// age: number – означає, що другий параметр age очікує число.
// void – вказує, що функція не повертає значення. Тип значення, що повертається, вказується після списку аргументів.

//Тип void у TypeScript використовується для позначення відсутності значення у функціях, що повертається.

//#endregion

//#region  Тип значення, яке повертає функція
// Якщо функція повертає значення, його тип теж можна вказати:
{
  function sum(a: number, b: number): number {
    return a + b;
  }

  const result = sum(5, 10); // ✅ result матиме тип number
}
//Якщо реальний тип значення, яке повертає функція, не збігається з оголошеним, TypeScript видасть помилку:
function sum(a: number, b: number): number {
  return "I'm a string"; // ❌ Error: Type 'string' is not assignable to type 'number'
}
//Вказування типу значення, що повертається – це не тільки зручний спосіб документування функцій, але й важливий інструмент контролю коректності вашого коду. Він дозволяє компілятору TypeScript перевірити, чи функція дійсно повертає те, що ви припускали, і видати помилку, якщо це не так.
//TypeScript також може автоматично вивести тип значення що повертається, якщо він явно не вказаний:

function sum(a: number, b: number) {
  return a + b;
}

const result = sum(5, 10); // ✅ TypeScript виведе тип як number

//#endregion

//#region Example

//Розглянемо задачу, де необхідно написати функцію, що отримує список користувачів та повертає імена цих користувачів у вигляді масиву рядків. Ось як ми можемо типізувати таку функцію:
{
  interface User {
    id: number;
    name: string;
  }

  const getUserNames = (users: User[]): string[] => {
    return users.map((user) => user.name);
  };

  const userList: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const names = getUserNames(userList);
  console.log(names); // ['Alice', 'Bob', 'Charlie']
}

//#endregion
