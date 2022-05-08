function renderCard(card) {
  return `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">${card.title}</h3>
      </div>
      <div class="card-body">
        <p class="card-text">${card.text}</p>
      </div>
    </div>
  `;
}
