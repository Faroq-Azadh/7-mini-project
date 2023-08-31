const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendbtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendbtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p>we'll use your Feedback to improve ourselves.</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}