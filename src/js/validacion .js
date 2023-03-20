
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
nombre.addEventListener('input', leerDatos);
email.addEventListener('input',leerDatos);
telefono.addEventListener('input',leerDatos);
mensaje.addEventListener('input',leerDatos);
datos = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
}
formulario.addEventListener('submit',validarDatos);
function validarDatos(evento){
    evento.preventDefault();
    const{nombre,email,telefono,mensaje}=datos;
    if(nombre===''||email===''||telefono===''||mensaje===''){
        return error('Todos los campos son obligatorios');
    }
    datosCorrectos('Todos los datos estan correctos');
}

function leerDatos(e) {
    datos[e.target.id] = e.target.value;
}

function error(mensaje){
    //creando componente
const error = document.createElement('P');
//agregar texto del mensaje
error.textContent=mensaje;
//agregar clase css
error.classList.add('error');
//incorporarlo al formulario
formulario.appendChild(error);
//tiempo de visualizacion
setTimeout(()=>{
    error.remove();
},4000);

};
function datosCorrectos(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent=mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);
    setTimeout(()=>{
        correcto.remove();
    },4000);
}
