window.onscroll = function(){
    scroll();
}
function scroll() {
    let btn = document.getElementById("buutton"); 
    if (document.documentElement.scrollTop == 0 && document.documentElement.scrollTop < 90 ) {
        btn.style.display = "none";
    }
    else {
        btn.style.display = "block";
    }  
}

scroll();