var httpService = require("./shared/httpservice");
var feedly = new httpService.HttpService();

var Parser = (function() {
  function Parser(){

  }

  Parser.prototype.subscriptions = function(){
    var subscriptions = feedly.get("subscriptions").then(function(sub){
      console.log(JSON.stringify(sub));
    });
    return subscriptions;
  }
  Parser.prototype.categories = function(){
    var subscriptions = feedly.get("categories").then(function(categories){
      console.log(JSON.stringify(categories));
      return categories;
    });
    return subscriptions;
  }

  return Parser;
})();
exports.Parser=Parser;
