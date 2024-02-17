const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ""

    monstrarTarefas()
}

function monstrarTarefas() {

    let novaLi = ""

    minhaListaDeItens.forEach((itens, index) => {
        novaLi = novaLi + `

        <li class="task ${itens.concluida && "done"}" >
         <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
          <p>${itens.tarefa}</p>
         <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
        </li>
        `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    monstrarTarefas()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    monstrarTarefas()
}

function recarregarTarefa() {
    const tarefaDoLocalStorage = localStorage.getItem("lista")

    if (tarefaDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    }

    monstrarTarefas()
}

recarregarTarefa()
button.addEventListener("click", adicionarNovaTarefa)