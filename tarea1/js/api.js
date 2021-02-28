function consumirapi(){

    let nuevomsj = document.getElementById('caja-msj-nuevo').value + '\n';
    const historico = document.getElementById('caja-msjs-historicos').value + nuevomsj;
    document.getElementById('caja-msjs-historicos').value = historico;




    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then(Response => Response.json())
            .then(data => {
                let elemento = document.getElementById('caja-msj-nuevo');
                    elemento.innerHTML = `${data.created_at} >> ${data.value}`;
                    
                    console.log(data);
            })
  


}


