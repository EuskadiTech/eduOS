/*!
Project: eduOS
Liscense: MIT
Author: krisdb2009
Date: 05/05/16
File: programs/Web Explorer/we.js
*/
//Create a new window object
new explorer.window()
.title('Web Explorer') //set the title
.resize(400, 300) //set the dimentions
.icon('programs/Web Explorer/1.png') //set the icon
.toggleMax() //make the window maximized
.callback(function() {
	//Variable rename for convienience and access later on.
	var win = this;
	
	//Variable rename for convienience and access later on.
	var bod = this.body;
	
	bod.html('<iframe class="if1" src="https://telesec.tech.eus"></iframe>');
	bod.find('iframe.if1').attr('style', 'position:absolute;top:0px;left:0px;width:100%;height:calc(100%);border:none;background-color:white;');
	
});