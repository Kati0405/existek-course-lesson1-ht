enum Season {Winter=1, Spring=2, Summer=3, Autumn=4};
let current1: Season = Season.Summer;
current1 = Season.Winter

document.body.textContent = `${current1}`




enum DayTime {
    Morning, Everning
};

function welcome(dayTime: DayTime){
    if(dayTime === DayTime.Morning){
        document.body.textContent = "Good morning"
    }
    else {
        document.body.textContent = "Good everning"
    }
}

let current: DayTime = DayTime.Everning;
welcome(current);
