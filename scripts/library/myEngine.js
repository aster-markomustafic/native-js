
var registerAutoUpdate = [];

function myEngine() {

  registerAutoUpdate.forEach(function(item) {
    item.position.update()
    item.update()
  })

  setTimeout(function() { myEngine() }, 20)

}

// run
myEngine()
