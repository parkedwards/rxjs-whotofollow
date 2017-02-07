let requestStream = Rx.Observable.just('https://api.github.com/users');

requestStream.subscrite((requestUrl) => {
  jQuery.getJson(requestUrl, (resopnseData) => {

  });
})