// Интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. Интерфейсы определяются с помощью ключевого слова interface.
var myPet = {
    age: 3,
    color: 'black',
    name: 'Tom'
};
var myCat = {
    age: 2,
    name: "Qiqi",
    hasLongTail: true
};
var p = {
    x: 10,
    y: 20
};
var employee = {
    id: 11,
    userName: "Alice",
    sayWords: function (words) {
        document.body.textContent = "".concat(employee.userName, " says \"").concat(words, "\"");
    }
};
employee.sayWords("Hello, how r u?");
