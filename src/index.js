const init = () => {

    const form = document.querySelector('form')

    form.addEventListener('submit', (e) => {

    e.preventDefault();

    const input = document.querySelector("#searchByID")

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {

            const h4 = document.querySelector('h4')
            h4.textContent = data.title

                const p = document.querySelector('p')
            p.textContent = data.summary
        
          })
        
    })

}

const form = document.addEventListener('DOMContentLoaded', init)