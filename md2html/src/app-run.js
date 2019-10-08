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


    console.log(APP)

  }

  /////  init
  init() {
    this.md2html = new LIFTS_md2html();
    this.md2html.init();

    this.run();

    APP.running = true;

  }

  run() {
    setInterval(function() {
    step();
    }, 1000 / 29.97);
  }

  cycle() {

      this.md2html.cycle();

  }

//////////////////////////////////convert

  setPresentation(html) {

    let html_target = document.getElementById('lifts-html');
    //
    var makeIframe = document.createElement("iframe");
    makeIframe.setAttribute("id", "lifts-reveal");
    makeIframe.setAttribute("src", "reveal.html");
    makeIframe.setAttribute("scrolling", "no");
  //  makeIframe.style.border = "none";
//    makeIframe.style.left =  "0px";
  //  makeIframe.style.top = "-70px";
//    makeIframe.style.position = "absolute";

    console.log(makeIframe)

    html_target.appendChild(makeIframe);

  //  html_target.innerHTML = makeIframe.innerHTML
  }


//////////////////////////////////unit tests
  test() {
  //  this.md2html.test();

  }

  test_run() {

      console.log('LIFTS-tools (test-run)  ' + 'v:' + APP.properties.version)
        this.setPresentation();
        this.md2html.test();
  }

  test_html() {

    return '<div class="reveal"><div class="slides">	<section>Slide 1</section>	<section>Slide 2</section>	</div></div>'

  }
//  target = document.getElementById('targetDiv'),
//    converter = new showdown.Converter(),
//    html = converter.makeHtml(text);

//  target.innerHTML = html;



}

function test_run() {
  window.app.test_run();
}


function step() {
  if (APP.running) {
    window.app.cycle();
  }
}
