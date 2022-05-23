let div = document.querySelector('exampleModal');
div.insertAdjacentHTML('beforebegin', '<div id="erro-senha" class="overlay"><i style="color: #8C52FF;" class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>');

//remove a div criada acima
let remove_element = document.querySelector('#erro-senha');
if (remove_element) {
    remove_element.remove();
}