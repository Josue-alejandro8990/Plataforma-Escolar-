
const analisis = document.getElementById('btnanalisis');

analisis.addEventListener('click',() =>{
    console.log('estoy dando click');
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
});

const arquitectura = document.getElementById('btnarquitectura');

arquitectura.addEventListener('click',() =>{
    console.log('estoy dando click');
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
});

const desarrollo = document.getElementById('btndesarrollo');

desarrollo.addEventListener('click',() =>{
    console.log('estoy dando click');
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
});
const redes = document.getElementById('btnredes');

redes.addEventListener('click',() =>{
    console.log('estoy dando click');
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
});
const etica = document.getElementById('btnetica');

etica.addEventListener('click',() =>{
    console.log('estoy dando click');
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
});
const cursos = document.getElementById('btncursos');
cursos.addEventListener('click',() =>{
    console.log('estoy dando click');
    document.getElementById('frmcursos').style.display="block";
        document.getElementById('frminicio').style.display="none";
        document.getElementById('frmactividades').style.display="none";
        document.getElementById('frmnotas').style.display="none";
    
});
const actividades = document.getElementById('btnactividades');
actividades.addEventListener('click',() =>{
    console.log('estoy dando click');
    document.getElementById('frmactividades').style.display="block";
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="none";
        document.getElementById('frmnotas').style.display="none";
        consultartareas();

});
const consultartareas=()=>{
    var div = document.getElementById('divactividad');
        fetch('/Frontend/obtenertareas',{method:'get'}).then(response => response.json()).then(item =>{
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

    const consultarnotas=()=>{
        var div = document.getElementById('divnotas');
        var carnet = document.getElementById('carnet').value;
            fetch('/Frontend/obtenernotas?'+new URLSearchParams({carnet:carnet}),
            {method:'get'}).then(response => response.json()).then(data =>{
                     div.innerHTML=`<div id="${carnet}" class="input-contenedor">
                    <i class="fas fa-book"></i>
                    <p>Curso :${data.id_curso}</p>
                    <p>Primer Parcial :${data.pparcial}</p>
                    <p>Segundo Parcial : ${data.sparcial}</p>
                    <p>Examen Final :${data.efinal}</p>
                    <p>Actividades :${data.actividades}</p>
                  </div>`;    
            });
        }

const notas = document.getElementById('btnnotas');
notas.addEventListener('click',() =>{
    console.log('estoy dando click');
    document.getElementById('frmnotas').style.display="block";
        document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="none";
        document.getElementById('frmactividades').style.display="none";
        consultarnotas();
});

const inicio = document.getElementById('btninicio');
inicio.addEventListener('click',() =>{
    console.log('estoy dando click');
    document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
        document.getElementById('frmactividades').style.display="none";
        document.getElementById('frmnotas').style.display="none";
    
});
const inicio2 = document.getElementById('btninicio2');
inicio2.addEventListener('click',() =>{
    console.log('estoy dando click');
    document.getElementById('frmcursos').style.display="none";
        document.getElementById('frminicio').style.display="block";
        document.getElementById('frmactividades').style.display="none";
        document.getElementById('frmnotas').style.display="none";
    
});