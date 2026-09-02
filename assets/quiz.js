/* ============================================================
   Vue3 × Pixso 课程 —— 测验组件（assets/quiz.js）
   在页面 <body> 底部用 <script src="../assets/quiz.js"></script>
   引入即可（lessons/reference 目录下用 ../assets/quiz.js）。

   写法示例（每个 .quiz 是一道题，答案按钮用 data-ok 标记）：
   ------------------------------------------------------------
   <div class="quiz">
     <p>下面哪一个是「标签」？</p>
     <button class="quiz-opt" data-ok="true">div</button>
     <button class="quiz-opt" data-ok="false">颜色</button>
     <button class="quiz-opt" data-ok="false">盒子</button>
     <p class="quiz-feedback" hidden></p>
   </div>
   ------------------------------------------------------------
   feedback 文本写在按钮的 data-explain 上（可留空）：
   <button class="quiz-opt" data-ok="false" data-explain="…">…</button>
   ============================================================ */

(function () {
  "use strict";

  function initQuiz(quiz) {
    var options = quiz.querySelectorAll(".quiz-opt");
    var feedback = quiz.querySelector(".quiz-feedback");
    var answered = false;

    options.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;          // 一题只答一次
        answered = true;

        var isCorrect = btn.getAttribute("data-ok") === "true";
        options.forEach(function (other) {
          other.disabled = true;       // 锁住全部选项
          if (other.getAttribute("data-ok") === "true") {
            other.classList.add("correct");   // 标出正确答案
          }
        });

        if (!isCorrect) btn.classList.add("wrong");

        if (feedback) {
          feedback.hidden = false;
          var explain = btn.getAttribute("data-explain") || "";
          feedback.textContent =
            (isCorrect ? "✅ 答对了！" : "❌ 还差一点，正确答案已标绿。") +
            (explain ? " " + explain : "");
          feedback.className = "quiz-feedback " + (isCorrect ? "ok" : "no");
        }
      });
    });
  }

  function boot() {
    var quizzes = document.querySelectorAll(".quiz");
    quizzes.forEach(initQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
