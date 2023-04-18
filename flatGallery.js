let showcase = document.getElementsByClassName("showcase")[0];
let topDistance = -1000;
for (let index = 0; index < 30; index++) {
    console.log(index);
    let img = document.createElement("img")
    img.src = "f (" + (index % 5) + ").png"
    img.className = "flatImg"
    showcase.appendChild(img);
    img.style.left = Math.random() * (window.innerWidth - 100) + "px"
    img.style.width = Math.random() * 80 + 20 + "px"
    img.style.top = Math.random() * (window.innerHeight - 100) + img.offsetHeight + 500 + "px"
}
function fall() {
    console.log(12);
    let images = document.getElementsByClassName("flatImg");
    for (let index = 0; index < images.length; index++) {
        images[index].style.top = topDistance + "px"
    }
    topDistance = topDistance + 1;
    requestAnimationFrame(fall)
}
requestAnimationFrame(fall)
