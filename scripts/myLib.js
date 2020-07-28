/**
 * Vanilla js
 */

window.onload = function() {

  // objekat je instanca klase myElement

  var options = {
    bgColor: 'black',
    color: 'lime'
  };

  var objekat = new myElement(options)

  /** Kad prebacis nesto na `this.`
   *  onda je to postao property te klase i lako mozes pristupiti
   *  na sledeci nacin.
   */
   console.log("Access objekt => ", objekat.dom.innerHTML)
}
