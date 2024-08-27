//Condicionais 
// let iceCream = "chocolate";
// if (iceCream != "chocolate") {
//   alert("Sim, eu amo sorvete de chocolate!");
// } else {
//   alert("Aaaah, mas chocolate é o meu favorito…");
// }


// // função 
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
    
//   } 
//   console.log( multiply(4, 7));
//   console.log( multiply(20, 20));
//   console.log( multiply(0.5, 3));

// //Eventos
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ai! Pare de me cutucar!");
//   });
//   // o codigo acima é o mesmo do abaixo 
// document.querySelector("html").addEventListener("click", () => { // ()=> função anonima ou função de seta
//     alert("Ai! Pare de me cutucar!");
//   });
  
  

// Exemplo de Onclick para trocar imagem
const myImage = document.querySelector("img");

minhaImagem.onclick = () => {
  const mySrc = minhaImagem.getAttribute("src");
  if (mySrc === "imagens/gh.png") {
    minhaImagem.setAttribute("src", "imagens/github.png");
  } else {
    minhaImagem.setAttribute("src", "imagens/gh.png");
  }
};
