
/**
 * Tradicional JS CLASS ECMA5 & <
 * This file containe group of class related to the myElement main class
 */

/**
 * Child class or subClass
 * @name Position
 * @param currentX number
 * @param currentY number
*/
function Position(curentX, curentY) {

  /**
   * Local var only in this { space }
   * but global for inside of Position
   */
  var root = this;

  /**
   * Kontrolni flag
   * zamrznuti sve
   */
  this.FREEZ = false;

  /**
   * Ova funkcija je prazna ona je namenjena
   * za override ...
   */
  this.onTargetReached = function () {
     console.log("%c" + "Object reached target position.", "background: #333; color: lime");
  };

  // Parameters
  // Parametri neophodni za matematicku operaciju `translacija`
  this.x = curentX;
  this.y = curentY;
  this.targetX = curentX;
  this.targetY = curentY;
  this.velX = 0;
  this.velY = 0;
  this.thrust = 1;

  // Za sada samo fiktivno
  this.type = "NORMAL";

  // Flag koji kazuje dali smo u pokretu ili ne
  this.IN_MOVE = true;

  // namesti brzinu kretanja
  this.setSpeed = function (num_) {

    if (typeof num_ === "number") {
      this.thrust = num_;
    } else {
      console.warn("SYS : warning for method 'POSITION.SET_SPEED'  Desciption : arguments (w , h ) must be type of number.");
    }

  };

  this.translateByX = function (x_) {
    console.log("%c" + "Test translateByX !", "background: #333; color: lime");
    this.IN_MOVE = true;
    this.targetX = x_;
  };

  this.translateByY = function (y_) {
    this.IN_MOVE = true;
    this.targetY = y_;
  };

  this.translate = function (x_, y_) {
    this.IN_MOVE = true;
    this.targetX = x_;
    this.targetY = y_;
  };

  this.setPosition = function (x_, y_) {
    if (this.type == "NORMAL") {
      this.targetX = x_;
      this.targetY = y_;
      this.x = x_;
      this.y = y_;
      this.IN_MOVE = false;
    }
  }

  /**
   * TEk nakon pozivanja update
   * dobicemo nove pozicije x i y
   */
  this.update = function () {

    var tx = this.targetX - this.x,
    ty = this.targetY - this.y,
    dist = Math.sqrt(tx * tx + ty * ty),
    rad = Math.atan2(ty, tx),
    angle = rad / Math.PI * 180;
    this.velX = (tx / dist) * this.thrust;
    this.velY = (ty / dist) * this.thrust;

    if (this.IN_MOVE == true) {

      if (dist > this.thrust) {

        this.x += this.velX;
        this.y += this.velY;

      } else {

        this.x = this.targetX;
        this.y = this.targetY;
        this.IN_MOVE = false;
        ROOT.onTargetReached();

      }
    }

  }

  this.getX = function () {
    return window.innerWidth / 100 * this.x;
  }

  this.getY = function () {
    return window.innerHeight / 100 * this.y;
  }

  this.getXPixel = function () {
    return (window.innerWidth / 100 * this.x) + "px";
  }

  this.getYPixel = function () {
    return (window.innerHeight / 100 * this.y) + "px";
  }

}


 /**
  * Main class
  */
 function myElement () {

  this.type = "abosolute";
  this.position = new Position(100, 100);

  console.info("Class myElement is constructed with type => ", this.type)
  console.info(" position => ", this.position.x)

 }
