var kiwi = require("kiwi")  
kiwi.require("NoSpec")

new NoSpec()  
  .define("message", __dirname + "/../lib/example", "Message")  
  .load(__dirname + "/specs")  
  .run()

