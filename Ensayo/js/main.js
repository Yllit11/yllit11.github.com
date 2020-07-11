let link = document.querySelectorAll("a");
console.log(link);
//Busqueda de multiples elementos, todos
//querySelector, solo busca un elemento, el primero
link.forEach(function(link) => {
  console.log(link);
});


//celda

let celda = document.querySelectorAll("td");
//Busqueda de multiples elementos, todos
//querySelector, solo busca un elemento, el primero
celda.forEach(function(td) => {
  td.addEventListener('click',function(){
      console.log(this);
  })

});

//Obtenet elementos de la cla se .close
let link = document.querySelectorAll(".close");

//Recorrerlos
link.addEventListener('click',function() => {
  console.log(":)");

});
