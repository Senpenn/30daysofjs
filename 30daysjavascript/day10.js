// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the paragraph, button, image, hover element, input field, value display paragraph, form, dropdown, and submit button
    const paragraph = document.getElementById("text");
    const button = document.getElementById("changeTextButton");
    const image = document.getElementById("toggleImage");
    const hoverElement = document.getElementById("hoverElement");
    const keyInput = document.getElementById("keyInput");
    const currentValueParagraph = document.getElementById("currentValue");
    const form = document.getElementById("myForm");
    const dropdown = document.getElementById("dropdown");
    const selectedValueParagraph = document.getElementById("selectedValue");
    const submitButton = document.getElementById("submitButton");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Change the text content of the paragraph
        paragraph.textContent = "& i am v broke ,this is my gpay id : enmaai3107-1oksbi";
    });

    // Add a double-click event listener to the image
    image.addEventListener("dblclick", function() {
        // Toggle the visibility of the image
        if (image.style.display === "none") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });

    // Add a mouseover event listener to the hover element
    hoverElement.addEventListener("mouseover", function() {
        // Change the background color of the hover element
        hoverElement.style.backgroundColor = "lightgreen";
    });

    // Add a mouseout event listener to reset the background color when the mouse leaves
    hoverElement.addEventListener("mouseout", function() {
        // Reset the background color of the hover element
        hoverElement.style.backgroundColor = "lightblue";
    });

    // Add a keydown event listener to the input field
    keyInput.addEventListener("keydown", function(event) {
        // Log the key pressed to the console
        console.log(`Key pressed: ${event.key}`);
    });

    // Add a keyup event listener to the input field
    keyInput.addEventListener("keyup", function() {
        // Update the current value paragraph with the input field's value
        currentValueParagraph.textContent = `Current value: ${keyInput.value}`;
    });

    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();
    });

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a new FormData object from the form
        const formData = new FormData(form);

        // Log the form data to the console
        console.log("Form data:");
        for (const [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }
    });

    // Add a change event listener to the dropdown
    dropdown.addEventListener("change", function() {
        // Update the selected value paragraph with the selected option's value
        selectedValueParagraph.textContent = `Selected value: ${dropdown.value}`;
    });
});
