//// lift-tools - md2html


//taking a markdown file as input (you can use my ICT221 lecture as an example
// manually add a slide/page for an interactive quiz and maybe another one for a YouTube video)

//running it as an interactive web-based presentation

//integrating some external interactive components, such as an MS Forms quiz.


import APP_Properties from './app-properties.js';

import LIFTS_MD2html from './app/lifts-md2html.js';

window.lifts_md2html = new LIFTS_MD2html();

lifts_md2html.init();
