var elText = document.querySelector(".content-text");
var elImg = document.querySelector(".content-img");

var rec = new webkitSpeechRecognition();
rec.lang = "uz-UZ";
// rec.lang = "en-US";
rec.onerror = function (err) {
  // elSpan.textContent = "error";
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
    command === "daddy" ||
    command === "dad" ||
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

  // colors

  if (command === "black" || command === "qora") {
    elImg.style.backgroundColor = "black";
  } else if (command === "red" || command === "qizil") {
    elImg.style.backgroundColor = "red";
  } else if (command === "green" || command === "yashil") {
    elImg.style.backgroundColor = "green";
  } else if (command === "blue" || command === "ko'k") {
    elImg.style.backgroundColor = "blue";
  } else if (command === "yellow" || command === "sariq") {
    elImg.style.backgroundColor = "yellow";
  } else {
    elImg.style.backgroundColor = "white";
  }

  // numbers
  if (
    command === "1" ||
    command === "2" ||
    command === "3" ||
    command === "4" ||
    command === "5" ||
    command === "6" ||
    command === "7" ||
    command === "8" ||
    command === "9" ||
    command === "10"
  ) {
    elImg.textContent = command;
  } else {
    elImg.textContent = "";
  }
};

button.addEventListener("click", function () {
  rec.start();
});
