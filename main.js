console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";
console.log(textContent);

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2paragraphs = document.getElementsByClassName("node2");
node2paragraphs[0].textContent = "I used the getElementsByClassName('node2') method to access this";
console.log(textContent);

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" *//
const h3s = document.getElementsByTagName("h3");
for (let i = 0; i < h3s.length; i++) { 
  h3s[i].textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

//*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*//

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const newPara = document.createElement("p");
newPara.textcontent = "This node was created using the append chikld method"
for (let i = 0; newPara.length; i++){
let newPara = document.createElement("p");

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector(".parentDiv");
parent.appendChild( newPara);
}
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = element.createElement("a");
for (let i = 0; a.length; i++){
    a [i].textContent = "I am a <a> tag";
 }
 
 // Insert the created <a> in the parent node, but before the <p> you just created using the element.insertBefore() method
const newAnchor = document.createElement("a");
newAnchor.textContent = 'I am an <a> tag'
parent.insertBefore(newAnchor ,newPara);

// Insert the created <a> in the parent node, but before the <p> you just created using the element.insertBefore() method
let p = document.getElementById("parent");
let paragraph = document.getElementById("p");
p.insertBefore(link, paragraph);
console.log(link)


// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
const parent = document.getElementById('parentElement');
const child = parent.firstChild;
const newElement = document.createElement('p');
newElement.textContent = 'New Child Node';
parent.replaceChild(newElement, child);
newElement.remove();
console.log(newElement);

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
newPara.remove();


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM


let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

let unorderedList = document.createElement("ul");
for (let i = 0; i < list.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = list[i];
  unorderedList.appendChild(listItem);
}
let container = document.getElementById("container");
container.appendChild(unorderedList);

 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

function show() {
  const modal = document.createElement('div');
  const modalCard = document.createElement('div');
  const modaltext = document.createElement("h2");
  const modalButton = document.createElement("button");

  modal.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  modal.id = "Close modal";
  modalCard.classList.add("modalcard");
  modalButton.addEventListener("click",) ( => {
  modal.style.visibility = "Hidden";

  )}
  modalCard.append(modaltext, modalButton);
  modal.appendChild(modalCard);

  const containerDiv = document.querySelector("exercise5");

  document.querySelector("#btn").addEventListener("click" , "Show");
  containerDiv.appendChild(Modal);









