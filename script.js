var menu = document.getElementById('#Menu');

function traerMenu(){
    fetch('menu.json').then(re => res.json())
        .then( datos => {
            console.log(datos)
        })
}

traerMenu();