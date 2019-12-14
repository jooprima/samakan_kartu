let jumlahKartu = 5;

function buatAngka() {
    let angkaBerurut = [];

    for(let i = 1; i <= jumlahKartu; i++){
        angkaBerurut.push(i,i);
    }

    return angkaBerurut;
    
}

function acakAngka(angkaBerurut) {

    let angkaAcak = angkaBerurut.sort(function(){
        return 0.5 - Math.random();
    });

    return angkaAcak;
    
}

function persiapkanKartu(angkaAcak){

    let str = '';

    angkaAcak.forEach(function(i){
        str += '<div class="kartu">'+
                    '<div class="belakang">' + i + '</div>'+
                    '<div class="Depan">jooDev</div>' + 
                '</div>';
    });

    $('#game').append(str);
}

$(document).ready(function(){

    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    persiapkanKartu(angkaAcak);

    // console.log('ini adalah angka berurut : ' + angkaBerurut);
    console.log('ini adalah angka acak : ' + angkaAcak);
    
})