'use strict';

var elements = document.querySelectorAll('.record');
if (elements.length) {
  var line = Array.prototype.filter.call(elements,function(record) {
    return record.textContent.indexOf('文章網址') !== -1;
  })[0].textContent;
  var matched = line.match(/(https*:\/\/[\w\.\/]+)/);
  if (matched) {
    window.location.href = matched[1];
  }
}
if (window.location.hostname == "webptt.com") {
  var search = window.location.search.split("n=");
  if (search.length > 1) {
    window.location.href = "https://www.ptt.cc/" + search[1];
  }
}
