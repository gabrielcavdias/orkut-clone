let contadorRecados = 2
//
function escutar(){
    document.querySelectorAll('.apagar-recado').forEach(btn => btn.addEventListener('click', evt =>{
        evt.currentTarget.parentElement.parentElement.remove()
    }))
}
escutar()
document.querySelector('#enviar').addEventListener('click', () =>{
    let texto = document.querySelector('textarea[name="recado"]')
    let recado = document.createElement('div')
    //Cria a div do scrap em si.
    recado.classList.add('recado')
    //Cria a div que vai conter a checkbox e a imagem do autor.
    let fstDiv = document.createElement('div')
    //Cria checkbox, imagem e adiciona eles a primeira div(fstDiv).
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', 'deleta')
    contadorRecados+=1
    checkbox.setAttribute('id', `deleta_${contadorRecados}`)
    fstDiv.appendChild(checkbox)
    let img = document.createElement('img')
    img.setAttribute('src', 'img/perfil.jpg')
    img.setAttribute('alt', 'Yusuke kkkk foda')
    fstDiv.appendChild(img)
    //Cria a div que vai conter o autor e o texto.
    let secDiv = document.createElement('div')
    //Cria âncora pro autor do recado, inclui o texto do recado e adiciona eles a segunda div(secDiv).
    let autor = document.createElement('a')
    autor.setAttribute('href', 'perfil.html')
    autor.innerText = 'Fulano Urameshi'
    secDiv.appendChild(autor)
    let span = document.createElement('span')
    span.innerText = ':'
    secDiv.appendChild(span)
    let paragrafoRecado = document.createElement('p')
    paragrafoRecado.innerHTML = texto.value
    let containerParagrafo = document.createElement('div')
    containerParagrafo.appendChild(paragrafoRecado)
    secDiv.appendChild(containerParagrafo)
    //Cria a div que vai conter a data e o botão de apagar.
    let trdDiv = document.createElement('div')
    //Cria paragráfo com data.
    let data = document.createElement('p')
    let innerdata = document.createElement('span')
    let diadehj = new Date() 
    innerdata.innerText = `${diadehj.getDate()} ${NumtoMes(diadehj.getMonth()+1)} (Segundos atrás)`
    data.appendChild(innerdata)
    trdDiv.appendChild(data)
    //Cria botão de apagar.
    let btn = document.createElement('button')
    btn.classList.add('apagar-recado')
    btn.classList.add('btnpdr')
    btn.innerText = 'apagar'
    trdDiv.appendChild(btn)
    //Adiciona as três divs na div Recado
    recado.appendChild(fstDiv)
    recado.appendChild(secDiv)
    recado.appendChild(trdDiv)
    //Adiciona recado à recados
    texto.value = ''
    document.querySelector('.recados-recebidos').appendChild(recado)
    escutar()
})
function NumtoMes(num){
    switch(num){
        case 1:
            return "jan"
        case 2:
            return "fev"
        case 3:
            return "mar"
        case 4:
            return "abr"
        case 5:
            return "mai"
        case 6:
            return "jun"
        case 7:
            return "jul"
        case 8:
            return "ago"
        case 9:
            return "set"
        case 10:
            return "out"
        case 11:
            return "nov"
        case 12:
            return "dez"
    }
}