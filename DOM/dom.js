

/**Finding HTML Objects */

/**
 * 
 * 
 * Property 	        Description 	                                                DOM
 * ........................................................................................>
document.anchors        	Returns all <a> elements that have a name attribute 	    1
document.applets 	        Returns all <applet> elements (Deprecated in HTML5) 	1
document.baseURI 	        Returns the absolute base URI of the document 	3
document.body 	            Returns the <body> element 	1
document.cookie 	        Returns the document's cookie 	1
document.doctype 	        Returns the document's doctype 	3
document.documentElement 	Returns the <html> element 	3
document.documentMode 	    Returns the mode used by the browser 	3
document.documentURI 	    Returns the URI of the document 	3
document.domain 	        Returns the domain name of the document server 	1
document.domConfig      	Obsolete. Returns the DOM configuration 	3
document.embeds 	        Returns all <embed> elements 	3
document.forms 	            Returns all <form> elements 	1
document.head 	            Returns the <head> element 	3
document.images 	        Returns all <img> elements 	1
document.implementation 	Returns the DOM implementation 	3
document.inputEncoding 	    Returns the document's encoding (character set) 	3
document.lastModified 	    Returns the date and time the document was updated 	3
document.links 	            Returns all <area> and <a> elements that have a href attribute 	1
document.readyState 	    Returns the (loading) status of the document 	3
document.referrer 	        Returns the URI of the referrer (the linking document) 	1
document.scripts 	        Returns all <script> elements 	3
document.strictErrorChecking 	Returns if error checking is enforced 	3
document.title 	            Returns the <title> element 	1
document.URL 	            Returns the complete URL of the document 	1
 * 
 */

//  let allAnchors = document.anchors;
//  console.log(allAnchors);
//  console.log(allAnchors.length); //XXXXXXXXXXXX it is not working ...

 let baseUri = document.baseURI;
 console.log(baseUri);

 let body = document.body;
 console.log(body);

 let docktype = document.docktype;
 console.log(docktype);

 let element = document.documentElement;
 console.log(element);

 let images = document.images;
 console.log(images);