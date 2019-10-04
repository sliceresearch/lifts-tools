export default class UTIL_FileURLLoader {
  constructor(p, u) {
    this.parent = p;
    this.id = p.id;

    this.init(u);
  }

  init(u) {
    this.URL = u;
    this.URLp = '';
    this.URLready = false;
    this.URLMediaready = false;
    this.URLTimeout = 4000;
    this.URLTimeoutCount = 0;
    this.URLTimer = Date.now();
  }

  //////////////////////////////////URL

  checkURLReady() {
    if (this.URLready == false) {
      if (this.URLTimer != 0) {
        if (this.URL != undefined) {
          if (this.URL != '') {
            //    if (this.media.agent.active == false) {
            if (this.checkURLTimeout() == true) {
              this.checkURL();
            }
            //    }
          }
        }
      }
    } else {
      ///check start

      if (this.URLMediaready == false) {
        if (this.URLTimer != 0) {
          if (this.URL != undefined) {
            if (this.URL != '') {
              //    if (this.media.agent.active == false) {
              if (this.checkURLTimeout() == true) {
                this.checkMediaURL();
              }
              //    }
            }
          }
        }
      }
    }
  }

  checkURL() {
    console.log(
      'util-fileURL (checkurl):' + this.id + ' ' + this.URL
    );

    this.URLTimer = 0;

    this.fileExistsCall(this.URL, this, this.fileExistsCallback);
  }

  checkURLCallback(status) {
    if (status == true) {
      console.log(
        'util-fileURL (checkurl-call-ok):' + this.id + ' ' + this.URL
      );
      this.setURL();
    } else {
      console.log(
        'util-fileURL (checkurl-call-timeout):' + this.id + ' ' + this.URL
      );
      this.setURLTimeout();
    }
  }

  checkURL2() {
    console.log(
      'util-fileURL (checkurl):' + this.id + ' ' + this.URL
    );

    const _me = this;
    if (this.fileExists(this.URL)) {
      _me.setURL();
    } else {
      _me.setURLTimeout();
    }
  }

  setURL() {
    console.log('util-fileURL (set):' + this.id + ' ' + this.URL);

    if (this.URL == '')
      console.log(
        'util-fileURL (set-null):' + this.id + ' ' + this.URL
      );

    if (this.URLready == false) {
      this.URLready = true;
      this.parent.setURLMedia();
      this.URLTimeoutCount = 0;
      this.URLTimer = Date.now();
    }
  }

  checkMediaURL() {
    console.log(
      'util-fileURL (checkmedia):' + this.id + ' ' + this.URL
    );

    const _me = this;
    if (this.parent.checkURLMedia(this.URL, this.URLp)) {
      _me.startURL();
    } else {
      _me.setURLTimeout();
    }
  }

  startURL() {
    console.log(
      'util-fileURL (startmedia):' + this.id + ' ' + this.URL
    );

    if (this.URLMediaready == false) {
      this.URLMediaready = true;
      this.parent.startURLMedia();
    }
  }

  setURLTimeout() {
    this.URLTimeoutCount++;
    this.URLTimer = Date.now();

    console.log(
      'util-fileURL (timer):' + this.id + ' ' + this.URLTimeoutCount
    );

    if (this.URLTimeoutCount > 3) {
      this.URLTimeoutCount = 0;
      this.URLTimer = 0;
      this.parent.failURLMedia();
    }
  }

  checkURLTimeout() {
    const elapsed = Date.now() - this.URLTimer;
    if (elapsed > this.URLTimeout) {
      this.URLTimer = 0;
      console.log(
        'util-fileURL (timeout):' + this.id + ' ' + elapsed
      );
      return true;
    }

    return false;
  }

  fileExistsCall(url, index, callback) {
    if (url == '') {
      callback(false, index);
    } else {
      var http = new XMLHttpRequest();

      http.onreadystatechange = function() {
        if (http.readyState == 4) {
          console.log(
            'autil: (exists-call):' +
              url +
              ' ' +
              ' ' +
              http.readyState +
              ' ' +
              http.status
          );
          if (http.status == 200 || http.status == 206) {
            callback(true, index);
          } else {
            callback(false, index);
          }
        }
      };
      http.open('GET', url, true);

      http.send(null);
    }
    console.log('autil: (exists):' + url + ' ' + http.status);
  }

  fileExistsCallback(status, obj) {
    //  var nobj = anetSystem.nodes[id];

    console.log('autil: (exists-callback):' + obj + ' ' + status);

    //  if (nobj != undefined) {
    obj.checkURLCallback(status);
    //  }
  }

  fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send(null);

    console.log('autil: (exists-test):' + url + ' ' + http.status);

    if (http.status == 404) {
      console.log(
        'autil: (exists-nup):' +
          url +
          ' ' +
          ' ' +
          http.readyState +
          ' ' +
          http.status
      );
      return false;
    }

    console.log(
      'autil: (exists-yep):' +
        url +
        ' ' +
        ' ' +
        http.readyState +
        ' ' +
        http.status
    );
    return true;
  }
}
