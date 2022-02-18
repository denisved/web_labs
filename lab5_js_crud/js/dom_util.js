const titleInput = document.getElementById('title_input');
const descriptionInput = document.getElementById('description_input');
const priceInput = document.getElementById('price_input');
const itemsContainer = document.getElementById('items_container');

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';


const itemTemplate = ({id, title, description, price}) => `
<li id="${id}" class="item-card" draggable="true">
  <img
    src="https://the-tech.kz/wp-content/uploads/2021/07/SONATA-hero-option1-764A5360-edit.jpg"
    class="item-container__image" alt="card">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <p class="card-text">${price} dollars</p>
    <div class="inner_buttons">
    <button class="default__button" id="${EDIT_BUTTON_PREFIX}${id}">Edit</button>
    <button class="cancel__button" id="${DELETE_BUTTON_PREFIX}${id}">Delete</button>
    </div>
  </div>
</li>`;

export const clearInputs = () => {
    titleInput.value = "";
  
    descriptionInput.value = "";

    priceInput.value = "";
   
  };

export const addItemToPage = ({ id, title, description, price }, onEditItem, onDeleteItem) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, description, price })
  )

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`)

  editButton.addEventListener("click", onEditItem)
  deleteButton.addEventListener("click", onDeleteItem)

};

export const renderItemList = (items, onEditItem, onDeleteItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onDeleteItem);
  }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
    price: priceInput.value
  };
};
