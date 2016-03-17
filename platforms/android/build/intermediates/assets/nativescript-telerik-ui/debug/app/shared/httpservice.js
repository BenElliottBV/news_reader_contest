var dialogs = require("ui/dialogs");
var appSettings = require("application-settings");

var HttpService = (function() {
  function HttpService() {

  }

  var setHeaders = function() {
    var headers = {
      "Content-Type": "application/json"
    };

    if (appSettings.hasKey("token")) {
      headers.Authorization = "OAuth " + appSettings.getString("token");
    }

    return headers;
  };

  var handleResponseErrors = function(response) {
    if (!response.ok) {
      console.log("Response Error: " + response.statusText);
    }
    return response;
  };

  var handleNetworkErrors = function(response) {
    console.log("Network Error: " + response);
    throw response;
  };

  var catchDebug = function(response) {
    console.log("catchDebug: " + response);
    throw response;
  };

  var handleNotAuthorizedError = function(response) {
    if (response.status === 405) {
      console.log("Logging out -- Not Authenticated");
      utils.logout();
    }
    return response;
  };



  var convertToJson = function(response,url) {
    var convert = true;
    var urls = [];

    urls.forEach(function(entry) {
      if (Url.indexOf(entry) > -1) {
        convert = false;
        return;
      }
    });
    // console.log("Convert to Json: " + convert);
    if (convert) {
      return response.json();
    }
    return response;
  };

  HttpService.prototype.urlBuilder = function(url) {
    var mainUrl = "http://cloud.feedly.com/v3/";
    console.log("Url: " + mainUrl + url);
    return mainUrl + url;
  };

  HttpService.prototype.request = function(url, method, body) {
    var promise = fetch(this.urlBuilder(url), {
        method: method,
        headers: setHeaders(),
        body: JSON.stringify(body)
      })
      .then(handleNotAuthorizedError)
      .then(handleResponseErrors)
      .then(convertToJson)
      .catch(handleNetworkErrors)
      .catch(catchDebug);

    return promise;
  };

  HttpService.prototype.get = function(url) {

    return this.request(url, "GET");
  };

  HttpService.prototype.post = function(url, data) {
    return this.request(url, "POST", data);
  };

  HttpService.prototype.put = function(url, data) {
    return this.request(url, "PUT", data);
  };

  return HttpService;
})();

exports.HttpService = HttpService;
exports.httpService = new HttpService();
