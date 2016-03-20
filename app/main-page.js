var MainViewModel = require("./main-view-model");
var page;

function onNavigatingTo(args) {
  console.log("navigatingTo");
  page = args.object;
}

function loaded(args){
  console.log("loaded")
  reload();
}

function reload() {
  page.bindingContext = new MainViewModel.MainViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
exports.loaded = loaded;
exports.reload = reload;
