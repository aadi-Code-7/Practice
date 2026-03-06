let body = document.querySelector('body');

body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    let circle = document.createElement('div');
    circle.classList.add("circle");

    let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple'];
    circle.style.backgroundColor = colors[Math.floor(Math.random()*6)];
    circle.innerText = "Aditya";
    circle.style.top = `${e.clientY-25}px`;
    circle.style.left = `${e.clientX-25}px`;

    body.append(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
});