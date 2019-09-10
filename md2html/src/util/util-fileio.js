
export default class UTIL_fileio {
  constructor() {

    this.read_file_text();

  }

  get(filename) {

    

  }

  read(file) {

    try {
      const fileContents = await this.readTextFile(file)
      fileContentDiv.innerHTML = fileContents
    } catch (e) {
      fileContentDiv.innerHTML = e.message
    }

  }

  read_file_text() {

    const this.readTextFile = (inputFile) => {
      const temporaryFileReader = new FileReader();

      return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
          temporaryFileReader.abort();
          reject(new DOMException("Problem parsing input file."));
        };

        temporaryFileReader.onload = () => {
          resolve(temporaryFileReader.result);
        };
        temporaryFileReader.readAsText(inputFile);
      });
    };

  }


}
