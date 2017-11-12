var vnum = 0
var upv = 0
var down = 0

window.onload = function () {
    vnum = parseInt(document.getElementById('vnum').textContent)
}
function upVote(){
    if(upv == 0){
    var up = document.getElementById('upv')
    up.style.color = 'lightgreen'
    up.style.fontSize = '22px'
    var dw = document.getElementById('dwv')
    dw.style.color = 'gray'
    dw.style.fontSize = '20px'
    var vote = document.getElementById('vnum')
    vote.innerHTML = vnum + 1
    upv = 1
    down = 0
    }
}
function dwVote(){
    if(down == 0){
    var up = document.getElementById('upv')
    up.style.color = 'gray'
    up.style.fontSize = '20px'
    var dw = document.getElementById('dwv')
    dw.style.color = 'lightgreen'
    dw.style.fontSize = '22px'
    var vote = document.getElementById('vnum')
    vote.innerHTML = vnum - 1
    upv = 0
    down = 1
    }
}