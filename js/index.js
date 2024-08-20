// -------------------------------------------------
// variaveis
// -------------------------------------------------

const canvas = document.getElementById("canvas1")
let ctx = canvas.getContext("2d")
let map = new Image()


// importando a imagem do mapa -----------------------
map.src = "img/map-e8.jpg"


// canvas.nextElementSibling.appendChild(map)

// -------------------------------------------------
// funções
// -------------------------------------------------

 async function render () {
    ctx.clearRect( 0, 0, canvas.width, canvas.height)
    // ctx.beginPath();
    // ctx.strokeStyle = "blue";
    // ctx.moveTo(20, 20);
    // ctx.lineTo(200, 20);
    // ctx.stroke();
    
    // ctx.beginPath();
    // ctx.strokeStyle = "green";
    // ctx.moveTo(20, 20);
    // ctx.lineTo(120, 120);
    // ctx.stroke();
    await ctx.drawImage(map, 0, 0)
}



// invocando a função render -----------------------
ctx.onload = render()