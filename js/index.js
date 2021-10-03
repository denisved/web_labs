import {
    addItemToPage,
    clearInputs,
    getInputValues, 
    renderItemList
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const findInput = document.getElementById("find_input");
const cancelFindButton = document.getElementById('cancel_find_button');
const sortButton = document.getElementById('sort_button');
const totalButton = document.getElementById('total_amount_button');

const items = [];


const addItem = ({title, description, price}) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        title,
        description,
        price
    };

    items.push(newItem);

    addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {title, description, price} = getInputValues();

    clearInputs();

    addItem({
        title,
        description,
        price
    })
});

findButton.addEventListener("click", ()=>{
    const foundItems = items.filter((car) => car.title.search(findInput.value) !== -1);

    renderItemList(foundItems);
});

cancelFindButton.addEventListener("click", ()=>{
    renderItemList(items);

    findInput.value = "";
});

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    items.sort((a, b) => (a.price-b.price));
    renderItemList(items);
});


totalButton.addEventListener("click", (event) =>{
    event.preventDefault();
    
    const totalAmount = items.map(o => o.price).reduce((a,c) => {return parseInt(a) + parseInt(c)});
    alert(totalAmount)
});


renderItemList(items);