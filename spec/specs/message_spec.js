describe("Message", function() {  
  describe("sayHello", function() {  
    it("should return hello + name", function() {  
      var libInstance = new Message("Woyld")  
      expect(libInstance.sayHello()).toEqual("Hola, Woyld!")  
    })  
  })  
})