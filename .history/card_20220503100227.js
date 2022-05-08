function renderCard(card) {
  return `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${card.title}</h5>
      <p class="card-text">${card.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  document.getElementById("card").innerHTML = renderCard(card);
}
