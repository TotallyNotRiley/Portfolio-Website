const appear = document.querySelector('.appear'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear);
