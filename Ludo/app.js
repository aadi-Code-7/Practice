const path1 = document.querySelector(".path1");
const path2 = document.querySelector(".path2"); 
const path3 = document.querySelector(".path3"); 
const path4 = document.querySelector(".path4"); 

const createPath = (path) => {
    for(let i=0; i<18; i++){
        let box = document.createElement("div");
        box.style.border = "1px solid black";
        box.style.backgroundColor = "white";

        path.append(box);
    }
}
createPath(path1);
createPath(path2);
createPath(path3);
createPath(path4);


