/* ================================================
these are Mobile menu code
==================================================*/
const navMenu = document.getElementById('sidebar');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

// click outside of the navigation
document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle-menu')
    {
      navMenu.classList.remove('show');
    }
  }
  // click outside of the navigation

 toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
 });
 closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
 });
/* ================================================
these are Mobile menu code
==================================================*/