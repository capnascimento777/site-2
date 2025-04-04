let valortitulo = document.getElementById("tituloprincipal").innerText
console.log(valortitulo);

function mudartitulo(){
    document.getElementById("tituloprincipal").innerHTML = "titulo alterado com sucesso";
    window.alert("titulo alterado com sucelsso");

}

function desfazerAlteracao(){
   document.getElementById("tituloprincipal").innerHTML = valortitulo;
}