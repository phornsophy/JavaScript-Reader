/*
import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

// RENDER PRODUCT
products
  .slice(0, 10)
  .map((product) => (renderArea.innerHTML += CardComponent(product))); 
*/

// import { NewCardComponent } from "../components/NewCardComponent.js";
// let renderArea = document.querySelector("#renderArea");

// const url = "http://127.0.0.1:5500/data/products.json";
// fetch(url).then((res) => (res.json())).then((data) => {
//   let products = data;
//   products.map((product) => renderArea.innerHTML += NewCardComponent(product));
// });

import { getData } from "../fatchApi.js";
import { UserCardComponent } from "../components/UserCardComponent.js";

let renderArea = document.querySelector("#renderArea");

let users = await getData("users");
users.map((user) => renderArea.innerHTML += UserCardComponent(user));


