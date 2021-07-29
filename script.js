var tanya = true
while(tanya) {
    // pilihan player
    var p=prompt('pilih:Batu, Gunting ,Kertas \n Note utamakan huruf depanya capital')

    // pilihan A.I
    //mengaktifkan pilihan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'Gunting';
    }else if(comp >=0.34 && comp<0.67){
        comp = 'Batu';
    }else {
        comp = 'Kertas';
    }

    // menetukan rules
    var hasil =''
        if(p == comp){
            hasil='SERI!';
        }else if(p == 'batu' ||p =='Batu') {
            // if (comp == 'gunting'){
            //     hasil = 'MENANG!'

            // }else {
            //     hasil = 'KALAH'
            // }
            hasil =(comp == 'Gunting') ? 'MENANG!' : 'KALAH!';
        }else if(p == 'gunting' || p =='Gunting'){
            hasil = (comp == 'Kertas') ? 'MENANG!' : 'KALAH!';
        }else if(p == 'kertas' || p =='Kertas') {
            hasil = (comp == 'Batu') ? 'MENANG!' : 'KALAH!';
        }else {
            hasil = 'itu bukan batu gunting kertas / full capslock ';
        }
    //hasil
    alert('kamu pilih : ' + p + ' Jarvis pilih : ' + comp +'\n Hasil: ' + hasil );

    tanya = confirm('lagi?');
}

alert('Terimakasih sudah bermain bersama jarvis');