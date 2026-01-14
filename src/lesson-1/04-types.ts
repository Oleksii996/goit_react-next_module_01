//Власні типи

// TypeScript дозволяє комбінувати типи за допомогою операторів Union Type (|) та Intersection Type (&). Це корисно, коли змінна може мати кілька можливих типів або коли потрібно об'єднати кілька типів в один.

//#region Об'єднання
// Union дозволяє змінній мати один із кількох типів. Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних. Тобто це буквально перелічення можливих типів, які перераховуються через вертикальну риску |.
{
  // Union для ідентифікаторів, які можуть бути рядком або числом
  let userId: string | number = 123; // ✅
  userId = "user-456"; // ✅
  userId = false; // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
}
{
  //За допомогою об'єднання можна не тільки вказувати типи, а й задавати набір можливих значень для змінної.
  let currentTheme: "light" | "dark" = "light";
  currentTheme = "dark"; // ✅
  currentTheme = "blue";
  // ❌ Error: Type 'blue' is not assignable to type "light" | "dark".

  let status: "pending" | "shipped" | "delivered" = "pending"; // ✅
  status = "shipped"; // ✅
  status = "cancelled";
  // ❌ Error: Type 'cancelled' is not assignable to type "pending" | "shipped" | "delivered".
}

//Це корисно, коли значення може мати кілька варіантів, наприклад, вхідні дані у формах або дані з API, які можуть бути різних форматів.
{
  // Об'єднання також можна використовувати для типізації властивостей об'єкта:
  interface User {
    id: number;
    role: "admin" | "user";
  }

  const poly: User = {
    id: 1,
    role: "admin",
  };

  const jacob: User = {
    id: 2,
    role: "user",
  };
}
//#endregion

//#region Власні та літеральні типи
// Для зручності та повторного використання можна створювати власні типи за допомогою type.
{
  type Id = string | number;

  let productId: Id = "45gkw8"; // ✅
  productId = 856; // ✅
  productId = false; // ❌ Error: Type 'boolean' is not assignable to type 'Id'.
}

//Літеральні типи дозволяють обмежити можливі значення змінної конкретними значеннями.
{
  type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

  let status: OrderStatus = "pending"; // ✅
  status = "shipped"; // ✅
  status = "returned"; // ❌ Error: Type '"returned"' is not assignable to type 'OrderStatus'.
}
//#endregion

//#region Intersection (&)
{
  // Intersection дозволяє створювати новий тип, який поєднує властивості двох або більше існуючих типів.
  type MyType = FirstType & SecondType;
}
//Наприклад, іноді потрібно поєднувати базову структуру HTTP-відповіді з конкретними даними. Це можна зробити за допомогою Intersection (&).
// Базова структура HTTP-відповіді
{
  interface HttpResponse {
    status: number;
    message: string;
  }

  // Специфічна відповідь для користувача
  interface UserData {
    id: number;
    name: string;
    email: string;
  }

  // Поєднання базової відповіді з даними користувача
  type UserResponse = HttpResponse & { data: UserData };

  const response: UserResponse = {
    status: 200,
    message: "Success",
    data: {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
    },
  };

  console.log(response.data.name); // Alice
}

//У цьому прикладі тип UserResponse містить властивості як HttpResponse, так і UserData. Такий підхід дозволяє легко розширювати базові відповіді для різних типів запитів, не дублюючи код. Це особливо корисно, коли необхідно об'єднати декілька типів у складніших структурах даних.

// Коли використовувати type, а коли interface?
// Використовуйте interface, якщо описуєте структуру об'єкта.
// Використовуйте type, якщо створюєте об'єднання типів (Union), перетини (Intersection), літеральні значення або складні структури даних.

//#endregion
