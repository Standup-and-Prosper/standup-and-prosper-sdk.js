const httpClient = require('./src/httpClient');
const StandupsApi = require('./src/standupsApi');

class StandupAndProsperClient {
  constructor(settings) {
    this.settings = settings || {};

    this.httpClient = new httpClient(this.settings.baseUrl, this.tokenProvider);
    this.standups = new StandupsApi(this.httpClient);
  }

  setToken(token) {
    this.httpClient.tokenProvider = () => token;
  }
}

module.exports = { StandupAndProsperClient };
