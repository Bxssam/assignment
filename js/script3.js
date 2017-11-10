function validate(){
    var txe = document.getElementById('txe')
    var ure = document.getElementById('ure')
    var tfe = document.getElementById('tfe')
    
    if(txe.value =='' && (ure.value =='' || tfe.value =='')){
        document.getElementById('sp').style.display = 'block'
        document.getElementById('tmbf').style.display = 'block'
        document.getElementById('utmf').style.display = 'block'
        return false;
    }
    if(ure.value =='' || tfe.value ==''){

        document.getElementById('sp').style.display = 'block'
        document.getElementById('utmf').style.display = 'block'
        document.getElementById('tmbf').style.display = 'none'
        return false;
    }
    if(txe.value ==''){
        document.getElementById('sp').style.display = 'block'
        document.getElementById('tmbf').style.display = 'block'
        document.getElementById('utmf').style.display = 'none'
        return false;
    }
    
}