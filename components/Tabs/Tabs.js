class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = document.querySelector(`.tab[data-tab='${tabElement.dataset.tab}']`);

    if(this.tabData.dataset.tab == 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${tabElement.dataset.tab}']`);
    }

    this.cards = Array.from(this.cards).map(el => new TabCard(el));

    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(el => el.classList.remove('active-tab'));
    const cards = document.querySelectorAll('.card');
    cards.forEach(el => el.style.display = 'none');

    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(el => new TabLink(el));