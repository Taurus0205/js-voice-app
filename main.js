var elText = document.querySelector(".content-text");
var elImg = document.querySelector(".content-img");

var rec = new webkitSpeechRecognition();
// rec.lang = "uz-UZ";
rec.lang = "en-US";
rec.onerror = function (err) {
  elSpan.textContent = "error";
};

rec.onend = function () {
  console.log("End of speech");
};

rec.onresult = function (evt) {
  var command = evt.results[0][0].transcript;
  elText.textContent = command;

  if (command === "brother" || command === "uka" || command === "mustafo") {
    elImg.classList.add("mustafo");
    elImg.classList.remove(
      "afruza",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "ona",
      "togo"
    );
  } else if (command === "afruza" || command === "me" || command === "I") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "ona",
      "togo"
    );
    elImg.classList.add("afruza");
  } else if (command === "grandad" || command === "bobo") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "afruza",
      "buvi",
      "komp",
      "oila",
      "ona",
      "togo"
    );
    elImg.classList.add("bobo");
  } else if (command === "granny" || command === "buvi") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "afruza",
      "komp",
      "oila",
      "ona",
      "togo"
    );
    elImg.classList.add("buvi");
  } else if (
    command === "father" ||
    command === "dad" ||
    command === "daddy" ||
    command === "dada"
  ) {
    elImg.classList.remove(
      "mustafo",
      "afruza",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "ona",
      "togo"
    );
    elImg.classList.add("dada");
  } else if (command === "laptop" || command === "noutbuk") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "afruza",
      "oila",
      "ona",
      "togo"
    );
    elImg.classList.add("komp");
  } else if (command === "family" || command === "we" || command === "oila") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "afruza",
      "ona",
      "togo"
    );
    elImg.classList.add("oila");
  } else if (
    command === "mother" ||
    command === "mom" ||
    command === "mommy" ||
    command === "ona"
  ) {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "afruza",
      "togo"
    );
    elImg.classList.add("ona");
  } else if (command === "uncle" || command === "tog'o") {
    elImg.classList.remove(
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "ona",
      "afruza"
    );
    elImg.classList.add("togo");
  } else {
    elImg.classList.remove(
      "afruza",
      "mustafo",
      "dada",
      "bobo",
      "buvi",
      "komp",
      "oila",
      "ona",
      "togo"
    );
  }
};

button.addEventListener("click", function () {
  rec.start();
});
