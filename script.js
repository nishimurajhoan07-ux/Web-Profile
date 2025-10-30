// script.js - simple active nav detection + mobile menu close
document.addEventListener('DOMContentLoaded', function(){
  // set active nav based on filename
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link=>{
    const href = link.getAttribute('href');
    if(href === path) { link.classList.add('active'); }
  });

  // Close navbar on nav-click (mobile)
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const bsCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(l=>{
    l.addEventListener('click', ()=>{
      if(bsCollapse.classList.contains('show')){
        // use bootstrap collapse
        const collapse = new bootstrap.Collapse(bsCollapse);
        collapse.hide();
      }
    });
  });
});