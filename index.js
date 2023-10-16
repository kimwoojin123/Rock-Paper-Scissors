const imojiLi = ['👊', '✌', '🖐'];
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');

let imojies = document.getElementById('imojies');

function randomImoji() {
    imojies.textContent = imojiLi[Math.floor(Math.random() * 3)];
}

setInterval(randomImoji, 15);
