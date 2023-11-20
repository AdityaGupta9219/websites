let bat = document.querySelector('.bat');
let ball = document.querySelector('.ball');
let wicket = document.querySelector('.wicket');
function clickonbat(){
    let n = Math.random()*3;
    alert(`random is ${n}`);
}
bat.onclick = 'clickonbat()';
ball.onclick = clickonball();
wicket.onclick = clickonwicket();


