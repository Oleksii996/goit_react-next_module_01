//#region Типізація об'єктів

//Об'єкти у TypeScript працюють так само як і в JavaScript. Різниця в тому, що в TypeScript ми можемо описувати структуру об'єкта за допомогою типізації.
{
  const user: { name: string; age: number } = {
    name: "Alice",
    age: 25,
  };

  //У цьому прикладі user – це об'єкт, у якому властивість name має тип string, а age – number.
  // TypeScript не дозволить записати в ці поля значення іншого типу або пропустити обов'язкове поле при оголошенні.

  user.age = "30";
  // ❌ Error: Type 'string' is not assignable to type 'number'
}

//Якщо при оголошенні об'єкта пропустити обов'язкове поле, TypeScript також видасть помилку через те, що відсутня властивість.
{
  const user: { name: string; age: number } = {
    name: "Alice",
  };
  // ❌ Error: Property 'age' is missing in type '{ name: string; }'
  // but required in type '{ name: string; age: number; }'.
}

//А якщо для властивості вказати значення неправильного типу при оголошенні отримаємо наступну помилку.
{
  const user: { name: string; age: number } = {
    name: "Alice",
    age: "25", // ❌ Error: Type 'string' is not assignable to type 'number'
  };
}

//Якщо спробувати звернутися до неіснуючого поля, TypeScript також видасть помилку:
{
  console.log(user.email);
  // ❌ Error: Property 'email' does not exist on type '{ name: string; age: number; }'
}

//TypeScript може виводити тип об'єкта на основі переданих значень, але це не найкраща практика.
// Виведення типів для об'єктів може призвести до труднощів при їх розширенні та зміні.
// Рекомендується явно вказувати тип об'єкта, щоб уникнути можливих помилок і зробити код зрозумілішим.

//Використання інтерфейсів
{
  // Якщо є декілька об’єктів з однаковим типом, незручно дублювати їх опис перед кожним оголошенням.

  const poly: { name: string; age: number } = {
    name: "Poly",
    age: 25,
  };

  const jacob: { name: string; age: number } = {
    name: "Jacob",
    age: 36,
  };
}

//Для цього можна використовувати інтерфейси (interface):
{
  // Оголошуємо інтерфейс користувача
  interface User {
    name: string;
    age: number;
  }

  // Використовуємо інтерфейс для типізації
  const poly: User = {
    name: "Poly",
    age: 25,
  };

  const jacob: User = {
    name: "Jacob",
    age: 36,
  };
}
//Тут User – це власний тип, створений для представлення об'єкта користувача. Його можна використовувати для будь-яких змінних такого формату. Інтерфейси дозволяють покращити структуру та повторне використання коду.

//#endregion

//#region Опціональні (?) та readonly поля

// TypeScript дозволяє позначати деякі поля як опціональні, тобто такі, які можуть бути відсутні в об'єкті. Для цього після імені властивості додається ? при описі типу.
{
  interface User {
    name: string;
    age?: number; // Це поле може бути відсутнім
  }

  const poly: User = {
    name: "Poly",
  };

  console.log(poly.age); // ✅ Не буде помилки, оскільки age може бути відсутнім

  const jacob: User = {
    name: "Jacob",
    age: 36,
  };

  console.log(jacob.age);
}

//Також можна позначити поле як readonly, щоб його не можна було змінювати після ініціалізації.
{
  interface User {
    readonly id: number; // Це поле тільки для читання
    name: string;
  }

  const user: User = {
    id: 123,
    name: "Alice",
  };

  user.id = 456; // ❌ Помилка: Cannot assign to 'id' because it is a read-only property.
}

//#endregion
