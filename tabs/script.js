let windows = document.getElementsByClassName('tab');
let content = document.getElementsByClassName('tabcontent')

windows[0].onclick = function(){
	windows[1].classList.remove('active');
	windows[2].classList.remove('active');
	windows[0].classList.add('active');
	content[0].style.display = '';
	content[1].style.display = 'none';
	content[2].style.display = 'none';
}
windows[1].onclick = function(){
	windows[2].classList.remove('active');
	windows[0].classList.remove('active');
	windows[1].classList.add('active');
	content[1].style.display = '';
	content[0].style.display = 'none';
	content[2].style.display = 'none';
}
windows[2].onclick = function(){
	windows[0].classList.remove('active');
	windows[1].classList.remove('active');
	windows[2].classList.add('active');
	content[2].style.display = '';
	content[1].style.display = 'none';
	content[0].style.display = 'none';
}