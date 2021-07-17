var elSpan = document.querySelector(".span");

var rec = new webkitSpeechRecognition();
rec.lang = "en-US";
rec.onerror = function (err) {
  console.log(err, "error");
};

console.log(rec);

rec.onend = function () {
  console.log("End of speech");
};

rec.onresult = function (evt) {
  var command = evt.results[0][0].transcript;
  elSpan.textContent = command;

  console.log(command);
};

button.addEventListener("click", function () {
  rec.start();
});
