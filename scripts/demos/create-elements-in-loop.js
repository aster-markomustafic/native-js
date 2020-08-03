/**
 * Vanilla js
 */

var objekat = null;

window.onload = function() {

  var elementsInBox = [];
  var r = 0, g = 0 , b = 0;

  for (var j = 0; j < 10 ; j++) {
    for (var i = 0; i < 10 ; i++) {
      r = i * 5
      g = i + j * 5
      b = i + i * 5 + j * 5
      var optionsBox = {
        name: "id" + j,
        content: "VOODOO PEOPLE",
        position: { x: j * 9.989, y : i * 9.97},
        dimension: { width: 10 , height: 10 },
        bgColor: "rgb(" + r + " , " + g * 2 + " , " + b + " )",
        border: 'solid lime 1px',
      };
      elementsInBox.push(new myElement(optionsBox));

    }
  }


}
