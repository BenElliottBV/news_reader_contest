var application = require("application");
var appSettings = require("application-settings");
console.log("App Started!");
appSettings.setString("token","--INSERT API TOKEN HERE --");
console.log(appSettings.getString("token"));
application.start({ moduleName: "main-page" });
