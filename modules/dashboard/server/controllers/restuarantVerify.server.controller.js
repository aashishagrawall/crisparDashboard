

var mongoose=require('mongoose');
var restuarantVerify=mongoose.model("RestuarantVerify");
var path = require('path')
var  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'))


exports.submitForm = function (req, res) {
  


var restuarantDetails=new restuarantVerify(req.body);
   restuarantDetails.userID=req.user._id;
  // Then save the user
  console.log(restuarantDetails,"huhuhu");

  restuarantDetails.save(function (err,data) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      // Remove sensitive data before login
      return res.json(data)
      
    }
  });
};


exports.getRestuarantStatus = function (req, res) {
  



  // Then save the user
  console.log(req.user);
  restuarantVerify.findOne({userID:req.user._id}).lean().exec(function(err,data){

 if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      // Remove sensitive data before login
      return res.json(data)
      
    }


})

};