let correctas = [2,1,3];

let opcion_elegido=[];
let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegido[num_pregunta] = seleccionada.value;

    id="p" + num_pregunta;


    labels = document.getElementByid(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";


    seleccionada.parentNode.style.backgroundColor = "#cec0fc";


}

function corregir(){
    cantidad_correctas = 0;
    for(i=0;i < correctas.length;i++){
        if(correctas[i]==opcion_elegido[i]){
            cantidad_correctas++;
        }

    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}


