document.addEventListener("keyup", i=>{

    if (i.target.matches("#buscador")){

        if (i.key ==="Escape")i.target.value = ""

        document.querySelectorAll(".juego").forEach(juego =>{

            juego.textContent.toLowerCase().includes(i.target.value.toLowerCase())
            ?juego.classList.remove("filtro")
            :juego.classList.add("filtro")
        })

    }


})









