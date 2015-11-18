/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

var socket;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() 
{
    socket = io.connect('http://192.168.1.104:1337');
    
   	/*socket.on('connect', function(data) {
        alert('connected to qms server');
    });*/
     
}

function btnLED_onClick()
{
    socket.emit('led', 0);
    alert('button clicked');
}


