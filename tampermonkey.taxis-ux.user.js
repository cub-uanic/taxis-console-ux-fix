// ==UserScript==
// @name         TaxisConsole
// @namespace    https://github.com/cub-uanic/taxis-console-ux-fix
// @version      0.3
// @description  improve UX
// @author       Oleg Kostyuk <cub.uanic@gmail.com>
// @match        http://taxis.agora.odesk.com/*
// @match        https://taxis.agora.odesk.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function main($){
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.panel-default>.panel-heading {background-color:#ccc !important}; panel-collapse>.panel-heading {background-color:#eeffff !important};';
        head.appendChild(style);
    }

    main();
})();
