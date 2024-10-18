function verificar() {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fAno.value.length == 0 || fAno.value > anoAtual) {
        window.alert('[ERRO] - Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = anoAtual - Number(fAno.value);
        
        // Verificando o sexo escolhido pelo usuário
        let genero = '';
        if (fsex[0].checked) {
            genero = "Homem";
        }else {
            genero = "Mulher";
        }
        res.innerHTML = `Você é um ${genero} com ${idade} anos.`
    };
};