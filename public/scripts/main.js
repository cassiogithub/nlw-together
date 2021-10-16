import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const btnModal = document.querySelector('.modal button')


const btnCheck = document.querySelectorAll(".actions a.check")
btnCheck.forEach(button => {
    button.addEventListener('click', handleClick)
})


const btnDelete = document.querySelectorAll(".actions a.delete")

btnDelete.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const form = document.querySelector('.modal form')
    const roomId = document.querySelector('#room-id').dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)


    const btnClass = btnModal.classList
    const text = check ? 'Marcar como lida ' : 'Excluir'
    modalTitle.innerHTML = `${text} esta pergunta ? `
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta ?`
    btnModal.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? btnClass.remove('red') : btnClass.add('red')

    modal.open()
}

