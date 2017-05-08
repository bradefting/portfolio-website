$( document ).ready(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});

window.sr = ScrollReveal();

sr.reveal('.projects-head', {
  duration: 2000,
  origin:'bottom',
});
sr.reveal('.projects', {
  duration: 2000,
  origin:'bottom',
  distance:'200px',
  delay: 1000,
});
// sr.reveal('.btn-default', {
//   duration: 2000,
//   delay: 3000,
//   origin:'bottom'
// });
// sr.reveal('.projects-left', {
//   duration: 2000,
//   origin:'left',
//   distance:'200px',
//   delay: 1000,
// });
// sr.reveal('.projects-right', {
//   duration: 2000,
//   origin:'right',
//   distance:'200px',
//   delay: 1000,
// });
// sr.reveal('.projects-right', {
//   duration: 2000,
//   origin:'right',
//   distance:'200px',
//   delay: 1000,
// });
sr.reveal('.skills-head', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.skills-box', {
  duration: 3000,
  origin:'bottom',
  viewFactor: 0.25
});
sr.reveal('.experience-head', {
  duration: 2000,
  origin:'bottom',
});
sr.reveal('.experience', {
  duration: 2000,
  origin:'bottom',
  viewFactor: 0.2
});
// sr.reveal('.ex-left', {
//   duration: 3000,
//   origin:'left',
//   distance:'300px',
//   viewFactor: 0.25
// });
// sr.reveal('.ex-right', {
//   duration: 3000,
//   origin:'right',
//   distance:'300px',
//   viewFactor: 0.25
// });
sr.reveal('.education-head', {
  duration: 2000,
  origin:'bottom',
});
sr.reveal('.education', {
  duration: 2000,
  origin:'bottom',
  delay: 1000,
  viewFactor: 0.1
});
sr.reveal('.profile-img', {
  duration: 2000,
  origin:'bottom',
  delay: 1000,
});
