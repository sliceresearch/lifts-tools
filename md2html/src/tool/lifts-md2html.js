//// lift-tools - md2html

//taking a markdown file as input (you can use my ICT221 lecture as an example
// manually add a slide/page for an interactive quiz and maybe another one for a YouTube video)

//running it as an interactive web-based presentation

//integrating some external interactive components, such as an MS Forms quiz.

import UTIL_fileio from '../util/util-fileio.js';

import html_parser from 'node-html-parser'

export default class LIFTS_MD2html {
  constructor() {

    this.dir_media = APP.directory.media;

  }

  /////  init
  init() {
    this.init_converter();

    this.fileio = new UTIL_fileio(this);

    console.log('LIFTS-md2html (init)  ' + 'v:' + APP.properties.version + '  dir:'+this.dir_media)

  }

  cycle() {
    this.fileio.cycle();
  }

  call(op,arg) {
        if (op=='fileio_text')
          this.publish(arg);
  }

  publish(arg) {
    let html = this.convert_text_md(arg);
    let html_target = document.getElementById('lifts-reveal');

    var html_target_inner = (html_target.contentDocument)
               ? html_target.contentDocument
               : html_target.contentWindow.document;

    let html_tag = html_target_inner.getElementById('lifts-slides');
    html = this.html_parse(html);


  //  html_tag.appendChild(html);
     html_tag.innerHTML=html;

     console.log(html_tag,html)
  }

//////////////////////////////////showdown
  ///  global settings for showdown
  init_converter() {
      this.converter2HTML = new showdown.Converter();
  }

  convert_text_md(text) {
      let html = this.md2html(text);
      return html;
  }

//////////////////////////////////html parser
/////// create specific HTML rules here - expand into class later

  html_parse(html) {
    const root = html_parser.parse(html);
    var nnodes = this.process_nodes(root)
    return nnodes;
  }

  process_nodes(html_nodes) {

   var nroot = html_parser.parse();
   var nodes = html_nodes.childNodes;
   var section_node = this.add_section_node(nroot);

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];

      if (this.isvalid_node(node)) {
        if (this.isheader_node(node)) {
          nroot.appendChild(section_node);
          section_node = this.add_section_node(nroot);
        } else {

        }
        section_node.appendChild(node);
      }

    }

    nroot.appendChild(section_node);

  //  console.log('nroot',nroot);

    return nroot;
  }

  isvalid_node(node) {
  /////// HTMLNode only - top level
      if (node.nodeType==1) {
        return true;
      }
      return false;
  }

  isvalid_node_tag(node) {

      if (node.tagName=='h1' || node.tagName=='h2' || node.tagName=='h3' || node.tagName=='h4')
          return true;

      return false;
  }

  add_section_node(root) {

    let section = html_parser.parse();
    section.tagName='section'
  //  console.log('section',section)
    return section;
  }


  process_node(node) {

    if (this.isheader_node(node)) {

    } else if (true) {


    }

  }


  isheader_node(node) {
    if (node.tagName=='h1' || node.tagName=='h2' || node.tagName=='h3' || node.tagName=='h4')
      return true;
    return false;
  }




//////////////////////////////////unit tests
  test() {
    console.log('LIFTS-md2html (tests)  ' + 'v:' + APP.properties.version + '  dir:'+this.dir_media)
    this.test_md2html();
  }

  test_md2html() {
    var test = this.mdfile2html('ict221','ICT221_Week01_Java_Intro')
    console.log('LIFTS-md2html (test-md2html)  ' + test)
  }

  ////////////////////////////////////md2html

  mdfile2html(directory,filename) {
    var fn = this.media_file_name_get(directory,filename);
    this.media_file_read(fn);
  }

  md2html(mdtext) {
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
