
window.APP={}

export default class APP_Properties {
  constructor() {
    /////////////////////////////////////////// app config
    APP = {

      ///////////////////////////////////////////////////////////basic
      language: 'en', //cn

      ////////////////////////////////////////////////// production settings
      protocolProduction: window.location.protocol,
      hostProduction: window.location.hostname,
      portProduction: window.location.port,

      objDirProduction: 'data/objects/',
      markerDirProduction: 'data/marker/',

      ////////////////////////////////////////////////// default development settings
      protocolDevelopment: window.location.protocol,
      hostDevelopment: window.location.hostname,
      portDevelopment: window.location.port,

      objDirDevelopment: 'assets/model/',
      markerDirDevelopment: 'assets/marker/',

    };

    APP.properties = {

    };

    APP.hostname = window.document.hostname;

  }
}
