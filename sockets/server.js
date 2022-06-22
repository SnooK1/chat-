const { info } = require('console');
const express = require('express');
const  app =express();

const http = require('http');

const server = http.createServer(app);

server.listen(3000);

app.use(express.static('public'));

const { Server } = require("socket.io");
const io = new Server(server);

io.on('connect',function(socket){
  console.log('nueva  conexion id:'+socket.id);

  //.emit  emite un llamado 
  //io.emit('datos_usuario',{})

  //.on recibe el evento(llamado)
  socket.on('datos_usuario',function(datos){
    //console.log('correo:'+datos.correo + ' usuario:'+datos.usuario) 
    //id_user =socket.id;
    io.emit('evento2',{user:datos.usuario});// para enviar al cliente se usa io
  });

  socket.on('sent_mensaje',function(datos){
    //console.log('esta enviando un mensaje');
    io.emit('nuevo_msj',{user:datos.user, msj:datos.msj});
  })
  
});