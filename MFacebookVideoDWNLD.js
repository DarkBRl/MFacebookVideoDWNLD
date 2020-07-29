// ==UserScript==
// @name         MFacebookVideoDWNLD
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove the attribute in the html video that prevents you from downloading video on m.facebook
// @author       Lucas Branco
// @match        https://m.facebook.com/*
// @grant        GM_log
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-start
// ==/UserScript==
function removeD(){
    'use strict';
	var video = document.getElementsByTagName("video");
	video[0].removeAttribute("controlsList");
};
var clock = setInterval(removeD, 400);