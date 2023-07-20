let img = document.getElementById("like");
img.addEventListener("click", function () {
    let ImagemAntiga = img.getAttribute("src");
    img.setAttribute("src", "/imagens/like-oculos.jpg");
    console.log(ImagemAntiga);
})

let lista = document.getElementById("lista");
lista.dataset.num = 4
let num = parseInt(lista.dataset.num);
let conteudo = "";
console.log(lista.dataset.num);

for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</li>";
}
lista.innerHTML = conteudo