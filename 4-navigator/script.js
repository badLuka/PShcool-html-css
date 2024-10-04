let positionLat = 2;
let posLong = 5;

let addressLat = 10;
let addressLong = 17;

let distance = Math.round(Math.sqrt(Math.pow(addressLat - positionLat, 2) + Math.pow(addressLong + posLong, 2)));
console.log("Расстояние от текущей точки дол точки назначени составляет " + distance + " пунктов");