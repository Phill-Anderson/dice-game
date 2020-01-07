// тоглоом дууссан эсэхийг шалгах хувьсагч
var isNewGame;
// тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer;
// тоглогчдын глобаль оноог хадгалах хувьсагч
var scores;
// тоглогчын нэг ээлжинд авах оноог хадгалах хувьсагч
var roundScore;

var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  isNewGame = true;
  // нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0; // хэрэв энд var activePlayer = 0 ; гэж бичвэл activePlayer глобаль хувьсагчийн хуулбар нь болж санах ойд бичигдэх юм. өөрөөр хэлбэл глобалаар зарласан activePlayer ба энэ функц дотор var гэж зарласан activePlayer хувьсагчууд нь хоорондоо ялгаатай хувьсагчууд болох юм.
  // тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  // Програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none"; // querySelector -оос илүү getElementBy функц нь хурдан ажиллана.
  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
document.querySelector(".btn-roll").addEventListener("click", function() {
  // энэ нь anonymous функц бөгөөд үүнийг програмд ганц удаа ганц газар дуудахад  ашигладаг. Anonymous функц нь нэргүй функц юм.
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1; // 1-6 - ийн хооронд санамсаргүй тоо авах хувьсагч
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png"; // шооны зургыг буусан тооноос хамааруулж өөрчлөх
    // буусан тоо 1 - ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмж өгнө
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber; // 1-ээс ялгаатай тоо буулаа, буусан тоог тоглогчид нэмж өгнө
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
      switchToNextPlayer();
    }
  } else {
    alert("тоглоом дууссан байна.");
  }
});

// HOLD товчны ардах евэнт
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
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
      isNewGame = false;
      // ялагч гэсэн текстийг нэрний оронд гаргана.
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлжийг солино.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчыг дарж шинээр эхлэнэ");
  }
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

document.querySelector(".btn-new").addEventListener("click", initGame);
