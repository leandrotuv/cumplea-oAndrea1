// // Abecedario
const espacioAbecedario=document.querySelector('.letras-abecedario');
const abc=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Palabra a averiguar
var palabra = "";
var guion;
//Imagen que va a cambiar
const divAhorcado = clase('.div-imagen-ahrcado');
const imagenAhorcado= clase('.imagen-ahorcado');
// Num aleatorio
var random;
// Elemento html de la palabra
var parrafoPalabra = clase("#palabra-a-adivinar");
// Contador de intentos
var intentos = clase('.intentos');
const intentosText=clase('.intentos-text');
var conteoAciertos=0;
var conteoVidas=5;
// Boton de reset
const nuevoAhorcado = clase('.nuevo-juego');
// Botones pista y volver
const btnPista = clase('.btn-pista');
const btnDesistir = clase('.volver-ahorcado');
var intentosFin = clase('.intentos-finjuego');
var spanPista = clase('.span-pista');
// Abecedario
var letrasAbecedario;
let botonLetra;
var botonLetraApretada;
var letra;


const palabras=[['Ramo','Accesorio de flores de la novia'],['Vestido','Prenda, normalmente blanca, que usa la novia'],['Invitados','Si la fiesta es grande, hay muchos'],['Musica','Nos hace bailar'],['Catering','Se encarga de preparar los alimentos'],['Zapatos','Nancy esta usando unos blancos y Kevin unos negros'],['Flores','Decoracion natural'],['Globos','Decoracion ovalada que se infla'],['Juez','Quien casa a los novios en el registro civil'],['Matrimonio','Los novios pasan a ser un...'],['Baliar','Hay música y nos ponemos a...'],['Maquillaje','Delineador, labial, base, sombras...'],['Peinado','Puede ser suelto, con trenzas, con rodete...'],['Velo','Accesorio para la cabeza de la novia'],['Anillos','Objeto simbolo de union y matrimonio'],['Recepcion','Primeros momentos de la fiesta'],['Bebidas','Gaseosas, vinos, cervezas'],['Esmoquin','Vestimenta del novio'],['Cuñados','Los hermanos de Kevin son los ... de Nancy'],['Propuesta','Cuando el novio ofrece el anillo a la novia'],['Ezequiel','Segundo nombre del novio'],['Arroz','Se le lanza a los novios en símbolo de abundancia'],['Moño','Accesorio bordó del novio'],['Souvenir','Al finalizar la fiesta, los invitados se llevan uno'],['Libreta','Los novios firman la ... de familia'],['Familia','Ahora los novios son una...'],['Tragos','Los adultos van a la barra a buscarlos toda la noche'],['Brindis','Tradición de chocar las copas'],['Vals','Primer baile tradicional del matrimonio'],['Katherine','Segundo nombre de la novia'],['Fotografo','Persona contratada para sacar fotos'],['Barman','Persona que prepara tragos en la barra'],['Enamorados','Los novios se casan porque están...']];

btnInicialJuegoAhorcado.onclick= function(){iniciarAhorcado(); sectionInicial.style.display='none'; sectionJuegoAhorcado.style.display='flex';}
nuevoAhorcado.onclick=function(){espacioAbecedario.innerHTML='',iniciarAhorcado()};


function generarAbecedario(){
    for(let i=0;i<abc.length;i++){
        botonLetra=document.createElement('button');
        botonLetra.setAttribute("id", "btn-letra");
        botonLetra.appendChild( document.createTextNode(abc[i]));
        espacioAbecedario.appendChild(botonLetra);
    }
}

function iniciarAhorcado(){
    generarAbecedario();
    parrafoPalabra.classList.remove('palabra-sola');
    letrasAbecedario = document.querySelectorAll('#btn-letra');
    conteoAciertos = 0;
    conteoVidas = 5;
    parrafoPalabra.innerHTML='';
    intentosText.textContent= ('Intentos restantes: ' + conteoVidas);
    imagenAhorcado.src='img/ahorcado5.png';
    for(i=0;i<letrasAbecedario.length;i++){
        letrasAbecedario[i].disabled=false;
    }
    
    // Para elegir un numero al azar segun la cantidad de palabras, redondeando hacia abajo para que no haya un numero de mas
    const numAzar= Math.floor(Math.random()*palabras.length);
    // La palabra ahora es un string del array, poniendo el indice segun el numero sorteado
    palabra=palabras[numAzar][0].toUpperCase();
    console.log(palabra);
    btnPista.disabled=true;
    spanPista.innerHTML = palabras[numAzar][1];
    console.log(palabras[numAzar][1]);
    spanPista.style.visibility='hidden';
    // Crear un guion por cada letra de la palabra
    for(let i = 0; i < palabra.length; i++){
        const espacioLetra = document.createElement('p');
        guion=document.createTextNode('_');
        espacioLetra.appendChild(guion);
        parrafoPalabra.appendChild(espacioLetra);
    }
    for (i=0; i<letrasAbecedario.length; i++){
        letrasAbecedario[i].onclick=letrasUsadas;
    }
}
//Dar pista y dehabilitar boton pista
btnPista.onclick=darPista;
function darPista(){
   spanPista.style.visibility='visible';
   btnPista.disabled=true;
}

// Funcion para saber que hacer cuando se toca un boton de letra
function letrasUsadas(event){
    
    botonLetraApretada=event.target;
    botonLetraApretada.disabled=true;
    letra=botonLetraApretada.innerHTML.toUpperCase();
    let acerto=false;
    for (i=0; i< palabra.length; i++){
        if (letra==palabra[i]){
            const guiones = document.querySelectorAll('#palabra-a-adivinar p');
            guiones[i].innerHTML=letra;
            conteoAciertos++;
            acerto=true;
        }
    }
    if (acerto==false){
        conteoVidas--;
        const source=`img/ahorcado${conteoVidas}.png`;
        imagenAhorcado.src=source;
        intentosText.textContent= ('Intentos restantes: ' + conteoVidas);
        if(conteoVidas==2){
            btnPista.disabled=false;
        }
    }
    if(conteoVidas==0){
        for (i=0; i< palabra.length; i++){
            const guiones = document.querySelectorAll('#palabra-a-adivinar p');
            guiones[i].innerHTML=palabra[i];
        }
        intentosText.textContent=('Fin del juego! La palabra era:');
        parrafoPalabra.classList.add('palabra-sola');
        gameOver();
    }else if(conteoAciertos==palabra.length){
        intentosText.textContent=('Felicitaciones, ganaste un punto!');
        imagenAhorcado.src='img/ahorcadoFin.png';
        gameOver();
        puntaje++;
    }
}
//Termino el juego, deshabilitar letras
function gameOver(){
    for(i=0;i<letrasAbecedario.length;i++){
        letrasAbecedario[i].disabled=true;
    }
    btnPista.disabled=true;
    spanPista.style.visibility='hidden';
}


// Desistir y volver al inicio
btnDesistir.onclick= desistir;
function desistir(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoAhorcado.style.display='none';
    conteoErrores=6;
    pPuntaje.innerHTML=`Puntaje: ${puntaje}`;
    espacioAbecedario.innerHTML='';
}