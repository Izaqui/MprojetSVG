var input = document.querySelector("#buscar");
var valor = input.value;
console.log(valor);
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(valor);
    return Httpreq.responseText;          
  }
  //var json_obj = JSON.parse(Get("https://localhost:3003/"));
  //console.log("this is the author name: "+json_obj.title);
  function main() {
    let data = Get("https://localhost:3003/get/usuarios");
    let usuarios = JSON.parse(data);
    let retorno = document.getElementById("#retorno");
    //usuarios.forEach(element => {
    //    let linha = criaLinha(element);
    //    retorno.appendChild(linha);
    //});
  
}

main()
