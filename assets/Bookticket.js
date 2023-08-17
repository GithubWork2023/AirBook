let Next1 = document.getElementById("Next1")
let Next2 = document.getElementById("Next2")
let back1 = document.getElementById("back1")
let back2 = document.getElementById("back2")
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")
let form3 = document.getElementById("form3")
let progress = document.getElementById("progress")



Next1.onclick = function(){
    form1.style.left = "-100%"
    form2.style.left = "0px"
    progress.style.width = "calc(2*(100% / 3))"
}
Next2.onclick = function(){
    form2.style.left = "-100%"
    form3.style.left = "0px"
    progress.style.width = "calc(100%)"
}
back1.onclick = function(){
    form1.style.left = "0px"
    form2.style.left = "100%"
    progress.style.width = "calc((100% / 3))"
}
back2.onclick = function(){
    form2.style.left = "0px"
    form3.style.left = "100%"
    progress.style.width = "calc(2*(100% / 3))"
}