
function ajusta_idade(){
    
const conteudo = document.querySelectorAll(".idade")

const idade = [...conteudo].map(function(x){
    return x.innerText
})

idade_sort = idade.reverse()

idade_sort.map(function(x, indice){
    conteudo[indice].innerHTML = x
})

}

