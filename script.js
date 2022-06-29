let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
let tombolDua = hamburgerMenu.getElementsByClassName('dua')[0];
let tombolSatu = hamburgerMenu.getElementsByClassName('satu')[0];
let tombolTiga = hamburgerMenu.getElementsByClassName('tiga')[0];
let ul = document.querySelector('div.navbar .menu ul');
let navbar = document.getElementsByClassName('navbar')[0];

let gambar = document.querySelectorAll('div.order .gal-other img');
let text = document.getElementsByClassName('text-keterangan');


hamburgerMenu.addEventListener('click', () =>{
	tombolDua.classList.toggle('open');
	tombolSatu.classList.toggle('rotasi-satu');
	tombolTiga.classList.toggle('rotasi-tiga');
	ul.classList.toggle('tampil');
})



window.addEventListener('scroll', () =>{
	scrollPosition = window.scrollY;

	if(scrollPosition > 10){
		navbar.classList.add('bayangan');
	}else{
		navbar.classList.remove('bayangan');
	}
	
})


// let perubahWarna =  () =>{
// 	for(let i = 0; i < gambar.length; i++){
// 		for(let j = 0; j < p.length ; j++){
// 			p[i].style.Color = 'red';
// 		}		
// 	}
// }

for(let i = 0; i < gambar.length; i++){
	gambar[i].addEventListener('mouseenter', () =>{
		for(let j = i; j < text.length; j++){
			text[i].style.color = 'rgba(30, 12, 248, 0.6)';
			text[i].style.fontSize = '24px';
		}
		
	} )
}

for(let i = 0; i < gambar.length; i++){
	gambar[i].addEventListener('mouseleave', () =>{
		for(let j = i; j < text.length; j++){
			text[i].style.color = 'black';
			text[i].style.fontSize = '16px';
		}
		
	} )
}



// gambar.addEventListener('mouseenter', perubahWarna);