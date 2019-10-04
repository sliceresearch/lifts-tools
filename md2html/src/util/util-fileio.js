

import UTIL_FileURLLoader from './util-FileURLLoader.js';

export default class UTIL_fileio {
  constructor() {

  }

  get(filename) {
    console.log('fileio (get) ',filename)
    //  this.load(filename);

    this.urlLoader = new UTIL_FileURLLoader(this,filename);

  }

  check() {

    this.urlLoader.checkURLReady();

  }




}


/*
  async load(filename) {
      console.log('fileio (await) ',filename)
      const readme = await this.promiseReader(filename);
      console.log(readme);
  }


  promise(path) {
    return new Promise((resolve, reject) => {
      fs.readFileSync(path, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
        console.log(data)
      });
    });
  }*/


/*

    promiseReader (inputFile)  {

                const temporaryFileReader = new FileReader();

                const file = inputFile.files[0];

              console.log('promiseReader',temporaryFileReader,file);

                return new Promise((resolve, reject) => {
                  temporaryFileReader.onerror = () => {
                    temporaryFileReader.abort();
                    reject(new DOMException("Problem parsing input file."));
                  };

                  temporaryFileReader.onload = () => {
                    resolve(temporaryFileReader.result);
                    console.log(temporaryFileReader.result);
                  };


                      console.log('onchange');

                      console.log('onchange',file);
                    temporaryFileReader.readAsDataURL(file);

                //  temporaryFileReader.readAsText(inputFile);
                });


    }



  async read(file) {

      try {
        const fileContents = await this.readTextFile(file);
        console.log(fileContents);
      //  fileContentDiv.innerHTML = fileContents
      } catch (e) {
          console.log(e.message);
      //  fileContentDiv.innerHTML = e.message
      }

  }
*/
