// тоглогчийн ээлжийг хадгалах хувьсагч
// нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

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
  diceDom.src = "dice-" + diceNumber + ".png"; // шооны зургыг буусан тооноос хамааруулж өөрчлөх
  // буусан тоо 1 - ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмж өгнө
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber; // 1-ээс ялгаатай тоо буулаа, буусан тоог тоглогчид нэмж өгнө
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
    switchToNextPlayer();
  }
});

// HOLD товчны ардах евэнт
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан оноог глобаль оноон дээр нь нэмж өгнө. өөрөөр хэлбэл var scores = [0,0];
  /* if (activePlayer === 0) {
    scores[0] = scores[0] + roundScore;
  } else {
    scores[1] = scores[1] + roundScore;
  }*/ //энэ if нөхцөлийн оронд доорхи ганц мөр кодыг ашигласнаар илүү хялбархан болж бна.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // дэлгэц дээр оноог нь өөрчилнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    // ялагч гэсэн текстийг нэрний оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
  // Тоглогчийн ээлжийг солино.
});

function switchToNextPlayer() {
  roundScore = 0; // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  document.getElementById("current-" + activePlayer).textContent = 0;
  // тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); // хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
  // улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // шоог түр алга болго
  diceDom.style.display = "none";
  alert("Тоглогчийн ээлж солигдлоо");
}
