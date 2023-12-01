//Ocultar secciones
jQuery(document).ready(function(){
    $(".seccionOculta").hide();
    $(".visible").click(function(){
        var nodo = $(this).attr("href"); 
        if ($(nodo).is(":visible")){
              $(nodo).hide();
              $(this).css("color", "white"); // Restablecer el color original
              return false;
        }else{
            $(".pag-principal").hide();
            $(".seccionOculta").hide("slow");                            
            $(".visible").css("color", "white"); // Restablecer el color de todos los enlaces
            $(this).css("color", "#52ad5a"); // Establecer el color para el enlace actual
            $(nodo).fadeToggle("fast");
            return false;
        }
    });
});

//Efecto máquina de escribir
$(function(){
    var texto = "¡Bienvenidos!";
    maquina("typer",texto,400,0);
});

function maquina(contenedor,texto,intervalo,n){
    var i=0,
    // Creamos el timer
    timer = setInterval(function() {
        if ( i<texto.length ) {
            // Si NO hemos llegado al final del texto..
            // Vamos añadiendo letra por letra y la _ al final.
            $("#"+contenedor).html(texto.substr(0,i++) + "_");
        } else {
            // En caso contrario..
            // Salimos del Timer y quitamos la barra baja (_)
            clearInterval(timer);
            $("#"+contenedor).html(texto);
            // Auto invocamos la rutina n veces (0 para infinito)
            if ( --n!=0 ) {
                setTimeout(function() {
                    maquina(contenedor,texto,intervalo,n);
                },3600);
            }
        }
    },intervalo);
};