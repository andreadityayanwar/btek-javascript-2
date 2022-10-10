const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Berapa jarak yang akan di tempuh : ',(answer) => {
    if (answer <= 2 )  {
      harga = 8000;
      console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(harga))

      biaya_layanan = 0.045 * harga
      console.log('Total Biaya Layanan : ' + new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(biaya_layanan))
      
      rl.close();
    }

    else if (answer >= 3) {
      harga = 8000;
      harga_diskon = 5000;
      harga_akhir = harga + (harga_diskon*(answer-2))
      console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(harga_akhir))

      biaya_layanan = 0.045 * harga_akhir
      console.log('Total Biaya Layanan : ' + new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(biaya_layanan))

      rl.close();
    }
} );
