 
function navigatingTo(args){
  console.log("Loaded ");
  var page = args.object;
  page.bindingContext = page.navigationContext;
  console.log(page.navigationContext)
}
exports.navigatingTo = navigatingTo;
