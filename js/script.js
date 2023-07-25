document.addEventListener("DOMContentLoaded", function() {
  const questionArea = document.getElementById("question");
  const inputBox = document.getElementById("input-box");
  const resultMessage = document.getElementById("result-message");
  const resetButton = document.getElementById("reset-button");

  const questions = [
          "This is a simple typing game.",
          "Keep practicing to improve your speed!",       
          "Type as fast and accurate as you can.",
          "Have fun and enjoy the game!",
          "Thank you for playing!"
      ];

  let currentQuestion = 0;

  // ゲームがクリアされたかどうかのフラグ
  let gameCleared = false;

  function displayQuestion() {
          questionArea.textContent = questions[currentQuestion];
  }

  // 入力欄のテキストと比較してゲームクリアを判定する関数
  function checkInput() {
      const expectedText = questionArea.textContent.trim();
      const inputText = inputBox.value.trim();

      if (inputText === expectedText) {
          if (currentQuestion === questions.length - 1) {
                  resultMessage.textContent = "Congratulations! You cleared all the game!";
              } else {
                  resultMessage.textContent = `You cleared sentence${currentQuestion+1}!`;
              }
          gameCleared = true; // ここでgameClearedをtrueに変更
      } else {
          resultMessage.textContent = "Oops! Try again!";
      }
  }

  function nextQuestion() {
          if (currentQuestion < questions.length - 1) {
              currentQuestion++;
              displayQuestion();
              inputBox.value = "";
              inputBox.disabled = false;
              resultMessage.textContent = "";
              gameCleared = false;
          }
  }

  function resetGame() {
      currentQuestion = 0;
      gameCleared = false;
      displayQuestion();
      inputBox.value = "";
      inputBox.disabled = false;
      resultMessage.textContent = "";
  }

  // 入力欄に入力があったらcheckInputを呼び出す
  inputBox.addEventListener("input", checkInput);

  // ゲームがクリアされたら入力を無効化する
  inputBox.addEventListener("input", function() {
      if (gameCleared) {
          inputBox.disabled = true;
          setTimeout(nextQuestion, 1500); // 次の問題への切り替えを1.5秒後に実行
      }
  });

  resetButton.addEventListener("click", resetGame);


  displayQuestion();
});