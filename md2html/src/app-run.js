//// lift-tools - md2html

//taking a markdown file as input (you can use my ICT221 lecture as an example
// manually add a slide/page for an interactive quiz and maybe another one for a YouTube video)

//running it as an interactive web-based presentation

//integrating some external interactive components, such as an MS Forms quiz.

import APP_Properties from './app-properties.js';

import LIFTS_md2html from './tool/lifts-md2html.js';

export default class APP_run {
  constructor() {

    this.properties = new APP_Properties();

    APP.running = false;

    console.log(APP)

  }

  /////  init
  init() {

    this.md2html = new LIFTS_md2html();
    this.md2html.init();

  }


//////////////////////////////////unit tests
  test() {

    this.md2html.test();
  }


}
