/**
 * Vanilla js
 */

// Mora van {} ako zelimo global access kroz console
var objekat = null;

window.onload = function() {

  // objekat je instanca klase myElement

  var options = {
    name: 'MojElement', // uniq
    bgColor: 'black',
    color: 'lime'
  };

  objekat = new myElement(options)

  /** Kad prebacis nesto na `this.`
   *  onda je to postao property te klase i lako mozes pristupiti
   *  na sledeci nacin.
   */
   console.log("Access objekt => ", objekat.dom.innerHTML)


  /**
   * I na kraju manipulacija
   */
  setTimeout(function() {
    objekat.position.translateByX(50)
    objekat.position.translateByY(50)
  }, 2000)

}
