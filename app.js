"use strict";

// Functions and Objects definitions

// the state object
// currently populated with a test list
// production version will be blank so users can input everything themselves
var state = {
	items: [
	{
		name: "apples",
		checked: false
	},
	{
		name: "bananas",
		checked: true
	},
	{
		name: "bread",
		checked: true
	},
	{
		name: "broccoli",
		checked: false
	},
	{
		name: "carrots",
		checked: true
	}
	]
}

// ADD ITEMS
// add user input to the array
// default bool value is false (unchecked)
function addItem(state, itemToBeAdded) {
	// check if targeting is working
	// alert("I've just activated the addItem() function");
// button type="submit" under form id="js-shopping-list-form"
// on click, activates function addItem()
	state.items.push(itemToBeAdded);
	// check if targeting is working:
}

// DELETE ITEMS--
// remove item at index x from the array
function deleteItem(state, itemName) {
	// check if targeting is working
	// alert("I've just activated the deleteItem() function");
// button class="shopping-item-delete" under span class="shopping-item"
// on click, activates function deleteItem()
	var index;
	for (var i=0; i < state.items.length; i++) {
		// find the item with the same name as the item we want to delete
		if (state.items[i].name === itemName) {
			// this is the index of the item we want to delete
			index = i;
		}
	}
	state.items.splice(index, 1);

}

// CHECK/UNCHECK ITEMS--this works!
// toggle the bool value
// true becomes false
// false becomes true
function checkUncheckItem(state, itemName) {
	// check if targeting is working
	//alert("I have activated the function checkUncheckItem()");
// button class="shopping-item-toggle" under span class="shopping-item"
// on click, activates function checkUncheckItem()
	// find the item in the array of items that has the name of
	// ... the item we want to check or uncheck
	for (var i=0; i < state.items.length; i++) {
		if (state.items[i].name === itemName) {
			// define the value of "checked" for the item as
			// ... the opposite of what it currently is
			state.items[i].checked = !state.items[i].checked;
		}
	}
}

// function to render list (to be called after any other action is performed)
function renderList(state) {
	// create an empty string to hold the HTML that will populate
	// ... into the DOM for each item in the items array
	// Call this function after any other function is called
	// (that is, after any change is made to the state object)
	var htmlOutput = "";
	$.each(state.items, function (itemKey, itemValue) {
		htmlOutput += '<li>';
		// if the item is not checked, add HTML WITHOUT the special checked class
		if (itemValue.checked == false) {
			htmlOutput += '<span class="shopping-item">' 
			+ itemValue.name + '</span>';
		}
		// if the item IS checked, add HTML WITH the special checked class
		else {
			htmlOutput += '<span class="shopping-item shopping-item__checked">'
			+ itemValue.name + '</span>';
		}
		htmlOutput += '<div class="shopping-item-controls">';
        htmlOutput += '<button class="shopping-item-toggle">';
        htmlOutput += '<span class="button-label">check</span>';
        htmlOutput += '</button>';
        htmlOutput += '<button class="shopping-item-delete">';
        htmlOutput += '<span class="button-label">delete</span>';
        htmlOutput += '</button>';
        htmlOutput += '</div>';
        htmlOutput += '</li>';
	});
	// insert the HTML from the "htmlOutput" variable into the shopping-list class
	$('.shopping-list').html(htmlOutput);
	// reset input field to empty
	$('#shopping-list-entry').val('');
}

// Functions and Objects useage

// do the following when the page loads:
$(document).ready(function() {
	// Step 1: do these things to containers created before page loaded
	// render the list to show all existing items in state
	renderList(state);

	// when the js-shopping-list-form button is clicked, activate function called addItem()
	$('#js-shopping-list-form').on('submit keypress', function(event) {
		// if event is a keypress where key has code 13 (ENTER)
		// OR if event is a form submit:
		if (event.type === 'keypress' && event.which === 13 || event.type === 'submit') {
			// use preventDefault() to prevent page from refreshing/reloading
			event.preventDefault();
			// define itemName as whatever the user entered into the input field
			// ... with ID name "shopping-list-entry"
			var itemName = $('#shopping-list-entry').val();
			var item = {
				name: itemName,
				checked: false // checked status defaults to false
			}
			// if there is a new value entered for itemName:
			if (itemName) {
				// call the function addItem()
				addItem(state, item);
				// render the list since there has been a change to state
				renderList(state);
			}
		}
	})

	// Step 2: do these things to containers created after page loaded
	// call the checkUncheckItem() function
	// below: why is it 'ul' and not, for example, class shopping-list
	// ... or class shopping-item, etc.?
	$('ul').on('click', 'button.shopping-item-toggle', function(event) {
		// find the name of the shopping list item that was clicked
		var itemName = $(this).closest('li').find('.shopping-item').text();
		// change the item's status to checked or unchecked (opposite of current)
		checkUncheckItem(state, itemName);
		// render the list again because there was a change to state
		renderList(state);
	})

	// call the deleteItem() function
	// render list
	$('ul').on('click', 'button.shopping-item-delete', function(event) {
		// get the text (name) of the span with class="shopping-item"
		// ... that is closest to ul with the button.shopping-item-delete
		// ... that was clicked
		var itemName = $(this).closest('li').find('.shopping-item').text();
		// delete the item from the array (call function deleteItem())
		deleteItem(state, itemName);
		// render the list again because there was a change to state
	renderList(state);
	})

})