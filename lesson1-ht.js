var player1 = {
    firstName: "Tom",
    lastName: "Black",
    age: 22,
    id: "idk123",
    nickname: "Kaz",
    status: "online"
};
var player2 = {
    firstName: "John",
    lastName: "Doe",
    id: 734597,
    nickname: "Tamika",
    status: "offline"
};
var Race;
(function (Race) {
    Race["elf"] = "elf";
    Race["human"] = "human";
    Race["dwarf"] = "dwarf";
    Race["gnome"] = "gnome";
    Race["troll"] = "troll";
})(Race || (Race = {}));
var Sex;
(function (Sex) {
    Sex["male"] = "M";
    Sex["female"] = "F";
})(Sex || (Sex = {}));
var Profession;
(function (Profession) {
    Profession["archer"] = "archer";
    Profession["warrior"] = "warrior";
    Profession["priest"] = "priest";
    Profession["mage"] = "mage";
    Profession["druid"] = "druid";
})(Profession || (Profession = {}));
var Character = /** @class */ (function () {
    function Character(name, race, sex, profession, level) {
        this.name = name,
            this.race = race,
            this.sex = sex,
            this.profession = profession,
            this.level = level;
    }
    return Character;
}());
var qiqi = new Character("Qiqi", Race.human, Sex.female, Profession.priest, 1);
var playerTom = ["Tom", 31, "online"];
function createChar(char) {
    console.log("Hello. My name is ".concat(char.name, "! I'm a ").concat(char.race, ", a ").concat(char.profession));
    return char;
}
createChar(qiqi);
