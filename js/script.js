function CerrarSesion(){
    let button=document.querySelector("#buscador");
    let valor= button.value;
    alert("Sesion cerrada correctamente"+valor);
}

function cambiar_color(boton) {

    boton.style.backgroundColor = "red";
    boton.style.color = "black";
}

function like(numero) {
    let numero_html = document.querySelector(".numero"+numero);

    let numero_actual = numero_html.innerText;
    numero_actual++;

    numero_html.innerText = numero_actual;
}
