String.prototype.toUnderscore = function(){
  return this.charAt(0).toLowerCase() + this.substring(1).replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
};
console.log(process.argv[2].toUnderscore());