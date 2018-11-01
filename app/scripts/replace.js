'use strict';

(function (document) {
  replaceImages();
  setInterval(function () {
    console.log('walking...');
    replaceImages();
  }, 4000);

  function replaceImages() {
    var images = document.getElementsByTagName('img'),
        length = images.length;

    for (var i = 0; i < length; i++) {
      if (images[i].name == 'met') {
        continue;
      }
      setRandomMetImage(images[i]);
    }
  }

  function getMetImage(id) {
    var baseurl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
    var url = baseurl + id;
    fetch(url).then(function (data) {
      return data.json();
    }).then(function (object) {
      console.log(object);
      return object;
    });
  }

  function setRandomMetImage(image) {
    var randomID = String(parseInt(Math.random() * 500000));
    var baseurl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
    var url = baseurl + randomID;
    fetch(url).then(function (data) {
      return data.json();
    }).then(function (object) {
      console.log(object);
      if (object.primaryImage) {
        image.src = object.primaryImage;
        image.srcset = '';
        image.name = 'met';
      } else {
        console.log('trying again...');
        setRandomMetImage(image);
      }
    });
  }
})(document);