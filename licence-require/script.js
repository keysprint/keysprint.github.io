let checkbox = document.getElementById('apply');
let checker = 0;
let btn = document.getElementById('btn');

function sepy() {
	checker++;
}

function check(){
	if(checker%2==0){
		alert('Ошибка! Прожмите галочку');
	}else{
		alert('Успешно! Производится вход');
		window.location.href = 'https://heapsizer.cf/clickr/';
	}
}