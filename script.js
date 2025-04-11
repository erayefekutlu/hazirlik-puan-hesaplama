document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.querySelector(
    "footer p"
  ).innerHTML = `&copy; ${currentYear} Hazırlık Puan Hesaplama. Tüm hakları saklıdır.`;
});

document
  .getElementById("puanHesaplamaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Quiz notlarını al
    const quiz1 = parseFloat(document.getElementById("quiz1").value);
    const quiz2 = parseFloat(document.getElementById("quiz2").value);
    const quiz3 = parseFloat(document.getElementById("quiz3").value);
    const homework = parseFloat(document.getElementById("homework").value);

    // Vize ve final notlarını al
    const midterm = parseFloat(document.getElementById("midterm").value);
    const final = parseFloat(document.getElementById("final").value);

    // Hazırlık atlama sınav notlarını al
    const test = parseFloat(document.getElementById("test").value);
    const writing = parseFloat(document.getElementById("writing").value);
    const speaking = parseFloat(document.getElementById("speaking").value);

    // İlk bölüm hesaplamaları
    const quiz1Hesaplama = quiz1 * 0.1;
    const quiz2Hesaplama = quiz2 * 0.075;
    const quiz3Hesaplama = quiz3 * 0.075;
    const homeworkHesaplama = homework * 0.05;
    const midtermHesaplama = midterm * 0.3;
    const finalHesaplama = final * 0.4;

    // İlk bölüm toplamı
    const ilkBolumToplam =
      quiz1Hesaplama +
      quiz2Hesaplama +
      quiz3Hesaplama +
      homeworkHesaplama +
      midtermHesaplama +
      finalHesaplama;

    // İlk bölüm %35'i
    const ilkBolumYuzde = ilkBolumToplam * 0.35;

    // Hazırlık atlama sınav hesaplamaları
    const testHesaplama = test * 0.25;
    const writingHesaplama = writing * 0.25;
    const speakingHesaplama = speaking * 0.15;

    // Hazırlık atlama toplamı
    const hazirlikToplam = testHesaplama + writingHesaplama + speakingHesaplama;

    // Final toplam puan
    const toplamPuan = ilkBolumYuzde + hazirlikToplam;

    // Sonuçları göster
    document.getElementById("quiz1Sonuc").textContent =
      quiz1Hesaplama.toFixed(3);
    document.getElementById("quiz2Sonuc").textContent =
      quiz2Hesaplama.toFixed(3);
    document.getElementById("quiz3Sonuc").textContent =
      quiz3Hesaplama.toFixed(3);
    document.getElementById("homeworkSonuc").textContent =
      homeworkHesaplama.toFixed(3);
    document.getElementById("midtermSonuc").textContent =
      midtermHesaplama.toFixed(3);
    document.getElementById("finalSonuc").textContent =
      finalHesaplama.toFixed(3);
    document.getElementById("ilkBolumToplam").textContent =
      ilkBolumToplam.toFixed(3);
    document.getElementById("ilkBolumYuzde").textContent =
      ilkBolumYuzde.toFixed(3);

    document.getElementById("testSonuc").textContent = testHesaplama.toFixed(3);
    document.getElementById("writingSonuc").textContent =
      writingHesaplama.toFixed(3);
    document.getElementById("speakingSonuc").textContent =
      speakingHesaplama.toFixed(3);
    document.getElementById("hazirlikToplam").textContent =
      hazirlikToplam.toFixed(3);

    document.getElementById("toplamPuan").textContent = toplamPuan.toFixed(3);
  });
