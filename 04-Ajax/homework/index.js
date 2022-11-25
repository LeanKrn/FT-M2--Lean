$("#boton").click( () => {
    $.get("http://localhost:5000/amigos", (amigos) => {
        const Lista = $('#lista');
        Lista.empty();
        amigos.forEach(amigo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `ID: ${amigo.id} Nombre: ${amigo.name}` 
            listItem.id = amigo.id;
            Lista.append(listItem);            
        });
    });
});

$("#search").click(function(){
    let buscado = $("#inputSearch")[0]
    $.get("http://localhost:5000/amigos/"+ buscado.value ,function(data){
        let busqueda=document.createElement("p")
        busqueda.textContent=data.name
        $("#liston").append(busqueda)
    })
})


$("#delete").click(() => {
    const searchInput = $('#inputDelete')
    
    $.ajax({
        url: `http://localhost:5000/amigos/${searchInput.val()}`,
        method: 'DELETE',
        sucess: () => {
            $('#sucess').text(`Amigo ${searchInput.val()} eliminado con exito`)
        },
    });
});