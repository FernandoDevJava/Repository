window.onscroll = function(){
    scroll();
}
function scroll() {
    var btn = document.getElementById("buutton");
    if (document.documentElement.scrollTop > 90) {
        btn.style.display = "block";
        btn.style.transition = "0.3s";
    }
    else {
        btn.style.display = "none";
    }   
}