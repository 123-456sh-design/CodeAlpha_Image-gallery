let fullImgBox = document.querySelector(".full-img-box")
let fullImg = document.querySelector(".full-img")
let exit = document.querySelector("span")

function openImg(img){
    fullImgBox.style.display = "flex"
    fullImg.src = img
}

exit.onclick = function(){
    fullImgBox.style.display = "none"
}