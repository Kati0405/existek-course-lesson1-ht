interface IPerson {
    firstName: string;
    lastName: string;
    age?: number;
}

type Status = "online" | "offline"

interface IPlayer extends IPerson{
    id: number | string;
    nickname: string;
    status: Status;

}

let player1: IPlayer = {
    firstName: "Tom",
    lastName: "Black",
    age: 22,
    id: "idk123",
    nickname: "Kaz",
    status: "online"
}

let player2: IPlayer = {
    firstName: "John",
    lastName: "Doe",
    id: 734597,
    nickname: "Tamika",
    status: "offline"

}

enum Race {elf="elf", human="human", dwarf="dwarf", gnome="gnome", troll="troll"}
enum Sex {male="M", female="F"}

interface ICharacter {
    name: string;
    race: Race;
    sex: Sex;
    }

enum Profession {archer="archer", warrior="warrior", priest="priest", mage="mage", druid="druid"}

class Character implements ICharacter {
    name: string;
    race: Race;
    sex: Sex;
    profession: Profession;
    level: number;
    private signature: string;
    private dps: number;

    constructor(name: string, race: Race, sex: Sex, profession: Profession, level: number){
        this.name = name,
        this.race=race,
        this.sex = sex,
        this.profession = profession,
        this.level = level
    }

}

let qiqi: Character = new Character("Qiqi", Race.human, Sex.female, Profession.priest, 1)


let playerTom: [string, number, Status] = ["Tom", 31, "online"]

function createChar<T extends Character>(char: T) : T {
    console.log(`Hello. My name is ${char.name}! I'm a ${char.race}, a ${char.profession}`)
return char
}


createChar<Character>(qiqi)



