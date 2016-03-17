var MainViewModel = require("./main-view-model");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new MainViewModel.MainViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
