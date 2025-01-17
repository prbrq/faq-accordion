let questions = document.querySelectorAll('.question');

for (let question of questions) {
    question.onclick = function () {

        question.classList.toggle('open');

        if (question.classList.contains('open')) {
            question.querySelector('.indicator').src = "assets/images/icon-minus.svg";
            this.nextElementSibling.style.display = 'block';
        }
        else{
            question.querySelector('.indicator').src = "assets/images/icon-plus.svg";
            this.nextElementSibling.style.display = 'none';
        }
    }
}
