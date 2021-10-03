const titleInput = document.getElementById('title_input');
const descriptionInput = document.getElementById('description_input');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items_container');

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({id, title, description, price}) => `
<li id="${id}" class="item-card" draggable="true">
  <img
    src="https://the-tech.kz/wp-content/uploads/2021/07/SONATA-hero-option1-764A5360-edit.jpg"
    class="item-container__image" alt="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <p class="card-text">${price}</p>
  </div>
</li>`;

export const clearInputs = () => {
    titleInput.value = "";
  
    descriptionInput.value = "";

    priceInput.value = "";
   
  };

export const addItemToPage = ({ _id: id, title, description, price }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, description, price })
  )};

export const renderItemList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
    price: priceInput.value
  };
};
