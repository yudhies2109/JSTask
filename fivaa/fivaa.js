function bilanganAwal(bilA){
  return (bilA-1)+""+(bilA-1);
}

function bilanganAkhir(bilAk){
  let nilaiAk = "";
  for(let i = 0; i < bilAk; i++){
      nilaiAk += ""+(bilAk+1);
  }
  return nilaiAk;
}

function fivaa(bilangan){
  let NilaiGa = "";
  for(let i = bilangan; i >= 1; i--){
    NilaiGa = bilanganAwal(i) + bilanganAkhir(i);
    console.log(NilaiGa);
  }
}

fivaa(5)

