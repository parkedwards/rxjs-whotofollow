// https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
// http://jsfiddle.net/staltz/8jFJH/48/

let requestStream = Rx.Observable.just('https://api.github.com/users');

requestStream.subscribe((requestUrl) => {
  let responseStream = Rx.Observable.create((observer) => {
    $.getJSON(requestUrl)
      .done((response) => {
        observer.onNext(response);
      })
      .fail((jqXHR, status, error) => {
        observer.onError(error);
      })
      .always(() => {
        observer.onCompleted();
      });
  });

  responseStream.subscribe((response) => {

  });

})