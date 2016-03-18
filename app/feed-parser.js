var httpService = require("./shared/httpservice");
var appSettings = require("application-settings");
var feedly = new httpService.HttpService();

var Parser = (function() {
  function Parser() {
    // this.categories();
    //this.profile();
  }

  Parser.prototype.profile = function() {
    var profile = feedly.get("profile").then(function(profile) {
      appSettings.setString("userid", profile.id);
      console.log("userid", profile.id);
	  return profile;
    });
	return profile;
  }

  Parser.prototype.allEntries = function(){
    var userid = appSettings.getString("userid");
    var allEntries = feedly.get("streams/user%2F" + userid + "%2Fcategory%2Fglobal.all/contents").then(function(e){
      console.log(JSON.stringify(e));
      return e;
    });
    return allEntries;
  }

  Parser.prototype.subscriptions = function() {
    var subscriptions = feedly.get("subscriptions").then(function(sub) {
      console.log(JSON.stringify(sub));
    });
    return subscriptions;
  }
  Parser.prototype.categories = function() {
    var subscriptions = feedly.get("categories");
    return subscriptions;
  }

  return Parser;
})();
exports.parser = new Parser();
