'use strict';

var selector = document.location.pathname.startsWith('/m/') ? '.fgG0' : '.record';
var elements = document.querySelectorAll(selector);
if (elements.length) {
  var line = Array.prototype.filter.call(elements, function (record) {
    return record.textContent.indexOf('文章網址') !== -1;
  })[0].textContent;
  var matched = line.match(/(https*:\/\/[\w\.\/-]+)/);
  if (matched) {
    window.location.href = matched[1];
  }
}

if (window.location.hostname == "btrend.amassly.com") {
  var selector = '.f2';
  var elements = document.querySelectorAll(selector);
  if (elements.length) {
    var line = Array.prototype.filter.call(elements, function (record) {
      return record.textContent.indexOf('文章網址') !== -1;
    })[0].textContent;
    var matched = line.match(/(https*:\/\/[\w\.\/-]+)/);
    if (matched) {
      window.location.href = matched[1];
    }
  }
}

if (window.location.hostname == "ptt.jimpop.org") {
  var selector = '.col-lg-10.col-lg-offset-2';
  var elements = document.querySelectorAll(selector);
  if (elements.length) {
    var line = Array.prototype.filter.call(elements, function (record) {
      return record.textContent.indexOf('連結') !== -1;
    })[0].innerHTML;
    var matched = line.match(/(https*:\/\/[\w\.\/-]+)/);
    if (matched) {
      window.location.href = matched[1];
    }
  }
}

if (window.location.hostname == "www.laiptt.online") {
  var selector = '.post_body>a';
  var elements = document.querySelectorAll(selector);
  if (elements.length) {
    var line = Array.prototype.filter.call(elements, function (record) {
      var target = record.nextElementSibling.nextElementSibling;
      if (target == null || target.name == null) {
        return false;
      }
      return record.nextElementSibling.nextElementSibling.name === 'push-1';
    })[0].innerHTML;
    if (line) {
      window.location.href = line;
    }
  }
}

if (window.location.hostname == "webptt.com") {
  var search = window.location.search.split("n=");
  if (search.length > 1) {
    window.location.href = "https://www.ptt.cc/" + search[1];
  }
}

if (window.location.hostname == "www.ucptt.com") {
  var regexp = /\/article\/([^\/]+)\/(.+)\/(.+)$/;
  if (regexp.test(window.location.pathname)) {
    window.location.href = window.location.pathname.replace(regexp, "https://www.ptt.cc/bbs/$1/M.$2.A.$3.html");
  }
}

if (window.location.hostname == "moptt.tw") {
  var regexp = /\/p\/([^\.]+)\.(.+)/;
  if (regexp.test(window.location.pathname)) {
    window.location.href = window.location.pathname.replace(regexp, "https://www.ptt.cc/bbs/$1/$2.html");
  }
}

if (window.location.hostname == "pttgossip.com") {
  var regexp = /.*\/(([^\.\/]+\.){3}[^\.\/]+)\.html/;
  if (regexp.test(window.location.pathname)) {
    window.location.href = window.location.href.replace(regexp, 'https://www.ptt.cc/bbs/Gossiping/$1.html');
  }
}

var caseBoardWithDots = [
  '94ptt.com',
  'ptt.av01.online',
  'ptt.social',
  'ptt.techroomage.com',
  'pttent.com',
  'pttgame.com',
  'pttlocal.com',
  'pttman.com',
  'pttsport.com',
  'sexptt.tk',
  'webptt.xyz',
  'www.pttdata.com'
];

if (caseBoardWithDots.indexOf(window.location.hostname) > -1) {
  var regexp = /.*\/([^\/]+)\/(([^\.\/]+\.){3}[^\.\/]+)($|\.html$)/;
  if (regexp.test(window.location.href)) {
    window.location.href = window.location.href.replace(regexp, 'https://www.ptt.cc/bbs/$1/$2.html');
  }
}

var caseBoardWithHyphen = [
  'pttweb.tw',
  'pttread.com',
  'ptthito.com'
];

if (caseBoardWithHyphen.indexOf(window.location.hostname) > -1) {
  var regexp = /.*\/([^\/]+)\/(([^-\/]+-){3}[^\.\/]+)($|\.html$|\/$)/;
  if (regexp.test(window.location.href)) {
    var board = window.location.pathname.replace(regexp, '$1');
    var postId = window.location.pathname.replace(regexp, '$2').replace(/-/g, '.').toUpperCase();
    window.location.href = 'https://www.ptt.cc/bbs/' + board + '/' + postId + '.html';
  }
}