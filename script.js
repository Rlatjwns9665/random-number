// script.js
document.addEventListener("DOMContentLoaded", function() {
    let secretNumber;
    let attempts;
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const guessInput = document.getElementById('guess');
    const hintText = document.getElementById('hint');
    const attemptsText = document.getElementById('attempts');

    // 게임 초기화 함수
    function startNewGame() {
        secretNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 0;
        hintText.textContent = '';
        attemptsText.textContent = '시도 횟수: 0';
        guessInput.value = '';
        submitBtn.disabled = false;
        resetBtn.style.display = 'none'; // 리셋 버튼 숨기기
    }

    // 게임 시작
    startNewGame();

    // 제출 버튼 클릭 시 실행되는 함수
    submitBtn.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 10) {
            hintText.textContent = "1부터 10 사이의 숫자를 입력하세요!";
            return;
        }

        attempts++;

        if (guess < secretNumber) {
            hintText.textContent = "너무 작아요! 다시 시도해보세요.";
        } else if (guess > secretNumber) {
            hintText.textContent = "너무 커요! 다시 시도해보세요.";
        } else {
            hintText.textContent = `축하합니다! 정답은 ${secretNumber}였고, ${attempts}번 만에 맞추셨어요.`;
            submitBtn.disabled = true; // 게임 종료 후 버튼 비활성화
            resetBtn.style.display = 'inline'; // 리셋 버튼 보이게 하기
        }

        attemptsText.textContent = `시도 횟수: ${attempts}`;
    });

    // 리셋 버튼 클릭 시 새 게임 시작
    resetBtn.addEventListener('click', function() {
        startNewGame();
    });
});
