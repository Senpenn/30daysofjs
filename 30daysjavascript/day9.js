//Activity 1:Selection and Manipulation

//Task1:Selection by ID

function changeText() {
    // Select the element with the ID 'header'
    var headerElement = document.getElementById("header");

    // Change the text content of the selected element
    headerElement.textContent = "Hi,I am Sanjana.";
}

//Task2:Selection by its class

function changeBackgroundColor() {
    // Select all elements with the class 'header'
    var headerElements = document.getElementsByClassName("hobby");

    // Iterate over the selected elements and change their background color
    for (var i = 0; i < headerElements.length; i++) {
        headerElements[i].style.backgroundColor = "lightblue";
    }
}

//Activity 2: Creating and Appending Elements

//Task3: New div element

function addNewDiv() {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Create a new text node with some content
    var newContent = document.createTextNode("I Like Learning about Space,it fascinates me so much.");

    // Add the text node to the new div
    newDiv.appendChild(newContent);

    // Append the new div to the body of the document
    document.body.appendChild(newDiv);
}

//Task4: New li element

function addNewListItem() {
    // Create a new li element
    var newListItem = document.createElement("li");

    // Create a new text node with some content
    var newContent = document.createTextNode("String Theory");

    // Add the text node to the new li element
    newListItem.appendChild(newContent);

    // Select the ul element by its ID
    var list = document.getElementById("myList");

    // Append the new li element to the ul
    list.appendChild(newListItem);
}

//Activity 3: Removing Elements

//Task5: Removing Element

function removeItem() {
    // Select the element to be removed by its ID
    var itemToRemove = document.getElementById("item2");

    // Remove the selected element from the DOM
    itemToRemove.remove();
}

//Task6:Removing Last Child

function removeLastChild() {
    // Select the parent element (ul)
    var list = document.getElementById("myList");

    // Check if the list has any children
    if (list.children.length > 0) {
        // Remove the last child element
        list.removeChild(list.lastElementChild);
    }
}

//Activity 4: Modifying Attributes and Classes

//Task7: Changing Attributes

function changeImageSrc() {
    // Select the element by its ID
    var imageElement = document.getElementById("myImage");

    // Change the 'src' attribute of the selected element
    imageElement.setAttribute("src", "data:image/jpeg;base64,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");

    // Optionally, change the 'alt' attribute
    imageElement.setAttribute("alt", "Updated Image");
}

//Task8: CSS Class

function addClass() {
    // Select the element by its ID
    var textElement = document.getElementById("textElement");

    // Add the 'highlight' class to the element
    textElement.classList.add("highlight");
}

function removeClass() {
    // Select the element by its ID
    var textElement = document.getElementById("textElement");

    // Remove the 'highlight' class from the element
    textElement.classList.remove("highlight");
}

//Activity 5: Event Handling

//Task9: Event Listener

// Function to change the text content of the paragraph
function changetxt() {
    // Select the paragraph element by its ID
    var paragraph = document.getElementById("textParagraph");

    // Change the text content of the paragraph
    paragraph.textContent = "Comets are leftovers from the creation of our solar system about 4.5 billion years ago -they consist of sand, ice and carbon dioxide.";
}

// Add a click event listener to the button
document.getElementById("changeTextButton").addEventListener("click", text);

//Task10: Mouseover

// Function to change the border color of the element
function changeBorderColor() {
    // Select the element by its ID
    var element = document.getElementById("myElement");

    // Change the border color of the element
    element.style.borderColor = "red";
}

// Function to reset the border color of the element
function resetBorderColor() {
    // Select the element by its ID
    var element = document.getElementById("myElement");

    // Reset the border color to the original color
    element.style.borderColor = "black";
}

// Add a mouseover event listener to the element
document.getElementById("myElement").addEventListener("mouseover", changeBorderColor);

// Add a mouseout event listener to reset the border color when the mouse leaves
document.getElementById("myElement").addEventListener("mouseout", resetBorderColor);
