/* 
- Типізація об'єктів
- Використання interface
- Опціональні (?) та readonly поля
 */

interface User {
  id: string;
  username: string;
  email: string;
  isOnline: boolean;
  friednsCount: number;
  age: number;
}

const jacob: User = {
  id: "id-123", //тільки для читання
  username: "Jacob",
  email: "j.mercer@example.com",
  isOnline: false,
  friednsCount: 100, //опціональне поле
  age: 27,
};

const poly = {
  id: "id-450", //тільки для читання
  username: "Poly",
  email: "p.gramy@example.com",
  isOnline: true,
  friednsCount: 100,
  age: 20,
};
