// Galerie : si une capture n'existe pas encore, on affiche un cadre « Capture à ajouter ».
document.querySelectorAll('.gallery img').forEach(function(img){
  function ph(){
    var d=document.createElement('div');d.className='ph';d.textContent='Capture à ajouter';
    img.replaceWith(d);
  }
  if(img.complete && img.naturalWidth===0){ph();} else {img.addEventListener('error',ph);}
});
// Agrandir une image au clic
var lb=document.createElement('div');lb.className='lightbox';lb.setAttribute('role','dialog');
var big=document.createElement('img');lb.appendChild(big);document.body.appendChild(lb);
document.addEventListener('click',function(e){
  if(e.target.matches('.gallery img')){big.src=e.target.src;big.alt=e.target.alt;lb.classList.add('open');}
  else if(lb.classList.contains('open')){lb.classList.remove('open');}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open');});
