'use strict';

var selector = document.location.pathname.startsWith('/m/') ? '.fgG0' : '.record';
var elements = document.querySelectorAll(selector);
if (elements.length) {
  var line = Array.prototype.filter.call(elements,function(record) {
    return record.textContent.indexOf('文章網址') !== -1;
  })[0].textContent;
  var matched = line.match(/(https*:\/\/[\w\.\/]+)/);
  if (matched) {
    window.location.href = matched[1];
  }
}
