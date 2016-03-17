var Observable = require("data/observable");
var feed = require("./feed-parser");
var observableArray = require("data/observable-array");

var MainViewModel = (function(_super){
  __extends(MainViewModel,_super);
  function MainViewModel(){
    _super.call(this);
    this.getCategories();
    this.getEntries();
  }

  Object.defineProperty(MainViewModel.prototype,"categories",{
    get: function() {
      return this._categories;
    },
    set: function(value) {
      if (this._categories != value) {
        this._categories = value;
        this.notifyPropertyChange("categories", value);
      }
    },
    enumerable: true,
    configurable: true
  })

  Object.defineProperty(MainViewModel.prototype,"entries",{
    get: function() {
      return this._entries;
    },
    set: function(value) {
      if (this._entries != value) {
        this._entries = value;
        this.notifyPropertyChange("entries", value);
      }
    },
    enumerable: true,
    configurable: true
  })

  MainViewModel.prototype.getCategories = function () {
    var _this = this;
    feed.parser.categories().then(function(categories){
      console.log("setting Categories")

      var cats = new observableArray.ObservableArray();
      categories.forEach(function(c){
        cats.push(c);
      })
      _this.categories = cats;
    })
  };

  MainViewModel.prototype.getEntries = function () {
    var _this = this;
    feed.parser.allEntries().then(function(entries){
      console.log("setting Entries")

      var ent = new observableArray.ObservableArray();
      entries.items.forEach(function(e){
        console.log(e);
        ent.push(e);
      })
      _this.entries = ent;
    })
  };

  return MainViewModel;
})(Observable.Observable);
exports.MainViewModel = MainViewModel;
