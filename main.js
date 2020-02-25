revSt = (str) => {
	return str.split('').reverse().join('');
}

document.getElementById('numberI').addEventListener('input',  (e) => {
	 
	 let strIm = e.target.value;
	document.getElementById('result').innerHTML = revSt(strIm);
});


var arr = [1,2,3,4];

for (i of arr) {
	console.log(i)
}
 
 