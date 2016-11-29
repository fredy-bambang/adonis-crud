const View = use('View')

class ViewUrl {

  * handle (request, response, next) {
    View.global('url', request.url())
    View.global('baseUrl', 'http://' + request.headers().host)

    yield next;
  } 

}

module.exports = ViewUrl