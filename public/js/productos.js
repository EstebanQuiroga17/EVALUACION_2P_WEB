cuaderno = {
    nombre : "cuaderno",
    precio : 5,
    categoria : "utiles"
};

lapiz = {
    nombre : "lapiz",
    precio : 1,
    categoria : "utiles"
};

computador = {
    nombre : "computador",
    precio : 500,
    categoria : "electronicos"
};

computador2 = {
    nombre : "computador2",
    precio : 500,
    categoria : "electronicos"
};

productos = [cuaderno, lapiz, computador];

var tabla = document.getElementById('tabla');

function mostrarProductos(){
    var nombre =  document.getElementById("nombre1");
    var precio =  document.getElementById("precio1");
    var categoria =  document.getElementById("cat1");
    nombre.innerText = cuaderno.nombre;
    precio.innerText = cuaderno.precio;
    categoria.innerText = cuaderno.categoria; 
    
    var nombre =  document.getElementById("nombre2");
    var precio =  document.getElementById("precio2");
    var categoria =  document.getElementById("cat2");
    nombre.innerText = lapiz.nombre;
    precio.innerText = lapiz.precio;
    categoria.innerText = lapiz.categoria;  

    var nombre =  document.getElementById("nombre3");
    var precio =  document.getElementById("precio3");
    var categoria =  document.getElementById("cat3");
    nombre.innerText = computador.nombre;
    precio.innerText = computador.precio;
    categoria.innerText = computador.categoria;  
}

var total = 0;

function calcularTotal(){
    productos.forEach(producto =>{
        console.log(producto.precio)
        total = total + producto.precio;
    })
}

var btn_total = document.getElementById('btn_total');
var p_precio = document.getElementById('p_precio');

btn_total.addEventListener('click', function(event){
    calcularTotal();
    p_precio.innerText = total;
});

mostrarProductos()