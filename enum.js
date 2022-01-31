var Season;
(function (Season) {
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
    Season[Season["Autumn"] = 4] = "Autumn";
})(Season || (Season = {}));
;
var current1 = Season.Summer;
current1 = Season.Winter;
document.body.textContent = "".concat(current1);
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Everning"] = 1] = "Everning";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        document.body.textContent = "Good morning";
    }
    else {
        document.body.textContent = "Good everning";
    }
}
var current = DayTime.Everning;
welcome(current);
