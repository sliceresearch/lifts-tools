//// lift-tools - md2html

//taking a markdown file as input (you can use my ICT221 lecture as an example
// manually add a slide/page for an interactive quiz and maybe another one for a YouTube video)

//running it as an interactive web-based presentation

//integrating some external interactive components, such as an MS Forms quiz.

import UTIL_fileio from '../util/util-fileio.js';

export default class LIFTS_MD2html {
  constructor() {

    this.dir_media = APP.directory.media;

  }

  /////  init
  init() {
    console.log('init');
    this.init_converter();

    this.fileio = new UTIL_fileio();

  }

  ///  global settings for showdown
  init_converter() {
      this.converter2HTML = new showdown.Converter();

  }

//////////////////////////////////unit tests
  test() {

    console.log('test');

    this.testmd();

  }

  testmd() {

    var test = this.mdfile2html('ict221','ICT221_Week01_Java_Intro')
    console.log(test);

  }

  ////////////////////////////////////md2html

  mdfile2html(filename) {
    let mdtext = this.get_media_file(filename);
    return this.md2html(mdtext);
  }

  md2html(mdtext) {
    return this.converter2HTML.makeHtml(mdtext);
  }

//////////////////////////////////////////////

  get_media_file(directory,filename) {

    let fn = this.dir_media + '/' + filename;
    return this.fileio.get(fn);
  }


  fileloader() {



  }

}
