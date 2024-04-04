/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function openWspWeb() {
  window.open("https://wa.me/5493456440272", "_blank").focus();
}

function openMail() {
  window.location.href = "mailto:metrica.ing.chajari@gmail.com";
}

function openMap() {
  window
    .open(
      " https://www.google.com/maps/place/Metrica+Chajari/@-30.7672789,-57.9895641,15z/data=!4m6!3m5!1s0x95ad0d970f1c83dd:0x5168f65eb9b3fa98!8m2!3d-30.7672789!4d-57.9895641!16s%2Fg%2F11y3s_qtbn?entry=ttu",
      "_blank"
    )
    .focus();
}
