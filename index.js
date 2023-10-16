const imojiLi = ['👊', '✌', '🖐'];
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');

let imojies = document.getElementById('imojies');

let a;

function randomImoji() {
    a = Math.floor(Math.random() * 3);
    imojies.textContent = imojiLi[a];
}

setInterval(randomImoji, 15);
