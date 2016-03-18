var application = require("application");
var appSettings = require("application-settings");
var moment = require("moment");

application.resources = {
  formatDate: function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }
}

console.log("App Started!");
appSettings.setString("token","AyGEUqiL_Dr0_lK_HoikKiDYxz-IwwLxcq-lhvkQSZkiCux9kygfkLENtdhR3Ge1UQQKOw1e-PtLCNtLlQJuKUZ9dg4aKpizS2G8_gTfvWObT5eZezQLHsOhSibO1WLr1fk7ozoIM81lcyjNxjmrd79Li92jFyt1k9vZiuM0DllIJX6j-nUq7P3YhDpPkWr3NIjhEcj-MLi7QLRx1kD7L5IDztuL5rg:feedlydev");
console.log(appSettings.getString("token"));
application.start({ moduleName: "main-page" });
