/**
 * Vanilla js
 */

// Mora van {} ako zelimo global access kroz console
var objekat = null;

window.onload = function() {

  // objekat je instanca klase myElement

  var options = {
    // name: 'MojElement', // uniq
    position: { x: 45 , y : 25 },
    bgColor: 'black',
    color: 'lime',
    border: 'solid lime 1px',
    dimension: { width: 5 , height: 5 },
  };

  var testClick = function() {
    alert("COOL MAN")
  };

  objekat = new myElement(options, testClick);

  /*
  var elementsInBox = [];
  var r = 0, g = 0 , b = 0;

  for (var j = 0; j < 50 ; j++) {
    for (var i = 0; i < 50 ; i++) {
      r = j / 2 + 100
      g = r / 2
      b = g / 2
      var optionsBox = {
        name: "id" + j,
        position: { x: j* 2, y : i* 2},
        dimension: { width: 5 , height: 5 },
        bgColor: "rgb(" + r + " , " + g + " , " + b + " )",
        border: 'solid lime 1px',
      };
      elementsInBox.push(new myElement(optionsBox));

    }
  }
  */

  /** Kad prebacis nesto na `this.`
   *  onda je to postao property te klase i lako mozes pristupiti
   *  na sledeci nacin.
   */
   // console.log("Access objekt => ", objekat.dom.innerHTML)


  /**
   * I na kraju manipulacija
   */
  setTimeout(function() {
    objekat.position.translateByX(50)
    objekat.position.translateByY(50)
  }, 2000)

}
