//Girilen bir pozitif sayının 0 a kadar olan sayıların toplamını kendini yenileyen fonksiyon ile ifadesi

let n = Number(
  prompt(
    " girdiğiniz pozitif sayıdan 0 a kadar olan sayıların toplamını bulmak için bir sayı giriniz"
  )
);

const toplama = (n) => {
  if (n == 0) return 0;
  else return n + toplama(n - 1);
};

let sonuc = toplama(n);
console.log(sonuc);
