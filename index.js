module.exports = function menuCreatorEplus({ array, pai }) {

  if (!array[0]) return;
  
	array.map(item => {
		const newElement = document.createElement('div');
		const title = document.createElement('a');
		newElement.classList.add('menu')
		title.textContent = item.name;
		title.href = item.url
		pai.classList && (newElement.classList = pai.classList + '-sub');
		pai.appendChild(newElement);
		newElement.appendChild(title);
		item.children.length > 0 && menuRecursive({ array: item.children, pai: newElement})
	})
}