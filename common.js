let modal = document.getElementsByClassName("modal")[0];
let callButton = document.getElementById("callButton");
callButton.onclick = function () {
    console.log("Заказать звонок")
    modal.style.transform="translateY(0) scale(1)";
    setTimeout(function(){
        modal.style.backdropFilter = "blur(10px)"
},200);
}
modal.onclick = function () {
    modal.style.transform="translateY(100%) scale(0)"
}
modal.children[0].onclick=function(event){
    event.stopPropagation();
}
