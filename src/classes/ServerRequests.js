export default class ServerRequests {
  constructor() {
    this.authority = 'http://35.205.148.41';
    // this.authority = '10.0.0.31';
    this.port = '1617';
  }
  getRequestUrl(request, query = '') {
    const path = this.getPathByRequest(request);
    let url = this.authority + ':' + this.port + '/' + path;
    if (query)
      query.map(item => {
        url += '/' + item;
      });
    console.log({url, query});
    return url;
  }
  getPathByRequest(request) {
    switch (request) {
      case CONNECT_SERVER:
        return '';
      case FETCH_VOCABULARY:
        return 'getVocabulary';
      case INSERT_WORD:
        return 'insertWord';
      default:
        return '';
    }
  }
}

const requestsTypes = {
  CONNECT_SERVER: 'CONNECT_SERVER',
  FETCH_VOCABULARY: 'FETCH_VOCABULARY',
  INSERT_WORD: 'INSERT_WORD',
};

export const {CONNECT_SERVER, FETCH_VOCABULARY, INSERT_WORD} = requestsTypes;
