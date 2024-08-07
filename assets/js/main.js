function handleSubmit () {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const nomer = document.getElementById('nomer').value;
  const tanggal = document.getElementById('tanggal').value;
  const alamat = document.getElementById('alamat').value;
  const merk = document.getElementById('merk').value;
  const jumlahbeli = document.getElementById('jumlahbeli').value;
  const metode = document.getElementById('metode').value;
  const rekening = document.getElementById('rekening').value;
  const harga = document.getElementById('harga').value;  


  sessionStorage.setItem("NAMA", nama);
  sessionStorage.setItem("EMAIL", email);
  sessionStorage.setItem("NOMER", nomer);
  sessionStorage.setItem("TANGGAL", tanggal);
  sessionStorage.setItem("ALAMAT", alamat);
  sessionStorage.setItem("MERK", merk);
  sessionStorage.setItem("JUMLAHBELI", jumlahbeli);
  sessionStorage.setItem("METODE", metode);
  sessionStorage.setItem("REKENING", rekening);
  sessionStorage.setItem("HARGA", harga); 

  return;
}