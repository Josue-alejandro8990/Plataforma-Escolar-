
const creartareas = document.getElementById('btncrearactividades');

creartareas.addEventListener('click',() =>{
    console.log('estoy haciendo click');
        document.getElementById('frminiciocatedratico').style.display="none";
        document.getElementById('frmasignacionnotas').style.display="none";
        document.getElementById('frmasignaractividades').style.display="block";
});

const vertareas = document.getElementById('btnasignarnotas');
vertareas.addEventListener('click',() =>{
        document.getElementById('frminiciocatedratico').style.display="none";
        document.getElementById('frmasignaractividades').style.display="none";
        document.getElementById('frmasignacionnotas').style.display="none";
        consultartareas();
        document.getElementById('frmactividades').style.display="block";
});
const regresar = document.getElementById('btnregresar');

regresar.addEventListener('click',() =>{
        document.getElementById('frminiciocatedratico').style.display="block";
        document.getElementById('frmasignaractividades').style.display="none";
        document.getElementById('frmasignacionnotas').style.display="none";
});
const regresar2 = document.getElementById('btnregresar2');

regresar2.addEventListener('click',() =>{
        document.getElementById('frminiciocatedratico').style.display="block";
        document.getElementById('frmasignaractividades').style.display="none";
        document.getElementById('frmasignacionnotas').style.display="none";
});
