const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstar)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
	//console.log(placeholder)
	placeholder.addEventListener('dragover', dragover())
	placeholder.addEventListener('dragenter', dragenter())
	placeholder.addEventListener('dragleave', dragleave())
	placeholder.addEventListener('drop', drop())


}

function dragstar(event) {
	console.log('drag start', event.target);
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)


}
function dragend(event) {
	console.log('drag end');
	event.target.className = 'item'
	//event.target.classList.remove('hold', 'hide')
}

function dragover(event) { }
function dragenter(event) { }

function dragleave(event) { }

function drop(event) { }

