var local = document.getElementById('texto-ferramenta');

function mais(valor){

    local.classList.add('layout-variavel');
    local.classList.remove('animacao');

    switch (valor){

        case 0:
        local.classList.remove('layout-variavel')

        local.innerHTML = "<div id='texto-ferramenta'><div class='ferramentas'><img src='img/html.png' alt='logo-html' onclick='mais(1)'><img src='img/css.png' alt='logo-css' onclick='mais(2)'><img src='img/js.png' alt='logo-js' onclick='mais(3)'><img src='img/bootstrap.png' alt='logo-bootstrap' onclick='mais(4)'></div></div>"
        break

        case 1: local.innerHTML = "<img src='img/html.png' alt='logo-html'><p>Tenho conhecimentos sobre a lingaugem de marcação HTML, podendo construir web sites eficientes com o uso de tags semânticas</p><button class='button btn-ferramenta' onclick='mais(0)'>Voltar</button>"
        break

        case 2:

            local.innerHTML = "<img src='img/css.png' alt='logo-css'><p>Possuo familiariade com a linguagem de estilização CSS para a montagem de layots diversificados e responsivos.</p><button class='button btn-ferramenta' onclick='mais(0)'>Voltar</button>"

        break

        case 3:

            local.innerHTML = "<img src='img/js.png' alt='logo-js'><p>Detenho conhecimentos em Java Script para a criação de página interativas e dinâmicas</p><button class='button btn-ferramenta' onclick='mais(0)'>Voltar</button>"

        break

        case 4:

            local.innerHTML = "<img src='img/bootstrap.png' alt='logo-bootstrap'><p>Sou capacitado na utilização da bibliotéca Bootstrap para o desenvolvimento de páginas web.</p><button class='button btn-ferramenta' onclick='mais(0)'>Voltar</button>"

        break
    }

    setTimeout(function() {
        local.classList.add('animacao');
    }, 10);

}

// function voltar(){


//     local.innerHTML = "<p>Olá mundo </p>"
// }