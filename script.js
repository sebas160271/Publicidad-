// Interactividad ligera: menú, animaciones al hacer scroll, formulario fake y galería modal
document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click',()=>{nav.classList.toggle('open')});

  // simple in-view observer for animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); } });
  },{threshold:0.15});
  document.querySelectorAll('.animate-fadeup, .animate-scale').forEach(el=>observer.observe(el));

  // gallery modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  document.querySelectorAll('.gallery-item').forEach(img=>{
    img.addEventListener('click',()=>{
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.setAttribute('aria-hidden','false');
    });
  });
  modalClose.addEventListener('click',()=>{ modal.setAttribute('aria-hidden','true'); modalImg.src=''; });
  modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

  // contact form (simulación: evita enviar realmente)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    status.textContent = 'Enviando...';
    // simulamos envío y limpiamos
    setTimeout(()=>{
      status.textContent = 'Gracias — su solicitud ha sido recibida. Nos contactaremos pronto.';
      form.reset();
    },900);
  });

  // llamada rápida (solo ejemplo)
  document.getElementById('callBtn').addEventListener('click',()=>{
    window.location.href = 'tel:+573000000000';
  });
});
