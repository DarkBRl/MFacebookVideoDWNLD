// ==UserScript==
// @name         MFacebookVideoDWNLD
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  Remove the attribute in the html video that prevents you from downloading video on m.facebook
// @author       Lucas Branco
// @match        https://m.facebook.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

setInterval(function() {
	'use strict';
	var video = document.getElementsByTagName("video");
	video[0].removeAttribute("controlsList");
}, 400)();