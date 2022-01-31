// Интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. Интерфейсы определяются с помощью ключевого слова interface.

interface Pet{
    age: number;
    color?: string;
    name: string;
}

const myPet: Pet = {
    age: 3,
    color: 'black',
    name: 'Tom'
}

interface Cat extends Pet {
    hasLongTail: boolean;
}

const myCat: Cat = {
    age: 2,
    name: "Qiqi",
    hasLongTail: true,
}

// ? - необязательное
// readonly - нельзя изменять

interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = {
    x:10,
    y:20
};

interface IUser {
    id: number;
    userName: string;
    sayWords?(words: string): void;
    getFullName?(surname: string): string;
}

let employee: IUser = {
    id: 11,
    userName: "Alice",
    sayWords: function(words: string): void{
        document.body.textContent = `${employee.userName} says "${words}"`
    }
}
employee.sayWords("Hello, how r u?")

// Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово implements:

class User implements IUser{
  id: number;
  userName: string;
  userAge: number; 

  
}

