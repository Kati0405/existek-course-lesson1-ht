var User = /** @class */ (function () {
    function User() {
        this.name = "Tom Smith";
        this.age = 18;
    }
    return User;
}());
var tom = new User();
tom.name = "Tom";
tom.age = 36;
document.body.textContent = "name: ".concat(tom.name, " age: ").concat(tom.age);
