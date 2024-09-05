const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

function addItem(e) {
  const newItem = itemInput.value;
  e.preventDefault();

  // Validate Input
  if (newItem.value === "") {
    alert("Please add an item");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  const icon = createIcon("fa-solid fa-xmark");

  button.className = classes;
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
