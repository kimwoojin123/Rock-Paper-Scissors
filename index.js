const imojiLi = ['👊', '✌', '🖐'];

let imojies = document.getElementById('imojies');

function randomImoji() {
    imojies.textContent = imojiLi[Math.floor(Math.random() * 3)];
}

setInterval(randomImoji, 15);
