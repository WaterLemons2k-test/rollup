// ==UserScript==
// @name        Userscript
// @namespace   https://github.com/WaterLemons2k/Userscript
// @version     0.0.0
// @description A userscript.
// @author      WaterLemons2k
// @match       https://example.com/*
// ==/UserScript==

(function () {
  "use strict";

  function greeting(name) {
    console.log("Hello ".concat(name));
  }
  greeting("world");
})();
