var application = require("application");
var appSettings = require("application-settings");
var moment = require("moment");

application.resources = {
  formatDate: function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }
}

console.log("App Started!");
appSettings.setString("token","YOURAPIKEYHERE");
console.log(appSettings.getString("token"));
application.start({ moduleName: "main-page" });
