function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" clean india response clarion call given hon'ble honble prime minister narendra modi swachh bharat nation witnessed wave enthusiasts wielding broom taking cleanliness pledge earlier wrote message citizens stating clean best tribute bapu when celebrate 150th birth anniversary 2019 urge every devote least hundred hours year towards can't cant remain unclean longer october launch mission followed flagging walkathon rajpath shri visited rajghat valmiki basti housing colony where swept streets symbolic start extended nook corner country various tasks discussions relating abhiyan also featured mygov platform order involve more people propel campaign further latest fixes fixed banglore school student participated initiative manufacturing company puram delhi welcome need help? contact \",\" login \",\" touch simply fill form below we'll well back within hours contact directly call +918377038855 +919990087133 email neeraj12121 gmail telephone comments forename surname \",\" \",\" \",\" \",\" \" );" );
d.write("var pageMap = new Array(\"Home\",\"Login\",\"Contact Us\",\"Article 01\",\"Search Results\",\"Forum\",\"Blog\" );" );
d.write("var linkMap = new Array(\"index.html\",\"login.html\",\"contactus.html\",\"article01.html\",\"searchresults.html\",\"forum.html\",\"blog.html\" );" );
d.write("var preMap = new Array(\"Clean India In response to the clarion call given by Hon'ble Prime Minister Narendra Modi for Swachh Bharat  Clean India   the Nation witnessed a wave of enthusiasts wielding the broom and taking up t\",\"Login \",\"Get in touch  Simply fill in the form below and we'll get back to you within 24 hours  Contact us directly   Call  +918377038855  Call +919990087133 Email  ny neeraj12121 gmail com Telephone Comments \",\"  \",\"\",\"\",\"\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}