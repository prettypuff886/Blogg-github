/*sticky nav*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
})

/*sticky toggle button */
window.addEventListener('scroll', function(){
    var toggleB = document.querySelector('.toggle-button');
    toggleB.classList.toggle('stickyB', window.scrollY > 0);
})


/*toggle button*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



  /* top of page button */
  if ($('.top-of-page').length > 0) {     
    //when scrolling, trigger the function
          $(document).scroll(function () {
            // display button when scolling past 100px
              if ($(document).scrollTop() >= 100) {
                  $('.top-of-page').removeClass('fade-out');
              } else {
                  $('.top-of-page').addClass('fade-out');
              }
          })
  
          $('.top-of-page').click(function () {
              $("html, body").animate({scrollTop: "0px"}, 500);
          })
      }