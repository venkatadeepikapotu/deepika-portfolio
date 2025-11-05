// small niceties
document.getElementById('year').textContent = new Date().getFullYear();

// scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('reveal'); }
  });
},{threshold:0.1});

document.querySelectorAll('.section, .card, .timecard, .project').forEach(el=>{
  el.classList.add('will-reveal');
  observer.observe(el);
});
