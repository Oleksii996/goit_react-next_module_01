//#region Типізація масивів#

// Масиви в TypeScript – це списки значень, так само як і в JavaScript. Завдяки статичній типізації вони допомагають уникати помилок при роботі з даними.

// Існує два основних способи оголошення масивів:
// використання тип[]
// використання Array<тип>

//Ось як це виглядає в коді:
{
  const numbers: number[] = [1, 2, 3, 4, 5];
  const names: string[] = ["Alice", "Bob", "Charlie"];
}
//Альтернативний синтаксис:
{
  const numbers: Array<number> = [1, 2, 3, 4, 5];
  const names: Array<string> = ["Alice", "Bob", "Charlie"];
}

//Обидва варіанти є еквівалентними, проте у стандартних сценаріях рекомендується використовувати тип[], оскільки він коротший і зрозуміліший. Синтаксис Array<T> частіше застосовується у випадках, коли працюємо з узагальненнями (generics), про які ми поговоримо пізніше.

//TypeScript також автоматично виводить типи для масивів, тому в простих випадках тип можна не задавати:
{
  // TypeScript виведе тип як number[]
  const numbers = [1, 2, 3];

  // TypeScript виведе тип як string[]
  const names = ["Alice", "Bob"];
}
//#endregion

//#region  Помилки типізації масивів

// TypeScript дозволяє створювати масиви лише з визначеним типом даних. Якщо спробувати додати в масив значення іншого типу, буде помилка:
{
  const numbers: number[] = [1, 2, 3];

  numbers.push(4); // ✅ Можна додати число

  numbers.push("5");
  // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.
}

//Також TypeScript не дозволяє звертатись до неіснуючих елементів без додаткових перевірок:
{
  const names: string[] = ["Alice", "Bob"];

  console.log(names[5].toUpperCase());
  // ❌ Error: Object is possibly 'undefined'.
}
//#endregion

//#region Типізація масиву об'єктів

//TypeScript дозволяє типізувати масиви, що містять об'єкти. Створюємо інтерфейс User для типізації об’єктів, який потім використовуємо для типізації масиву.
{
  interface User {
    name: string;
    age: number;
  }

  const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Jacob", age: 30 },
  ];
}
{
  //Також можна використовувати Array<T>:
  const users: Array<User> = [
    { name: "Alice", age: 25 },
    { name: "Jacob", age: 30 },
  ];
}
//Якщо спробувати додати в такий масив елемент, який не відповідає заданій структурі, TypeScript видасть помилку:
users.push({ name: "Charlie" });
// ❌ Error: Property 'age' is missing in type '{ name: string; }'.

//Це дозволяє бути впевненим, що всі об'єкти в масиві мають вірну структуру.
//#endregion

//#region Підказки методів та властивостей
// TypeScript допомагає розробникам, надаючи список доступних методів та властивостей відповідно до типу змінної. Це працює не тільки для масивів, а й для інших типів, таких як об'єкти, строки та функції. У випадку масивів це дозволяє точно знати, які операції можна виконати та які властивості доступні.

const numbers: number[] = [1, 2, 3, 4, 5];

// ✅ TypeScript підказує, що у масивів є властивість length
console.log(numbers.length);

// ✅ TypeScript підказує, що у масивів є метод includes
console.log(numbers.includes(3));

// TypeScript знає, що num є числом і дозволяє математичні операції
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Якщо ми спробуємо викликати метод, який не існує у масивів, TypeScript також видасть помилку:
const numbers: number[] = [1, 2, 3, 4, 5];

numbers.nonExistentMethod();
// ❌ Error: Property 'nonExistentMethod' does not exist on type 'number[]'.

//#endregion
