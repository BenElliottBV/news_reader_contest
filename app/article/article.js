var articleList;
var viewModel;
var selectedIndex;
var frameModule = require("ui/frame");

function navigatingTo(args) {
  console.log("Loaded ");
  var page = args.object;
  articleList = page.navigationContext.articleList;
  selectedIndex = page.navigationContext.selectedIndex;
  viewModel = articleList.entries.getItem(page.navigationContext.selectedIndex);
  page.bindingContext = viewModel;
  console.log(page.navigationContext);
}

function previous() {
  navigate(-1);
}

function next() {
  navigate(1);
}

function navigate(direction) {
  console.log(selectedIndex);
  if (selectedIndex+direction <0 || selectedIndex+direction > 19) return;

  var context = {
    articleList: articleList,
    selectedIndex: selectedIndex + direction
  }; //this.entries.getItem(args.index)
  var animation = direction===1?"slideLeft":"slideRight";
  console.log(animation);
  var topmost = frameModule.topmost();
  topmost.navigate({
    moduleName: "article/article",
    context: context,
    animated: true,
    transition: {
        name: animation,
        duration: 200,
        curve: "easeIn"
    },
    backstackVisible: false

  });

}

exports.navigatingTo = navigatingTo;
exports.previous = previous;
exports.next = next;
