var Observable = require("data/observable");
var frameModule = require("ui/frame");
var webViewModule = require("ui/web-view");


var ArticleViewModel = (function(_super) {
  __extends(ArticleViewModel, _super);

  function ArticleViewModel(article) {
    _super.call(this);
    this.article = article;
    this.article.summary.content = this.article.summary.content.replace(/<img[^>]*>/g, "");
    this.showWebView = false;
    this.url = "~/test.html";
  }

  Object.defineProperty(ArticleViewModel.prototype, "article", {
    get: function() {
      return this._article;
    },
    set: function(value) {
      if (this._article != value) {
        this._article = value;
        this.notifyPropertyChange("article", value);
      }
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(ArticleViewModel.prototype, "showWebView", {
    get: function() {
      return this._showWebView;
    },
    set: function(value) {
      if (this._showWebView != value) {
        this._showWebView = value;
        this.notifyPropertyChange("showWebView", value);
      }
    },
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(ArticleViewModel.prototype, "url", {
    get: function() {
      return this._url;
    },
    set: function(value) {
      if (this._url != value) {
        this._url = value;
        this.notifyPropertyChange("url", value);
      }
    },
    enumerable: true,
    configurable: true
  });

  ArticleViewModel.prototype.readArticle = function(args) {
    this.url = this.article.alternate[0].href;
    this.showWebView = true;
    // var topmost = frameModule.topmost();
    // var page = topmost.currentPage;
    // var webView = new webViewModule.WebView();
    // webView.on(webViewModule.WebView.loadFinishedEvent, function(args) {
    //   var message;
    //   if (!args.error) {
    //     message = "WebView finished loading " + args.url;
    //   } else {
    //     message = "Error loading " + args.url + ": " + args.error;
    //   }
    // });
    // console.log(this.article.alternate[0].href);
    // webView.url = this.article.alternate[0].href;
    // page.content = webView;
  };


  return ArticleViewModel;
})(Observable.Observable);
exports.ArticleViewModel = ArticleViewModel;
