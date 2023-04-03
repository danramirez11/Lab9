const botonPublicar = document.getElementById("publicar")
const modal = document.getElementById("modal")
const input = document.getElementById("input")
const posts = document.getElementById("posts")

function abrir(){
    modal.classList.add("appear")
}

function cerrar(){
    modal.classList.remove("appear")
}

input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
      botonPublicar.classList.add('boton-alter');
      botonPublicar.removeAttribute('disabled');
    } else {
      botonPublicar.classList.remove('boton-alter');
      botonPublicar.setAttribute('disabled', true);
    }
    
  });

function publicar(){
        posts.innerHTML += `
        <div class="post">
        <div class="nombre">
        <img class="fotoDePerfil" src="https://i.pinimg.com/564x/2f/85/16/2f8516f8a144e9a88ca36ac4729d340e.jpg" alt="">
        <p>Pidge Holt</p>
        </div>
        <p class="post-texto">${input.value}</p>
    </div>
        `
    cerrar()
    input.value = ""
}