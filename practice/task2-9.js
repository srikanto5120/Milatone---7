const productFiled = document.getElementById("productFild");
const priceFiled = document.getElementById("priceFild");

const addItem = () => {
  const productText = productFiled.value;
  const priceText = priceFiled.value;
  if (!productText || !priceText) {
    productFiled.value = "";
    priceFiled.value = "";
    return;
  }

  setProductInLocalStorage(productText, priceText);
  dispalyProducts(productText, priceText);

  //clearning input fild
  productFiled.value = "";
  priceFiled.value = "";
};
const dispalyProducts = (key, value) => {
  const ul = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerHTML = ` ${key} = ${value} ৳`;
  ul.appendChild(li);
};
const addUiFormLocalStorage = () => {
  const products = getProduct();
  for (product in products) {
    dispalyProducts(product, products[product]);
  }
};
const getProduct = () => {
  const cart = localStorage.getItem("products");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }

  return cartObj;
};
getProduct();
const setProductInLocalStorage = (name, value) => {
  const cart = getProduct();
  cart[name] = value;
  cartStringified = JSON.stringify(cart);
  localStorage.setItem("products", cartStringified);
  console.log(cartStringified);
};
const order = () => {
  document.getElementById("product-list").innerHTML = "";
  localStorage.removeItem("products");
};
addUiFormLocalStorage();
