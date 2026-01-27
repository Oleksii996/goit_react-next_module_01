//Перелічення дозволяє створювати набір іменованих констант. Це корисно, коли потрібно описати перелік можливих значень у вигляді констант.
{
  enum Status {
    Loading,
    Success,
    Error,
  }

  let requestStatus: Status = Status.Loading;
  console.log(requestStatus); // 0
}

//Заведено використовувати великі літери для назв enum, а його значення записувати у PascalCase або UPPER_CASE. Це покращує читабельність коду та відповідає загальноприйнятим стандартам.

//TypeScript автоматично присвоює числові значення (0, 1, 2) кожному елементу, починаючи з 0. Також можна вказати власні значення:
{
  enum Status {
    Loading = 1,
    Success = 200,
    Error = 500,
  }

  console.log(Status.Success); // 200
}

//Рядкові значення
// Якщо потрібно задати конкретні рядкові значення, їх також можна явно вказати:enum Role
{
  enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
  }

  let userRole: Role = Role.Admin;
  console.log(userRole); // "ADMIN"
}

//#region Enum чи Union Type?

//Enum – це список іменованих констант, які можна використовувати як змінні.
// Union Type – це просто список допустимих значень, які можна присвоювати змінним.

{
  // У деяких випадках Union Type (|) може бути простішою альтернативою.
  type Status = "loading" | "success" | "error";

  let requestStatus: Status = "loading";
  console.log(requestStatus); // "loading"
}
//#endregion

//#region Enum?
{
  //Використовуй enum, якщо:
  // Потрібен конкретний набір значень, який можна перераховувати (наприклад, Object.values(Status)).
  // Значення можуть мати чіткі асоціації (наприклад, Success = 200, Error = 500).
  // Використовується у великому проєкті з інтеграцією у сторонні API або з константними значеннями (наприклад, ролі користувачів, статуси замовлення).
  enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
  }

  const getRoleName = (role: Role) => {
    return `Your role is: ${role}`;
  };

  console.log(getRoleName(Role.Admin)); // "Your role is: ADMIN"
}
//#endregion

//#region Union Type?
{
  //Використовуй Union Type, якщо:
  // Значення ніколи не змінюються і не потребують додаткових властивостей.
  // Використовується у простих ситуаціях, де потрібен обмежений набір значень (наприклад, статуси запитів).

  type Status = "loading" | "success" | "error";

  const getStatusMessage = (status: Status) => {
    return `Current status: ${status}`;
  };

  console.log(getStatusMessage("loading")); // "Current status: loading"
}
//#endregion

//Якщо не знаєш, що вибрати – завжди починай з union type. Enum варто використовувати лише тоді, коли є реальна потреба в цьому.
