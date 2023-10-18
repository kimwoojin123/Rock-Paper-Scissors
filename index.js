let rock = document.getElementById('rock');
let scissor = document.getElementById('scissor');
let paper = document.getElementById('paper');
let userScore = document.getElementById('user_score');
let imojies = document.getElementById('imojies');

let imojiLi = new Array();
imojiLi[0] = '👊';
imojiLi[1] = '✌';
imojiLi[2] = '🖐';

let a;

function randomImoji() {
  a = Math.floor(Math.random() * 3);
  imojies.textContent = imojiLi[a];
}

setInterval(randomImoji, 50);

let score = 0;

rock.onclick = () => {
  clearInterval();
  if (a === 0) {
    alert('비겼습니다');
  } else if (a === 1) {
    alert('이겼습니다');
    score = score + 10;
    userScore.textContent = score;
    locateWin();
  } else {
    alert('졌습니다');
    score = score - 10;
    userScore.textContent = score;
    locateLose();
  }
};

scissor.onclick = () => {
  clearInterval();
  if (a === 0) {
    alert('졌습니다.');
    score = score - 10;
    userScore.textContent = score;
    locateLose();
  } else if (a === 2) {
    alert('이겼습니다');
    score = score + 10;
    userScore.textContent = score;
    locateWin();
  } else {
    alert('비겼습니다');
  }
};

paper.onclick = () => {
  clearInterval();
  if (a === 0) {
    alert('이겼습니다.');
    score = score + 10;
    userScore.textContent = score;
    locateWin();
  } else if (a === 1) {
    alert('졌습니다');
    score = score - 10;
    userScore.textContent = score;
    locateLose();
  } else {
    alert('비겼습니다');
  }
};

function locateWin() {
  if (score >= 30) {
    return (window.location.href = 'http://localhost:8000/win.html');
  }
}

function locateLose() {
  if (score <= -30) {
    return (window.location.href = 'http://localhost:8000/lose.html');
  }
}

let reset = document.getElementById('reset');

reset.onclick = () => {
  location.reload();
};
