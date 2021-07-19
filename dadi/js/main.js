var player = Math.floor(Math.random() * 6) + 1;

console.log("player " + player);

var cpu = Math.floor(Math.random() * 6) + 1;

console.log("cpu " + cpu);

if (player > cpu) {
    console.log("player wins");
}
else if (player == cpu) {
    console.log("draw");
}
else {
    console.log("cpu wins");
}