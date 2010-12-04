

should = require('should')
module.exports ={
  'prints messages with same syntax as DSL': function (test){
    try{
      (0).should.eql(1)
    } catch (err){
      err.message.should.include.string('should eql')
    } 
  }
}
