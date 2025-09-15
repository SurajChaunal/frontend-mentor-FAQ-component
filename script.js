const faqCards = document.querySelectorAll(".faq-card");
const cardsContainer = document.querySelector(".section--cards");
function handleClick(e) {
  if (!e.target.closest(".question-container")) return;
  console.log("clicked");
  const currentCard = e.target.closest(".faq-card");
  faqCards.forEach((card) => {
    if (card !== currentCard) card.classList.remove("active");
  });
  currentCard.classList.toggle("active");
}
cardsContainer.addEventListener("click", handleClick);
