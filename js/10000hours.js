// js file

$("#result-btn").click(function () {
  const goalText = $("#goal-input").val();
  const timeText = $("#time-input").val();
  if (goalText == "" || timeText == "") {
    alert("입력되지 않았습니다.");
    return;
  }
  if (timeText > 24) {
    alert("잘못된 값입니다. 24이하의 값을 입력해주세요.");
    return;
  }
  $("#goal-output").text(goalText);
  $("#time-output").text(calcHour(timeText));
  $(".cont-loading-img").show();
  setTimeout(() => {
    $(".cont-loading-img").hide();
    $(".cont-result").show();
  }, 2500);
});

$("#share-btn").click(function () {
  alert("URL이 복사되었습니다.");
});

$("#train-btn").click(function () {
  $(".result-modal-box").show();
});

$("#close-btn").click(function () {
  $(".result-modal-box").hide();
});

function calcHour(num) {
  return Math.floor(10000 / num);
}
