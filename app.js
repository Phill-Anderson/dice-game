// тоглогчийн ээлжийг хадгалах хувьсагч
// нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var diceNumber = Math.floor(Math.random() * 6) + 1;
// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; // querySelector -оос илүү getElementBy функц нь хурдан ажиллана.

document.querySelector(".btn-roll").addEventListener("click", function() {
  // энэ нь anonymous функц бөгөөд үүнийг програмд ганц удаа ганц газар дуудахад  ашигладаг. Anonymous функц нь нэргүй функц юм.
  var diceNumber = Math.floor(Math.random() * 6) + 1; // 1-6 - ийн хооронд санамсаргүй тоо авах хувьсагч
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
