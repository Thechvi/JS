const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstar)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
	//console.log(placeholder)
	placeholder.addEventListener('dragover', dragover)
	placeholder.addEventListener('dragenter', dragenter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragdrop)


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
function dragover(event) {
	event.preventDefault()

}
function dragenter(event) {
	event.target.classList.add('hovered')
}

function dragleave(event) {
	event.target.classList.remove('hovered')
}
function dragdrop(event) {
	event.target.classList.remove('hovered')
	event.target.append(item)
}

