window.onload = () => {
  createUl(countries);
  createUlAtributte(cars);
  removeElement();
  createDiv(countriesTwo);
  removeLastElement(countriesTwo);
  removeItemElement(countriesTwo);
};

// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const createUl = (array) => {
  let newUl = document.createElement("ul");
  newUl.textContent = "Ul creado";

  array.forEach((element) => {
    let newLi = document.createElement("li");
    let newLiContent = document.createTextNode(element);
    newLi.appendChild(newLiContent);
    newUl.appendChild(newLi);
  });

  document.body.appendChild(newUl);
};

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement = () => {
  let elements = document.querySelectorAll(".fn-remove-me");

  for (const element of elements) {
    element.remove();
  }
};

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const createUlAtributte = (list) => {
  let newUl = document.createElement("ul");
  newUl.textContent = "Ul creado con atributo";
  newUl.setAttribute("data-function", "printHere");

  list.forEach((element) => {
    let newLi = document.createElement("li");
    let newLiContent = document.createTextNode(element);
    newLi.appendChild(newLiContent);
    newUl.appendChild(newLi);
  });

  document.body.appendChild(newUl);
};

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const createDiv = (list) => {
  for (let i = 0; i < list.length; i++) {
    let newDiv = document.createElement("div");
    let newH4 = document.createElement("h4");
    let newImg = document.createElement("img");
    document.body.appendChild(newDiv);
    newH4.setAttribute("title", "Random title");
    newImg.setAttribute("imgUrl", "https://picsum.photos/300/200?random=" + i);
    newDiv.appendChild(newH4);
    newH4.appendChild(newImg);
  }
};

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

const removeLastElement = () => {
  let elements = document.querySelectorAll("h4");
  //console.log(elements);

  let button = document.createElement("button");
  button.type = "button";
  button.textContent = "Eliminar H4";
  button.addEventListener("click", elementRemove);
  document.body.appendChild(button);

  function elementRemove(list) {
    for (const element of elements) {
      element.remove();
    }
  }

  
};

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

const removeItemElement = (list) => {
  let elements = document.querySelectorAll("h4");
  console.log(elements);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let button = document.createElement("button");
    button.textContent = "Eliminar Item " + (i + 1);
    button.addEventListener("click", elementRemove);
    element.appendChild(button);
    console.log(element);
    function elementRemove() {
      element.remove();
    }
  }
};
