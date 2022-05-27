function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src','bebe-menino.jpg')
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src','jovem-menino.jpg')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src','adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src','bebe-menina.jpg')
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src','jovem-menina.jpg')
            } else if ( idade < 50) {
                //Adulto
                img.setAttribute('src','adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idosa.jpg')
            }

        }
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}