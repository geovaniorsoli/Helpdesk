function ticket(e) {
    e.preventDefault()

    const form = document.getElementById('form')
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const selectPrioridade = document.getElementById('prioridade').value

    if(titulo.trim().length == 0 && descricao.trim().length == 0){
       return alert('Campos não podem estar vazios')
    }

    const horario = new Date()
    
    const novoTicket = document.createElement('div')
    novoTicket.className = "ticket"
    novoTicket.innerHTML = `<h2>${titulo}</h2><h3>${descricao}</h3> <h4> ${horario} </h4>`


    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Concluir'
    botaoDeletar.className = "deletebutton"
    botaoDeletar.addEventListener('click', () =>{
        novoTicket.remove()
    })

    novoTicket.appendChild(botaoDeletar)

    if (selectPrioridade === 'leve') {
        document.getElementById('mostrarTicketLeve').appendChild(novoTicket)
    } else if (selectPrioridade === 'media') {
        document.getElementById('mostrarTicketMedio').appendChild(novoTicket)
    } else if (selectPrioridade === 'extrema') {
        document.getElementById('mostrarTicketExtremo').appendChild(novoTicket)
    }

  form.reset()
}

document.getElementById('form').addEventListener('submit', ticket)


function dinamic(){
    const select = document.getElementById('dinamic').value

    const containerForm = document.getElementById('container-form')
    const containerTicket = document.getElementById('container-ticket')

    if(select === 'inserir'){
        containerForm.style.display = 'block'
        containerTicket.style.display = 'none'
    }else if (select === 'visualizar'){
        containerForm.style.display = 'none'
        containerTicket.style.display = 'block'
    }

}
document.getElementById('dinamic').addEventListener('change', dinamic)
dinamic()