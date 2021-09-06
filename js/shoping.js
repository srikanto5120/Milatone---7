const displayCart = () => {
  const carts = getCart();
  for (cart in carts) {
    display(cart);
  }
};
const addItem = () => {
  const inputFild = document.getElementById("input");
  const name = inputFild.value;
  if (!name) {
    return;
  }
  display(name);
  addProductToCart(name);
  inputFild.value = "";
};

const display = (name) => {
  const listContainer = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = name;

  listContainer.appendChild(li);
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
const addProductToCart = (name) => {
  const cart = getCart();
  cart[name] = 1;
  const cartStringFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringFied);
};
displayCart();
