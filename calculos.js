const gravidade = -9.81;

function pegarValorPeloId(id){
    var elemento = document.getElementById(id);
    return parseFloat(elemento.value);
}

function randianoParaGraus(radiano){
    return radiano * (Math.PI/180);
}

function calculaDelta(a,b,c){
    return b*b - 4*a*c
}

function bhaskara(delta, a, b){
    var x1 = (-b + Math.sqrt(delta))/(2*a);
    var x2 = (-b - Math.sqrt(delta))/(2*a);

    return Math.max(x1, x2);    
}

function definirHTMLdaResp(id, html){
    var elemento = document.getElementById(id);
    elemento.innerHTML = html;

}

function velYInicial(){
    var velInicial = pegarValorPeloId('VelInicial');
    var angulo = pegarValorPeloId("Angulo"); //valor digitado em radiano

    angulo = randianoParaGraus(angulo);

    var resultado = velInicial * Math.sin(angulo);

    definirHTMLdaResp('Resp_VelInicialY', `${resultado} m/s`);
    return resultado
}

function velXInicial(){
    var velinicial = pegarValorPeloId('VelInicial');
    var angulo = pegarValorPeloId("Angulo"); //valor digitado em radiano

    angulo = randianoParaGraus(angulo);

    var resultado =  velinicial * Math.cos(angulo);

    definirHTMLdaResp('Resp_VelInicialX', `${resultado} m/s`);

    return resultado
}

function alturaMaxima(){
    var alturaInicial = pegarValorPeloId('AlturaLancamento'); //c
    var velyInicial = velYInicial(); //b
    var meiaGravidade = gravidade/2; //a

    var delta = calculaDelta(meiaGravidade, velyInicial, alturaInicial);

    var resultado = (-delta)/(4*meiaGravidade);

    definirHTMLdaResp('Resp_AlturaMaxima', `${resultado} m`)

}

function tempoAlturaMaxima(){
    var velyInicial = velYInicial(); //b
    var meiaGravidade = gravidade/2; //a

    var resultado = (-velyInicial)/(2*meiaGravidade);

    definirHTMLdaResp('Resp_TempoAlturaMaxima', `${resultado} s`);

    return resultado
}

function distXAlturaMaxima(){
    var tempo = tempoAlturaMaxima();
    var velx = velXInicial();
    var resultado = velx * tempo;

    definirHTMLdaResp('Resp_DistXnaAlturaMaxima', `${resultado} m`);
}

function velYnoTempoT(){
    var tempo = pegarValorPeloId('TempoEstudado');
    var velYinicial = velYInicial();

    var resultado = velYinicial + gravidade * tempo

    definirHTMLdaResp('Resp_VelYNoTempoT', `${resultado} m/s`)

    return resultado
}

function alturanoTempoT(){
    var alturaInicial = pegarValorPeloId('AlturaLancamento'); //c
    var velY = velYnoTempoT(); //b
    var meiaGravidade = gravidade/2; //a
    var tempo = pegarValorPeloId('TempoEstudado');

    var resultado = (meiaGravidade*tempo*tempo)+(velY * tempo) + (alturaInicial);

    definirHTMLdaResp('Resp_AlturaNoTempoT', `${resultado} m`);
}

function distXnoTempoT(){
    var velX = velXInicial();
    var tempo = pegarValorPeloId('TempoEstudado');
    var resultado = velX * tempo;

    definirHTMLdaResp('Resp_DistxNoTempoT', `${resultado} m/s`)
}

function tempoChegouChao(){
    var alturaInicial = pegarValorPeloId('AlturaLancamento'); //c
    var velYinicial = velYInicial(); //b
    var meiaGravidade = gravidade/2; //a

    var delta = calculaDelta(meiaGravidade, velYinicial, alturaInicial);

    var resultado = bhaskara(delta, meiaGravidade, velYinicial);

    definirHTMLdaResp('Resp_TempoQueChegouNoChao', `${resultado} s`);

    return resultado
}

function velYnoChao(){
    var tempo = tempoChegouChao();
    var velYinicial = velYInicial();

    var resultado = velYinicial + gravidade * tempo;

    definirHTMLdaResp('Resp_VelYChao', `${resultado} m/s`);
}

function distNoChao(){
    var velX = velXInicial();
    var tempo = tempoChegouChao();

    var resultado = velX * tempo;

    definirHTMLdaResp('Resp_DistPercorridaChao', `${resultado} m`);
}

function principal(){
    velYInicial();
    velXInicial();
    alturaMaxima();
    tempoAlturaMaxima();
    distXAlturaMaxima();
    velYnoTempoT();
    alturanoTempoT();
    distXnoTempoT();
    tempoChegouChao();
    velYnoChao();
    distNoChao();
}

function kappa(){
    definirHTMLdaResp('Resp_VelInicialY', `${333}`);
}