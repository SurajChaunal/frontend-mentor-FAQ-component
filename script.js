const faqCards = document.querySelectorAll(".faq-card");
function handleClick(e) {
  console.log("clicked");
  const currentCard = e.target.closest(".faq-card");
  faqCards.forEach((card) => {
    if (card != currentCard) card.classList.remove("active");
  });
  currentCard.classList.toggle("active");
}

faqCards.forEach((card) => card.addEventListener("click", handleClick));
