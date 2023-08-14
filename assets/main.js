let scroll_btn = document.querySelector(".scrollTop")

window.onscroll= ()=>{
    if(scrollY>=450){
        scroll_btn.classList.add("show")
    }else{
        scroll_btn.classList.remove("show")
    }
}

scroll_btn.onclick= ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}