let check = 0;
let count = 1;
let check2 = 0;
let restart = 0;
function restartgame(){
	restart = 1;
}
function btnclick(){
	check++;
	if(check==1){
	document.getElementById('timer').innerHTML = 0;
	let i = 1;
	let id = setInterval(plusTime,1000);
	function plusTime(){
		if((i<=5)&(restart==0)){
			document.getElementById('timer').innerHTML = i;
			i++;	
		}
		else if(restart!=1){
			check2=1;
			clearInterval(id);
			document.getElementById('timer').innerHTML = 'Время вышло!'
			document.getElementById('speed').innerHTML = 'Среднее количество кликов в секунду - ' + (count-1)/5 + ' Кликов/Сек.';
			i=6;
			function checkrestart(){
				if(restart==1){
					plusTime();
				}
			}
			var someid = setInterval(checkrestart,100);
		}else if(restart==1){
			clearInterval(someid);
			document.getElementById('speed').innerHTML = '';
			check = 0;
			check2 = 0;
			clearInterval(id);
			restart=0;
			document.getElementById('timer').innerHTML = 'Нажми чтобы играть';
			document.getElementById('counter').innerHTML = '0';
			i=0;
			count = 1;

		}
	}
}
counter();
function counter(){
if(check2==0){
document.getElementById('counter').innerHTML = 'Всего '+ count +' Кликов';
count++;
}
}
}