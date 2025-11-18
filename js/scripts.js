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

function openIg() {
  window.open("https://www.instagram.com/metricachajari/", "_blank").focus();
}

$(document).ready(function () {
  // Arreglo de imágenes con datos dinámicos (puedes agregar más imágenes al arreglo)
  var images = [
    {
      src: "assets/img/galeria/rololayout.jpg",
      title: "Recuperación de piezas",
      description: "Rolo alimentador de máquina chipeadora",
    },
    {
      src: "assets/img/galeria/fabricacionpieza.jpg",
      title: "Fabricación de piezas bajo plano",
      description: "Fabricación de piezas",
    },
    {
      src: "assets/img/galeria/rolopellet.jpg",
      title: "Ingeniería inversa",
      description: "Rolo prensador de pellets",
    },
    {
      src: "assets/img/galeria/otro3.jpg",
      title: "Fabricación de piezas especiales",
      description: "Fabricación de piezas especiales",
    },
    {
      src: "assets/img/galeria/medicion.jpg",
      title: "Mediciones",
      description: "",
    },
    {
      src: "assets/img/galeria/rodamiento.jpg",
      title: "Análisis de causa raíz",
      description: "",
    },

    {
      src: "assets/img/galeria/rolo.jpg",
      title: "Fabricación de piezas",
      description: "",
    },
    {
      src: "assets/img/galeria/engomado.jpg",
      title: "Fabricación de piezas",
      description: "Reemplazo rolo liso por rolo engomado de alto rendimiento",
    },
    {
      src: "assets/img/galeria/fabricacion.jpg",
      title: "Fabricación de piezas",
      description: "",
    },

    {
      src: "assets/img/galeria/base1.jpg",
      title: "Bases-Nueva línea de aserrado",
      description: "",
    },
    {
      src: "assets/img/galeria/bases2.jpg",
      title: "Bases-Nueva línea de aserrado",
      description:
        "Diseño, construcción y montaje de estructuras bases para línea nueva de aserrado",
    },
    {
      src: "assets/img/galeria/brida.jpg",
      title: "Fabricación con pieza en mano",
      description: "Brida de reductor",
    },

    {
      src: "assets/img/galeria/aserradero.jpg",
      title: "Asesoramiento técnico-Planta de pellets",
      description:
        "Redistribución para aprovechamiento de layout; mejora de funcionamiento; aumento de la producción al 100%",
    },
    {
      src: "assets/img/galeria/bigbag.jpg",
      title: "Estructura-Carga de Bigbags",
      description:
        "Agregado de carga en bigbags a máquina peletizadora con diseño de estructura propio",
    },
    {
      src: "assets/img/galeria/layouts.jpg",
      title: "Layout 3D",
      description:
        "Relevamiento, mejora de distribución de máquinas y optimización de espacios y producción",
    },

    {
      src: "assets/img/galeria/medicion2.jpg",
      title: "Mediciones",
      description: "Verificación de planicidad separadores sierra múltiple",
    },
    {
      src: "assets/img/galeria/calor.jpg",
      title: "Mantenimiento predictivo",
      description: "Termografía",
    },
    {
      src: "assets/img/galeria/almacen.jpg",
      title: "Gestión de almacén",
      description: "",
    },

    {
      src: "assets/img/galeria/calor2.jpg",
      title: "Mantenimiento predictivo",
      description: "Termografía",
    },
    {
      src: "assets/img/galeria/seguridad.jpg",
      title: "Seguridad",
      description: "Cerramiento banco de capacitores",
    },

    {
      src: "assets/img/galeria/reparacion.jpg",
      title: "Recuperación de piezas",
      description: "Rodillo apretador moldurera",
    },
  ];

  var carouselItems = "";
  var imagesPerSlide = 3; 

  for (var i = 0; i < images.length; i += imagesPerSlide) {
    var slideImages = images.slice(i, i + imagesPerSlide); 
    var activeClass = i === 0 ? "active" : ""; 

    carouselItems += `
      <div class="carousel-item ${activeClass}">
        <div class="row">
    `;

    slideImages.forEach(function (image) {
      carouselItems += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <img src="${image.src}" class="img-fluid img-thumbnail openModal "
               data-title="${image.title}" data-description="${image.description}" />
          <p class="text-center mt-2">${image.title}</p>
        </div>
      `;
    });

    carouselItems += `</div></div>`; 
  }

  $("#carouselImages").html(carouselItems);

  // Función para abrir el modal con los datos de la imagen
  $(document).on("click", ".openModal", function () {
    var src = $(this).attr("src");
    var title = $(this).data("title");
    var description = $(this).data("description");

    // Actualizamos el modal con los datos
    $("#modalImagen").attr("src", src);
    $("#modalTitle").text(title);
    $("#modalDescripcion").text(description);

    // Mostramos el modal
    $("#modalFoto").modal("show");
  });

  // Función para cerrar el modal
  $(document).on("click", ".close", function () {
    $("#modalFoto").modal("hide");
  });
});
