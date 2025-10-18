function whatsapp() {
  var name = document.getElementById(".name").value;
  var mobile = document.getElementById(".mobile").value;
  var location = document.getElementById(".location").value;
  var pickup = document.getElementById(".pickup").value;
  var drop = document.getElementById(".drop").value;
  var destination = document.getElementById(".destination").value;
  var notes = document.getElementById(".notes").value;

  var whatsappurl =
    "https://wa.me/919653531811?text=" +
    "Name :* " +
    name +
    "%0a" +
    "Mobile NO.* : " +
    mobile +
    "%0a" +
    "Pick up : *" +
    location +
    "%0a" +
    "Pick UP date And Time : *" +
    pickup +
    "%0a" +
    "Drop date and time :* " +
    drop +
    "%0a" +
    "Drop at : *" +
    destination +
    "%0a" +
    "Additional msg :* " +
    notes +
    "%0a%0a";

  window.open(whatsappurl, "_blank").focus();
}
