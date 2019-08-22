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
	if(count==10){
		document.getElementById('message').innerHTML = 'гля молодой куда разогнался'
	}
	if(count==15){
		document.getElementById('message').innerHTML = 'молодоой!'
	}
	if(count==20){
		document.getElementById('message').innerHTML = 'ты еще маме нужен'
	}
	if(count==30){
		document.getElementById('message').innerHTML = 'не ну это бан'
	}
	if(count==40){
		document.getElementById('message').innerHTML = 'ой да ты гля как потеет'
	}
	if(count==49){
		document.getElementById('message').innerHTML = 'не ну ты уаще рекорд пабил было же 48'
	}
	if(count==60){
		document.getElementById('message').innerHTML = 'пожалуйста читы выруби или двойной клик я хз что ты там юзаеш'
	}
if(count%10==0){
document.getElementById('counter').innerHTML = 'Всего '+ count +' Кликов';
count++;
}else if((count%10==1)&(count>20||count<10)){
document.getElementById('counter').innerHTML = 'Всего '+ count +' Клик';
count++;
}else if((count%10<=4)&(count>20||count<10)){
document.getElementById('counter').innerHTML = 'Всего '+ count +' Клика';
count++;
}else if((count>=10)&(count<=20)){
document.getElementById('counter').innerHTML = 'Всего '+ count +' Кликов';
count++;
}else{
document.getElementById('counter').innerHTML = 'Всего '+ count +' Кликов';
count++;
}
}
}
}