let gallery=document.getElementsByClassName("flatGallery")[0];
let info=document.getElementsByClassName("flatInfo")[0];
let map=document.getElementsByTagName("iframe")[0];
map.style.height=gallery.offsetHeight-info.offsetHeight-15+"px";