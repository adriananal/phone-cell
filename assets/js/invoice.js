var dt = new Date();
document.getElementById("tanggal1").innerHTML = dt.toLocaleDateString();

window.addEventListener('load', () => {

    
    const nama = sessionStorage.getItem('NAMA');
    const email = sessionStorage.getItem('EMAIL');
    const nomer = sessionStorage.getItem('NOMER');
    const tanggal = sessionStorage.getItem('TANGGAL');
    const alamat = sessionStorage.getItem('ALAMAT');
    const merk = sessionStorage.getItem('MERK');
    const jumlahbeli = sessionStorage.getItem('JUMLAHBELI');
    const metode = sessionStorage.getItem('METODE');
    const rekening = sessionStorage.getItem('REKENING');    
    const harga = sessionStorage.getItem('HARGA');    

    
    document.getElementById('nama-invoice').innerHTML = nama;
    document.getElementById('email-invoice').innerHTML = email;
    document.getElementById('nomer-invoice').innerHTML = nomer;
    document.getElementById('tanggal-invoice').innerHTML = tanggal;
    document.getElementById('alamat-invoice').innerHTML = alamat;
    document.getElementById('merk-invoice').innerHTML = merk;
    document.getElementById('jumlahbeli-invoice').innerHTML = jumlahbeli;
    document.getElementById('metode-invoice').innerHTML = metode;
    document.getElementById('rekening-invoice').innerHTML = rekening;    
    document.getElementById('harga-invoice').innerHTML = harga;
})