var Observable = require("data/observable");
var ParserModule = require("./feed-parser");
var parser = new ParserModule.Parser();


var MainViewModel = (function(_super){
  __extends(MainViewModel,_super);
  function MainViewModel(){
    _super.call(this);
    this.getCategories();
  }

  Object.defineProperty(MainViewModel,"categories",{
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

  MainViewModel.prototype.getCategories = function () {
    var _this = this;
    parser.getCategories().then(function(categories){
      _this.categories = categories;
    });
  };

  return MainViewModel;
})(Observable.Observable);
exports.MainViewModel = MainViewModel;
