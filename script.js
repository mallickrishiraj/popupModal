const open = document.getElementById('open');
const container = document.getElementById('container');
const close = document.getElementById('close');
var x = document.getElementsByTagName("BODY")[0];

open.addEventListener('click', () => {
    container.classList.add('show');
});

close.onclick = function(){
    container.classList.remove('show');
}

window.onclick = function(e){
    if(e.target == container) {
        container.classList.remove('show');
    }
}