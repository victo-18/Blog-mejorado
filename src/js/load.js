//Pantalla de carga
window.addEventListener('load',function(){
    const carga = document.querySelector('#onload');
    const body = document.querySelector('#body');
    setTimeout(()=>{
        carga.remove();
        //elimicaClase();
        body.classList.remove('loader')
    });
   
});
 //function elimicaClase(){
//   const body = document.querySelector('#body');
//    body.classList.remove('loader') 
//}
