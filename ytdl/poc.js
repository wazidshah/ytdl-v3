var link = 'https://www.youtube.com/watch?v=7wNb0pHyGuI';
var p;
var youtudedl = (function () {
  const URL = require('url').Url;
  var m_url = require('url'); //changed
  const api_key = 'AIzaSyC3KtXoh7UskFX6EEqyo7xSygr4mmByn9k';
  var https = require('https');

  const fs = require('fs');
  var ytdl = require("ytdl-core");

  const path = require('path');

  const readline = require('readline');





  function parseUrl(value) {
    /* 
    while binding with UI,take value from both html and api
    */

    web_url = new URL(value);
    m_web_url = m_url.parse(value, true);

    m_video = m_web_url.query.v;
    m_list = m_web_url.query.list;

    if (m_video && m_list) {
      console.log('its a video and playlist');
      parsePlaylist(m_list);
    } else if (m_video) {
      console.log('Just a video');

    } else if (m_list) {
      console.log('Its a playlist');
      parsePlaylist(m_list);
    }

  }




  function parsePlaylist(id, pageToken = null) {
    var result; //contains list of all vidos in playlist

    api_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    params = {
      'playlistId': id,
      'maxResults': 50,
      'pageToken': (pageToken == null) ? '' : pageToken,
      'part': 'snippet,contentDetails',
      'key': api_key

    };

    queryString = buildQueryString(api_url, params);

    var numOfReq = 1;
    getRequest(queryString).then((res) => {
      if (numOfReq > 1) {

        for (var myKey in res.items) {
          // console.log("Title:" + data.items[myKey].snippet.title);
          result.items.push(res.items[myKey]);
        }
        numOfReq++;

      } else {
        result = res;
      }

      //till all videos are retrived
      if (res.hasOwnProperty('nextPageToken')) {
        parsePlaylist(id, res.nextPageToken);
      }

      parsePlaylistInfo(result);
    }).catch((err) => {
      console.log(err);
    });

  }

  /* 
  takes url and paramter and buils query string for get request
  */

  function buildQueryString(url, params) {
    queryString = url + '?';

    for (var key in params) {
      queryString += key + '=' + params[key] + '&';
      queryString += (key == 'key') ? '' : '&';
    }

    return queryString;
  }


  function getRequest(api_url) {
    //console.log(api_url);
    var parsed;

    return new Promise((resolve, reject) => {
      https.get(api_url, function (res) {
          var body = ''; // Will contain the final response
          // Received data is a buffer.
          // Adding it to our body
          res.on('data', function (data) {
            body += data;

          });
          // After the response is completed, parse it and log it to the console
          res.on('end', function () {
            parsed = JSON.parse(body);
            resolve(parsed);
          });
        })
        // If any error has occured, log error to console
        .on('error', function (e) {
          reject(e.message);
          console.log("Got error: " + e.message);
        });
    });

  }

  function parsePlaylistInfo(data) {
    var filtered_data = {};
    var i = 0;
    for (var myKey in data.items) {
      console.log("Title:" + data.items[myKey].snippet.title);
      i++;
    }
  }

  function validateId(videoId) {
    return ytdl.validateId(videoId);
  }

  function getInfo(id) {
    var filepath = path.resolve(__dirname + '/json/', id + '.json');
    console.log(filepath);
    ytdl.getInfo(id, (err, info) => {
      if (err) throw err;
      console.log('title:', info.title);
      console.log('rating:', info.average_rating);
      console.log('uploaded by:', info.author.name);
      const json = JSON.stringify(info, null, 2)
        .replace(/(ip(?:=|%3D))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))/g, '$10.0.0.0');
      jsonToFile(filepath, json);
      extractFormats(JSON.parse(json));
    });
  }

  function jsonToFile(filepath, json) {
    fs.writeFile(filepath, json, {
      flag: "w"
    }, err => {
      if (err) throw err; //use this to display any errror durning getting info
      console.log('data written to file');
    });
  }

  function fileToJson(filepath) {
    /* 
    https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-object-into-server-memory
    incase we need to implement asycn file  reading operation
     */
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  }



  function extractFormats(data) {
    console.log(typeof (data));
    for (var myKey in data.formats) {
      console.log("Title:" + data.formats[myKey].quality);
      // i++;
    }

  }





  function downloadFromInfo(urll) {
    // console.log(typeof(url));
    // console.log(url);

    filter_option = {
      "itag": "43"

    };

    const video = ytdl(urll, {
      filter: function (format) {
        return format.itag === '43';
      }
    });


    const output = path.resolve(__dirname, 'video.mp4');


    let starttime;
    video.pipe(fs.createWriteStream(output));
    video.once('response', () => {
      starttime = Date.now();
    });


    video.on('progress', (chunkLength, downloaded, total) => {
      const floatDownloaded = downloaded / total;
      const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
      readline.cursorTo(process.stdout, 0);
      process.stdout.write(`${(floatDownloaded * 100).toFixed(2)}% downloaded`);
      process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
      process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
      process.stdout.write(`, estimated time left: ${(downloadedMinutes / floatDownloaded - downloadedMinutes).toFixed(2)}minutes `);
      readline.moveCursor(process.stdout, 0, -1);
    });
    video.on('end', () => {
      process.stdout.write('\n\n');
    });
  }
  return {
    parseUrl: parseUrl,
    validateId: validateId,
    getInfo: getInfo,
    fileToJson: fileToJson,
    downloadFromInfo: downloadFromInfo
  };

})();


// youtudedl.parseUrl(link);

// console.log(youtudedl.validateVideoId(link));
// youtudedl.getInfo('WD25UcRmiAk');
// a = youtudedl.fileToJson('/home/ns23/Documents/code/electron/vagrant-electron/poc/json/FdsMhX2OO3A.json');
// console.log(a);
console.log(youtudedl.downloadFromInfo(link));
