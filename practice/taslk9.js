const displayInUI = () => {
  const items = getCart();

  for (item in items) {
    display(item, items[item]);
  }
};

const button = () => {
  const inputKey = document.getElementById("key");
  const KeyText = inputKey.value;

  const inputValue = document.getElementById("value");
  const valueText = inputValue.value;
  display(KeyText, valueText);
  addProductToCart(KeyText, valueText);
  inputKey.value = "";
  inputValue.value = "";
};
const display = (key, value) => {
  console.log(key);
  console.log(value);
  const container = document.getElementById("item-container");
  const div = document.createElement("div");
  const keyUi = document.createElement("span");
  const valueUi = document.createElement("span");

  keyUi.innerText = key;
  valueUi.innerText = value;
  div.appendChild(keyUi);
  div.appendChild(valueUi);
  container.appendChild(div);
};
const getCart = () => {
  const carts = localStorage.getItem("cart");
  let cartObj;
  if (carts) {
    cartObj = JSON.parse(carts);
  } else {
    cartObj = {};
  }
  return cartObj;
};
const addProductToCart = (name, value) => {
  const cart = getCart();
  cart[name] = value;
  const cartStringFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringFied);
};
displayInUI();
