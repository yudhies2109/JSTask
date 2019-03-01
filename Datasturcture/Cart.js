class Cart{

  constructor() {
    this.storage = {}
  }

  tambahProduk(produk, kuantitas){
    if(this.storage[produk] == undefined){
      this.storage[produk] = kuantitas
    }else{
      this.storage[produk] += kuantitas
    }
  }

  tampilkanCart(){
    for(var key in this.storage){
      console.log(`${key} (${this.storage[key]})`)
     }
  }

  hapusProduk(produk){
    delete this.storage[produk]
  }

}

const keranjang = new Cart()
keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();

console.log(keranjang.storage)
