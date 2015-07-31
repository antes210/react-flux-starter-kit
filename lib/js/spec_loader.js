var fs = require('fs');
var root = require(process.argv[2]+'/app-root-path');
var walk = function(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}
  var arr = walk(root+"/specs");
  var str="";
  for(var i=0;i<arr.length;i++){
    if(arr[i].indexOf('main.js')<0){
      str += 'require(\''+arr[i]+'\')\n';
    }
  }
  fs.writeFile(root+"/specs/main.js",str);

