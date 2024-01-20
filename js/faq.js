const faqBtn = document.querySelectorAll(".faq-list-button");
const faqAnswer = document.querySelectorAll(".faq-answer-wrapper");
const faqIcon = document.querySelectorAll(".faq-svg");

export function faq() {
    faqBtn.forEach((btn, index) => {
     btn.addEventListener("click", (e) => {
      faqAnswer.forEach((answer, i) => {
       if (i !== index) {
        answer.classList.remove("faq-is-active");
       }
      });
      faqAnswer[index].classList.toggle("faq-is-active");

      faqIcon.forEach((icon, i) => {
       if (i !== index) {
        icon.classList.remove("rotate");
       }
      });
      faqIcon[index].classList.toggle("rotate");
     });
    });
}
