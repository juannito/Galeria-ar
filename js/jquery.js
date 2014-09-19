$(document).ready(function(){

    var $overlay = $("<div id='overlay'></div>");
    var $imgComp = $("<div id='comp'></div>");
    var $img = $("<img>");
    var $caption = $("<p></p>");

    $imgComp.append($img);
    // Agrega la imagen al overlay
    $imgComp.append($caption);
    // Agrega la p al overlay
    $overlay.append($imgComp);

    $("body").append($overlay);

    // OCULTAR MODAL
    $overlay.hide();

    // CLICK PARA VER
    $('a').click(function(e){
        e.preventDefault(); // Va solo para las A.

        var $imageLocator = $(this).attr("href"); // attr sirve para obtener todos lso valores del elemento
        $img.attr("src", $imageLocator); // de esta manera se le pasa valores al atributo.
        var $textCaption = $(this).children("img").attr("alt"); // al hijo de la imagen.
        $caption.text($textCaption); // funcion para imprimir texto

        // Mostrar modal
        $overlay.fadeIn();

        // CENTRAR
        // ALTO VENTANA
        var ventanaAncho = $(window).width();
        var ventanaAlto = $(window).height();
        // ALTO COMP
        var modalAncho = $("#comp").width();
        var modalAlto = $("#comp").height();

        var modalTop = (ventanaAlto-modalAlto)/2;
        var modalLeft = (ventanaAncho-modalAncho)/2;

        $("#comp").css("top", modalTop);
        $("#comp").css("left", modalLeft);

        console.log($imgComp);
    });

    // OCULTAR IMAGEN
    $overlay.click(function(){ 
        $(this).fadeOut();
    }); 

});