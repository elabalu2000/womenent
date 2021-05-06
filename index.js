window.onscroll = function() {headerScroller()};

var header = document.getElementById('header');
var sticky = header.offsetTop;

function headerScroller(){
    if(window.pageYOffset > sticky){
        header.classList.add('stickyHeader')
    }
    else {
        header.classList.remove('stickyHeader')
    }
}