let doc = document;

function search(){
	let input = doc.getElementById('myInput').value;
	let filter = input.toUpperCase();
	let ul = doc.getElementById('myUL');
	let li = ul.getElementsByTagName('li');

	for(let i=0;i<li.length;i++){
		let a = li[i].getElementsByTagName('a')[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = ''
		}else{
			li[i].style.display = 'none';
		}
	}
}
