
window.APP={}

export default class APP_Properties {
  constructor() {

    APP = {};

    //////////////////////////////////////////// PRESET config

    const PRESETS = {
    /////////////////////////////// developer settings
      dev: {

        protocol: window.location.protocol,
        host: window.location.hostname,
        port: window.location.port,

        directory: {
          media: 'media'
        }

      },
    //////////////////////////////// production settings
      production: {

      }

    };

    APP.preset = PRESETS['dev'];

    /////////////////////////////////////////// APP properties
    APP.properties = {

    };

    /////////////////////////////////////////// APP settings
    APP.directory = {
      media: APP.preset.directory.media
    }

    APP.host = APP.preset.host;

  }
}
