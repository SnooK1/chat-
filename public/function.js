const socket = io.connect();           

socket.on('evento2',function(datosUsu){//recive los datos del servidor
    alert('nuevo usuario conectado:'+ datosUsu.user)
})
socket.on('nuevo_msj',function(datosMsj){
    let messages = document.getElementById('messages');
    var item = document.createElement('li');
    item.textContent = `${datosMsj.user}:  ${datosMsj.msj} `;
    messages.appendChild(item);
    
})

let nombreusuario;


form.addEventListener('submit', function(e) {
    e.preventDefault();     
    let correo = document.querySelector('#correo').value;
    let usuario = document.querySelector('#usuario').value;
    if(correo!=""||usuario !=""){
        nombreusuario= usuario;
        socket.emit('datos_usuario',{correo:correo,usuario:usuario});//emiti los datos al servidor
        document.querySelector('#correo').value ="";
        document.querySelector('#usuario').value=""
        document.querySelector('.boton-msj').style.display="block";
    }
});


document.querySelector('#formularioo').addEventListener('submit',function(e){
        e.preventDefault();
        let mensaje = document.querySelector('#mensaje').value;
        if(mensaje !=""){
            socket.emit('sent_mensaje',{msj:mensaje,user:nombreusuario });
            document.querySelector('#mensaje').value="";
        }
    })