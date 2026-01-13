//Прості типи
// У TypeScript, як і в JavaScript, є набір простих типів, які називають скалярними. Вони зберігають лише одне значення і є основою для роботи з даними.

{
  //Логічний тип (boolean) використовується для зберігання значень true або false, що часто застосовується в умовних операціях.

  const isOnline: boolean = false;
  let c: boolean = true;
}
{
  //Числовий тип (number) використовується для типізації будь-яких чисел.
  const age: number = 26;
  const weight: number = 3.14;
}
{
  //Текстовий тип (string) використовується для рядків.
  const username: string = "Jacob";
  let a: string = "test";
}
{
  //Існують два спеціальні типи – null і undefined, які використовуються для позначення відсутності значення.

  // Даних про користувача ще немає
  let user: null = null;

  // Налаштування ще не ініціалізовані
  let config: undefined;

  //Типи null та undefined використовуються в багатьох сценаріях. Пізніше ми розглянемо їх у контексті роботи з функціями та об'єктами, а поки що потрібно просто знати, що вони існують.
}

//Виведення типів
// Якщо змінній при оголошенні присвоєно значення, TypeScript автоматично визначає її тип. Тому в багатьох випадках вказувати тип вручну немає необхідності. Це називається виведенням типів (type inference) і працює не тільки для примітивних значень, а й для масивів, об'єктів та функцій.
{
  let age = 26; // TypeScript виводить тип як number
  let weight = 3.14; // TypeScript виводить тип як number
  let username = "Jacob"; // TypeScript виводить тип як string
  let isOnline = false; // TypeScript виводить тип як boolean
  let user = null; // TypeScript виводить тип як null
  let config = undefined; // TypeScript виводить тип як undefined
}
//Якщо після оголошення змінної спробувати присвоїти значення іншого типу, TypeScript видасть помилку:
{
  let age = 26; // TypeScript виводить тип як number
  age = "Jacob";
  // ❌ Error: Type 'string' is not assignable to type 'number'

  let isOnline = false; // TypeScript виводить тип як boolean
  isOnline = 5;
  // ❌ Error: Type 'number' is not assignable to type 'boolean'
}
