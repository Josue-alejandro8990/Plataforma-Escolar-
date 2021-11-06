const calificar=(id)=>{
    var carnet =document.getElementById('carnet').innerHTML;
    var nombre =document.getElementById('nombrealumno').innerHTML;
    var seccion =document.getElementById('seccion').innerHTML;
    document.getElementById('frminiciocatedratico').style.display="none";
    document.getElementById('frmasignaractividades').style.display="none";
    document.getElementById('frmactividadesentregadas').style.display="none";
    document.getElementById('frmasignacionnotas').style.display="block";
    document.getElementById('frmactividades').style.display="none";
    buscartarea(id,carnet,nombre,seccion)
}
const buscartarea=(id,carnet,nombre,seccion)=>{
    var id;
    var Carnet = carnet;
    var Nombre = nombre;
    var Seccion = seccion;

    var divdatos = document.getElementById('datostarea');
    fetch('/Frontend/DatosTarea?'+new URLSearchParams({
        _id:id,
    }),{ method:'get'}).then(response => response.json()).then(item =>{
       divdatos.innerHTML+= `<div id="datostarea" class="input-contenedor">
       <i class="fas fa-book"></i>
       <p>Datos del alumno</p>
       <label>Estudiante :</label>
       <p>${Nombre}</p>
       <label>Carnet :</label>
       <p id ="Carnet">${Carnet}</p>
       <label>Seccion :</label>
       <p>${Seccion}</p>
       <p>Datos de actividad</p>
       <label>Token de Tarea :</label>
       <p id ="idtarea">${item._id}</p>
       <p>Nombre Tarea :${item.nombre}</p>
       <p>Fecha de entrega :${item.dateFinal}</p>
       <p>Punteo Asignado :${item.nota}</p>
       </div>`;
    });
    
};

    const consultartareas=()=>{
        var div = document.getElementById('tareas');
            fetch('/Frontend/activityobtener',{method:'get'}).then(response => response.json()).then(item =>{
                 item.forEach( data =>{
                     div.innerHTML+=`<div onclick="consultaentregas(this.id)" id="${data._id}" class="input-contenedor">
                    <i class="fas fa-book"></i>
                    <p>Nombre de la tarea :${data.nombre}</p>
                    <p>Punteo asignado :${data.nota}</p>
                    <p>Fecha de entrega : ${data.dateFinal}</p>
                    <p>Fecha de asignacion :${data.dateInicial}</p>
                  </div>`;
                
                  })
            });
        }
        const consultaentregas=(id)=>{
            var div = document.getElementById('tareasentregadas');
            document.getElementById('frmactividades').style.display="none";
            document.getElementById('frmactividadesentregadas').style.display="block";
                fetch('/Frontend/TareasEntregadas',{method:'get'}).then(response => response.json()).then(item =>{
                     item.forEach( data =>{
                         div.innerHTML+=`<div onclick="calificar(this.id)" id="${id}" class="input-contenedor">
                        <i class="fas fa-book"></i>
                        <label>Estudiante :</label>
                        <p id="nombrealumno">${data.nombres+' '+data.apellidos}</p>
                        <label>Carnet :</label>
                        <p id ="carnet">${data.id_estudiante}</p>
                        <label>Seccion :</label>
                        <p id="seccion">${data.seccion}</p>
                      </div>`;
                      })
                });
            }
const asignartarea = document.getElementById('btnenviartarea');

asignartarea.addEventListener('click',() =>{

    var f_inicio = document.getElementById('fasignacion').value;
    var f_culminacion = document.getElementById('fculminacion').value;
    var puntos = document.getElementById('nota').value;
    var nombre_tarea = document.getElementById('nombretarea').value;
    var descripciontarea = document.getElementById('descripcion').value;
 
    fetch('/Frontend/activitynueva?'+new URLSearchParams({
        nombre:nombre_tarea,
        nota:puntos,
        descripcion:descripciontarea,
        dateFinal:f_culminacion,
        dateInicial:f_inicio
    }),{ method:'post'}).then(response => response.json()).then(item =>{ console.log(item)});
});
const asignarnota = document.getElementById('btnenviarnota');

asignarnota.addEventListener('click',() =>{
    var id = document.getElementById('idtarea').innerHTML;
    var comentario = document.getElementById('comentario').value;
    var nota = document.getElementById('notaasignada').value;
    var carnet = document.getElementById('Carnet').innerHTML;

    fetch('/Frontend/TareaCalificada?'+new URLSearchParams({
        carnet:carnet,
        id:id,
        nota:nota
    }),{ method:'post'}).then(response => response.json()).then(item =>{ console.log(item)});

    fetch('/Frontend/activityupdate?'+new URLSearchParams({
        id:id,
        nota:nota,
        comentario:comentario
    }),{ method:'put'}).then(response => response.json()).then(item =>{ console.log(item)});



});
