const getbtn = document.getElementById('btn');
const getbody = document.querySelector('body');
const colors = [img,'red','blue','pink','green','yellow','orange','skyblue'];

getbody.style.backgroundColor = 'hotpink';

getbtn.addEventListener('click',changecolor);

function changecolor(){

	// const getcolorindx = Math.floor(Math.random()*colors.length)
	// getbody.style.backgroundColor = colors[getcolorindx];
	// console.log(getbody.style.backgroundColor);

getbody.style.backgroundImg = img;

}

var img = document.images[0].getAttribute('src');
console.log(img);
