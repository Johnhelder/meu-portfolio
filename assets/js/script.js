window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
    if(document.querySelector(".menu nav ul").style.display == 'flex'){
      document.querySelector(".menu nav ul").style.display = 'none';
    }else{
      document.querySelector(".menu nav ul").style.display = 'flex';
    }
  });
};





window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});