// Класс представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект. Класс определяет состояние и поведение, которыми обладает объект.

class User {
    name: string = "Tom Smith";
    age: number = 18;
}

let tom: User = new User();
tom.name = "Tom";
tom.age = 36;

document.body.textContent=`name: ${tom.name} age: ${tom.age}`
