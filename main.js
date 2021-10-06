const form = document.querySelector(".form");

const list = document.querySelector('#list')
////////////////////////////////////////////////


////////// Generete Template//////////////
let genereteTemplate = (todo) => {


    let html = `<li>${todo}  <span class="close1">× </span> </li> `

    list.innerHTML += html

    let closeButton = document.querySelectorAll('.close1')


}
////////// Generete Template//////////////

////////// Add New List Item and Get Value//

form.addEventListener('submit', event => {

    event.preventDefault();
    let todo = form.add.value.trim()

    if (todo.length) {
        form.reset()
        genereteTemplate(todo)
        $(".success").toast("show");
    }
    else {
        $(".error").toast("show");
    }

});

////////// Add New List Item and Get Value//

////////// Change List İtem//////////////

list.addEventListener('click', (event) => {

    event.target.classList.toggle('checked')


})

////////// Change List İtem//////////////


////////// Delete List İtem//////////////
list.addEventListener('click', (event) => {

    if (event.target.classList.contains('close1')) {

        event.target.parentElement.remove()
    }

})
////////// Delete List İtem//////////////