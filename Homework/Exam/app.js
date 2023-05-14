let list = document.querySelector('ul');
let forms = document.querySelector('.form');
let filterInput = document.querySelector('.filter')
alert("If you want to mark the task as completed, click on the diamond ");


filterInput.addEventListener('keyup',(e) => {
	let test = filterInput.value.toLowerCase();

	let lists = list.querySelectorAll('li');
	lists.forEach(list => {
		let mainCheck = list.firstElementChild;
		let str = mainCheck.textContent.toLowerCase();
		
		if(str.indexOf(test) == -1){
			list.style.display = 'none'
			return;
		}
		list.style.display = 'block'
	});
});

forms.addEventListener('submit',(e) => {
	e.preventDefault();
	let newBook = e.target.querySelector('input');
	if(newBook.value === ''){
		alert('You can\'t have an empty field')
		return;
	}
	let newLi = document.createElement('li');
	let newParagraph = document.createElement('p');
	let alreadyButton = document.createElement('button');
	newParagraph.textContent = newBook.value;
	alreadyButton.textContent = 'delete';
	newLi.appendChild(newParagraph);
	newLi.appendChild(alreadyButton);
	list.appendChild(newLi);
	newBook.value = '';
});

list.addEventListener('click',(e) => {
	if(e.target.tagName == 'BUTTON'){
		let li = e.target.parentNode;
		li.parentNode.removeChild(li);
	}
});

let completed = document.querySelector('ul');
completed.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
