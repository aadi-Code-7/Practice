const board = document.querySelector(".board");

for(i=0 ; i<64; i++){
    const box = document.createElement("div");

    let row = Math.floor(i/8);
    let col = i%8;
    if((row + col) % 2 === 0){
        box.style.backgroundColor = "black";
    }else{
        box.style.backgroundColor = "white";
    }

    board.append(box);
}