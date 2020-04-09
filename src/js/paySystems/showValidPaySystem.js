export default function showValidPaySystem(card) {
  const cardsImages = document.getElementsByClassName('paySystemIMG');
  for (const image of cardsImages) {
    image.style.opacity = 0.4;
  }
  if (card) {
    const currentPaySystemImage = document.getElementById(card);
    currentPaySystemImage.style.opacity = 1;
  }
}
