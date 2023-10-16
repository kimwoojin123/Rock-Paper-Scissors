const imojiLi = ['👊', '✌', '🖐'];
let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let userScore = document.getElementById('user_score');
let imojies = document.getElementById('imojies');

let a;

function randomImoji() {
    a = Math.floor(Math.random() * 3);
    imojies.textContent = imojiLi[a];
}

setInterval(randomImoji, 15);

let score = 0;

rock.onclick = () => {
    if (a === 0) {
        alert('비겼습니다');
    } else if (a === 1) {
        alert('이겼습니다');
        score = score + 10;
        userScore.textContent = score;
    } else {
        alert('졌습니다');
        score = score - 10;
        userScore.textContent = score;
    }
};
