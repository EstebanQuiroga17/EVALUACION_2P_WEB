// Definicion de productos y arreglo de productos
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

productos = [cuaderno, lapiz, computador];

//codificacion de metodos para mostrar productos y calcular total
var tbl_productos = document.getElementById('tbl_productos');

function agregarFila(producto){
    let tr = document.createElement('tr');

            for(let clave in producto){
                let td = document.createElement('td');
                td.innerText = producto[clave];
                tr.appendChild(td);
            }
            tbl_productos.appendChild(tr);
}

function mostrarProductos(clave, valor){
    productos.forEach(producto =>{  
        if(producto[clave] == valor){
            agregarFila(producto);
        }else if(valor == 'Mostrar todos'){
            agregarFila(producto);
        }
    })
}


function calcularTotal(){
    let total = 0;
    productos.forEach(producto =>{
        console.log(producto.precio)
        total = total + producto.precio;
    })
    return total;
}

// llenar select

var select_filtrar = document.getElementById('select_filtrar');

function llenarSelect(){
    let categoriasDepuradas = [];
    productos.forEach(producto => {
        if(!categoriasDepuradas.includes(producto.categoria)){
            categoriasDepuradas.push(producto.categoria);
            let option = document.createElement('option');
            option.value = producto.categoria;
            option.innerText = producto.categoria;
            select_filtrar.appendChild(option);
        }
    })
}

// codigo para boton calcular total
var btn_total = document.getElementById('btn_total');
var p_precio = document.getElementById('p_precio');

btn_total.addEventListener('click', function(event){
    p_precio.innerText = calcularTotal();
});

// codigo para filtrar por categoria
var btn_filtrar = document.getElementById('btn_filtrar');

btn_filtrar.addEventListener('click', function(event){
    let categoriaSeleccionada = select_filtrar.value;
    tbl_productos.innerHTML = "";
    mostrarProductos("categoria", categoriaSeleccionada);
});

mostrarProductos();
llenarSelect();