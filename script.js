let questions = document.querySelectorAll('.question');

for (let question of questions) {
    question.onclick = function () {
        question.querySelector('.indicator').src = "assets/images/icon-minus.svg";
    }
}
