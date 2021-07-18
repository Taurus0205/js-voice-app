var elSpan = document.querySelector(".span");
var elImg = document.querySelector(".content-img");

var rec = new webkitSpeechRecognition();
rec.lang = "uz-UZ";
rec.onerror = function (err) {
  elSpan.textContent = "error";
};

rec.onend = function () {
  console.log("End of speech");
};

rec.onresult = function (evt) {
  var command = evt.results[0][0].transcript;
  elSpan.textContent = command;

  if (command === "mustafo") {
    elImg.classList.add("mustafo");
  } else if (command === "afruza") {
    elImg.classList.add("afruza");
  }
};

button.addEventListener("click", function () {
  rec.start();
});
