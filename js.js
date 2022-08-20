let add = document.getElementById('increment');
let removing = document.getElementById('decrement');
let reset = document.getElementById('reset');

let int = document.getElementById('num');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;
})

removing.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})

reset.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = integer;
})
