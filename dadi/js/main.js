var player = Math.floor(Math.random(1) * 7);

console.log(player);

var cpu = Math.floor(Math.random(1) * 7);

console.log(cpu);

if (player > cpu) {
    console.log("player wins");
}
else if (player == cpu) {
    console.log("draw");
}
else {
    console.log("cpu wins");
}