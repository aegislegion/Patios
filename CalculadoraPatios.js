//Mediciones a considerar
var largo;
var ancho;
var espesor=.06; 
var area;
var volumen;
//Cantidades para un m3 de Firme 
var bultos_de_cemento=4.2;
var m3arena=0.5;
var m3grava=1; 
var m2malla=1; 
//Cantidades totales calculadas
var bultos;
var arena;
var grava;
var malla; 
//Precios 
var firme=100;
var loseta=180;
var precio_bulto=250;
var precio_arena=460;
var precio_grava=530;
var precio_malla=50; 
//Formulas Generales

function Calculos(){
    //Calculo de Area y Volumen 
    var largo= parseFloat(document.getElementById("largo").value);
    var ancho= parseFloat(document.getElementById("ancho").value);
    var area=largo*ancho;
    var volumen= largo*ancho*espesor;
    //Formulas para calcular Material necesario.
    var bultos= volumen*bultos_de_cemento;
    var arena= volumen*m3arena;
    var grava= volumen*m3grava;
    var malla= volumen*m2malla;
    //Precios
    //Mano de Obra
    var manodeobrafirme= area*firme;
    var manodeobrapiso= area*loseta;
    //Materiales
    var precio_final_cemento = bultos*precio_bulto;  
    var precio_final_arena = arena*precio_arena;
    var precio_final_grava = grava*precio_grava;
    var precio_final_malla = malla*precio_malla;
    //Precios Finales 
    var subtotal= (manodeobrafirme + manodeobrapiso + precio_final_arena + precio_final_cemento+
        precio_final_grava+precio_final_malla)
    var iva=subtotal*.16
    var total= iva + subtotal

    alert("El total es de:$"+ total);
}
