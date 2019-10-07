//// lift-tools - reveal

//taking a markdown file as input (you can use my ICT221 lecture as an example
// manually add a slide/page for an interactive quiz and maybe another one for a YouTube video)

//running it as an interactive web-based presentation

//integrating some external interactive components, such as an MS Forms quiz.

import UTIL_fileio from '../util/util-fileio.js';

export default class LIFTS_Reveal {
  constructor() {

    this.dir_media = APP.directory.media;


  }

  /////  init
  init() {
    this.init_reveal();

    this.fileio = new UTIL_fileio(this);

    console.log('LIFTS-reveal (init)  ' + 'v:' + APP.properties.version + '  dir:'+this.dir_media)

  }

  cycle() {
    this.fileio.cycle();
  }

  call(op,arg) {
        if (op=='fileio_text')
          this.convert_text_md(arg);
  }
//////////////////////////////////reveal

  init_reveal() {



  }

  convert_text_md(text) {

      let html = this.reveal(text);
      console.log('LIFTS-reveal (html)  ' + html)
  }

//////////////////////////////////unit tests
  test() {
    console.log('LIFTS-reveal (tests)  ' + 'v:' + APP.properties.version + '  dir:'+this.dir_media)
    this.test_reveal();
  }

  test_reveal() {
    var test = this.mdfile2html('ict221','ICT221_Week01_Java_Intro')
    console.log('LIFTS-reveal (test-reveal)  ' + test)
  }

  ////////////////////////////////////reveal

  mdfile2html(directory,filename) {
    var fn = this.media_file_name_get(directory,filename);
    this.media_file_read(fn);
  }

  reveal(mdtext) {
    return this.converter2HTML.makeHtml(mdtext);
  }

//////////////////////////////////////////////media file
  media_file_read(filename) {
    this.fileio.read(filename);
  }

  media_file_set_text(text) {

  }

  media_file_name_get(directory,filename) {
    let fn = this.dir_media + '/' + directory + '/' + filename + ".md";
    return fn;
  }


}
