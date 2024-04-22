$(document).ready(function() {
    $(".btnNumero").click(function() {
        let numero = $(this).text();
        $("#mensaje").append($("#mensaje").val() + numero);
    });

    $("#btnResultado").click(function(){
        let valor = $("#mensaje").text();
        try {
            
            let resultado = math.evaluate(valor);
            $("#mensaje").html(resultado);
        } catch (error) {
            $("#mensaje").html("Math error");
        }
    });
    $("#btnEliminar").click(function(){
        let contenido = $("#mensaje").text();
        $("#mensaje").text(contenido.slice(0, -1));
    });
    $("#btnLimpiar").click(function(){
        $("#mensaje").html("");
    });
    $("#btnPunto").click(function(){
        $("#mensaje").append(".");
    });
});