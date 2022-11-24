const menu = [
  {
    id: 1,
    category: 'breakfast',
    food: 'Buttermilk Pancakes',
    img: './images/item-1.jpeg',
    price: `15.99`,
    description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    category: 'lunch',
    food: 'Diner Double',
    img: './images/item-2.jpeg',
    price: `13.99`,
    description:
      'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
  },
  {
    id: 3,
    category: 'shakes',
    food: 'Godzilla Milkshake',
    img: './images/item-3.jpeg',
    price: `6.99`,
    description:
      'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
  },
  {
    id: 4,
    category: 'breakfast',
    food: 'Country Delight',
    img: './images/item-4.jpeg',
    price: `20.99`,
    description:
      'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
  },
  {
    id: 5,
    category: 'lunch',
    food: 'Egg Attack',
    img: './images/item-5.jpeg',
    price: `22.99`,
    description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    category: 'shakes',
    food: 'Oreo Dream',
    img: './images/item-6.jpeg',
    price: `18.99`,
    description:
      'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
  },
  {
    id: 7,
    category: 'breakfast',
    food: 'Bacon Overflow',
    img: './images/item-7.jpeg',
    price: `8.99`,
    description:
      'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
  },
  {
    id: 8,
    category: 'lunch',
    food: 'American Classic',
    img: './images/item-8.jpeg',
    price: `12.99`,
    description:
      'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
  },
  {
    id: 9,
    category: 'shakes',
    food: 'Quarantine Buddy',
    img: './images/item-9.jpeg',
    price: `16.99`,
    description:
      'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  },
  {
    id: 10,
    category: 'special',
    food: 'Adana Kebap',
    img: './images/item-10.jpeg',
    price: `24.99`,
    description: 'This is special taste, you must taste this before you die',
  },
];

const sectionCenter = document.querySelector('.section-center');

const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-card">
    <img src=${item.img} alt=${item.img} class="menu-img" />
    <div class="food-info">
      <div class="food-header">
        <h2 class="food-name">${item.food}</h2>
        <span class="food-price">$${item.price}</span>
      </div>
      <p class="food-description">
      ${item.description}
      </p>
    </div>
  </div>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return ` <button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.classList);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
