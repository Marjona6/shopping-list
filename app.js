"use strict";

// FUNCTIONS GO HERE

// Functionality: add an item to list by entering text and 
// hitting return or clicking "Add Item" button
// Step 1: Accept text input from id #shopping-list-entry
// Step 2: Add this text to a shoppingList array of objects
// (each object in the array shoppingList has an item name
// and a toggle boolean indicating checked or unchecked)
var state = {
	items: []
};

var addItem = function(state, item) {
	state.items.push(item);
};

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return 
		'<li>\
			<span class="shopping-item">' + item + '</span>\
			<div class="shopping-item-controls">\
				<button class="shopping-item-toggle">\
					<span class="button-label">check</span>\
				</button>\
				<button class="shopping-item-delete">\
					<span class="button-label">delete</span>\
				</button>\
        	</div>\
      	</li>';
	});
	element.html(itemsHTML);
};

$('#shopping-list-entry').submit(function(event) {
	event.preventDefault();
	console.log('before adding item' + state);
	addItem(state, $('.shopping-list-add-input').val());
	console.log('after adding item' + state);
	renderList(state, $('.shopping-list'));
});

// Toggle the checked/unchecked functionality
function toggleCheckUncheck() {
	$('button.shopping-item-toggle').click(submit() {
		// the parentheses above throw an error and I don't know why
		$('span.shopping-item').toggleClass('shopping-item__checked');
	});
}

// Functionality: permanently remove an item from the list
// (remove the object from the array)
// (how to remove an item from an array?)
// Step 1: event listener to know when user has clicked delete
function deleteItem() {
	$('button.shopping-item-delete').click(submit() {
		// remove the item from the array
		this.closest().
		// how to know which item in the array it is? .closest()
		// after it's deleted, reload the DOM? to stop it from displaying anymore

	}
}
// Step 2: 

// Functionality: handleFormSubmit()
function handleFormSubmit() {
	$('#shopping-list-entry').submit(function(event) {
// prevent default event of page reload/page redirect when submit is clicked
	event.preventDefault();
	});
};

// TRIGGERS GO HERE
$(function() {
	handleFormSubmit();
});

// a separate trigger for toggleCheckUncheck()?