/*console.log("I m connected to the html")*/

const colorChanger = ()=>{
    var red = document.getElementById('red').value   
    var green = document.getElementById('green').value    
    var blue = document.getElementById('blue').value  
    var color = 'rgb('+red+','+green+','+blue+')'
    document.body.style.backgroundColor= color
    document.getElementById('box').value = color
}
document.getElementById('red').addEventListener('input',colorChanger)
document.getElementById('green').addEventListener('input',colorChanger)
document.getElementById('blue').addEventListener('input',colorChanger)