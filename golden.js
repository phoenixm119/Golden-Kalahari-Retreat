function submitForm(e){
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
    }

    window.addEventListener('scroll', function(){
      const header = document.getElementById('header');
      if(window.scrollY > 50) { header.classList.add('scrolled'); } 
      else { header.classList.remove('scrolled'); }

      const topBtn = document.getElementById('topBtn');
      if(window.scrollY > 300) { topBtn.style.display='block'; } 
      else { topBtn.style.display='none'; }
    });

    function scrollToTop() { window.scrollTo({ top:0, behavior:'smooth' }); }