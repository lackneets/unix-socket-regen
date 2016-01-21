module.exports = function(){

  var fs = require('fs');
  var path = require('path');
  if(Number.isNaN(parseInt(process.env.PORT)) && fs.existsSync(process.env.PORT)){
    fs.unlinkSync(process.env.PORT);
  }
  if(Number.isNaN(parseInt(process.env.PORT))){
    var listener = function(event, filename){
      if(filename == path.basename(process.env.PORT) && event == 'rename' && fs.existsSync(process.env.PORT)){
        fs.chmodSync(process.env.PORT, '0666');
      }    
    }
    fs.watch(path.dirname(process.env.PORT), listener);
  }
  
}
