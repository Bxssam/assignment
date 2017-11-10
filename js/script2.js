var vnum = 4029
function upVote(){
    var up = document.getElementById('upv')
    up.style.color = 'lightgreen'
    up.style.fontSize = '22px'
    var dw = document.getElementById('dwv')
    dw.style.color = 'gray'
    dw.style.fontSize = '20px'
    var vote = document.getElementById('vnum')
    vote.innerHTML = vnum + 1
}
function dwVote(){
    var up = document.getElementById('upv')
    up.style.color = 'gray'
    up.style.fontSize = '20px'
    var dw = document.getElementById('dwv')
    dw.style.color = 'lightgreen'
    dw.style.fontSize = '22px'
    var vote = document.getElementById('vnum')
    vote.innerHTML = vnum - 1
}