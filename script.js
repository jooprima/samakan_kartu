let jumlahKartu = 5;
let kartuPertama = kartuKedua = 0;

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
        str += '<div class="kartu" nilai="'+i+'">'+
                    '<div class="belakang">' + i + '</div>'+
                    '<div class="Depan">jooDev</div>' + 
                '</div>';
    });

    $('#game').append(str);
}

function pengendali(){
    $('.kartu').on('click',function(){
        $(this).addClass('buka');

        if (kartuPertama == 0) {
            kartuPertama = $(this).attr('nilai');
            console.log(kartuPertama);
            
        }else{
            kartuKedua = $(this).attr('nilai');

            if (kartuPertama == kartuKedua) {
                $('.buka').addClass('betul');
                $('.betul').removeClass('buka');
                kartuPertama = kartuKedua = 0;
            }else{
                kartuPertama = kartuKedua = 0;
                $(this).one('transitionend',function(){
                    $('.kartu').removeClass('buka');
                });
            }
        }
    })
}

$(document).ready(function(){

    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    persiapkanKartu(angkaAcak);

    pengendali();

    // console.log('ini adalah angka berurut : ' + angkaBerurut);
    // console.log('ini adalah angka acak : ' + angkaAcak);
    
})