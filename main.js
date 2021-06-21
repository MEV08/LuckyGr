class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.items = options.items;
        this.$el.querySelector('.dropdown-label').innerHTML = `${this.items[0].label} <img class="flag" src="img/flag.svg" alt="flag"><img class="dropdown-arrow" src="img/dropdown-arrow.svg" alt="dropdown">`;
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown-label')||event.target.classList.contains('flag')||event.target.classList.contains('dropdown-arrow')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else { 
                    this.open();
                }
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        });
        const itemsHTML = this.items.map(i => {
            return `<li class="dropdown-menu__item" data-id='${i.id}'>${i.label}<img class="flag" src="img/flag.svg" alt="flag"></li>`
        }).join('');
        this.$el.querySelector('.dropdown-menu').insertAdjacentHTML('afterbegin', itemsHTML);
    };
    select(id) {
        const item = this.items.find(i => i.id === id);
        this.$el.querySelector('.dropdown-label').innerHTML = `${item.label}<img class="flag" src="img/flag.svg" alt="flag"><img class="dropdown-arrow" src="img/dropdown-arrow.svg" alt="dropdown">`;
        this.close();
    };
    open() {
        this.$el.classList.add('open');
    };
    close() {
        this.$el.classList.remove('open');
    }
}
const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'RU', id: 'ru'},
        {label: 'US', id: 'us'}
    ]
});