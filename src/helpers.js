function choice(items) {
    const randInt = Math.floor(Math.random() * items.length);
    return items[randInt];
}

function remove(items, item) {
  const index = items.findIndex(currItem => currItem === item);
  if (index !== -1) {
    const itemFound = items.splice(index, 1); // Reviewed how to use splice to delete an item at https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    return itemFound;
  }
}