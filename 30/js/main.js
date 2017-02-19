$( ()=> {
  let $nav = $('.navigation'),
        navHeight = $nav.height();
  let $button = $('.mobile__push');
  let $mobileNav = $('.mobile__menu');
  let $closeButton = $('#closeMenu');

  $closeButton.click(()=>{
      $mobileNav.toggleClass('mobile__menu--hide');
  })

  $(window).on('scroll', ()=>{
      if($(window).scrollTop() >= $nav.height()){
          $mobileNav.css('top', '120');
          $nav.height(80);
      } else {
          $mobileNav.css('top', '200');
          $nav.height(navHeight);
      }
  })

  $button.click(()=>{
      $mobileNav.toggleClass('mobile__menu--hide');
  });
})