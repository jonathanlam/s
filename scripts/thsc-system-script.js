String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      }
function filev(input){
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title || "Additional Resources" ;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE9 - Open file in new window")
return true;


}}


var myurl = document.location;
document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix.split(" - ")[1]+" </b> - <\/span>"+titlex);
document.write("<span style=\"float:right;\">");
document.write("<a class=\"nofill\" href=\"https://thsconline.github.io/s/"+idx+".html\" target=\"_blank\">Open in New Window<\/a>&nbsp;&nbsp;");
document.write("&nbsp;&nbsp;<a class=\"nofill\" href=\""+tags+"\">[&#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:97%; height:92%;\" height=\"92%\" id=\"mediaplayer\" src=\"https://thsconline.github.io/s/"+idx+".html\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
}
function pdf4(input, root){
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE9 - Attempt to Download File directly")
return true;


}}
try
{
window.location="https://thsconline.github.io/s/?view="+root+"&id="+idx+"&n="+titlex+""
}
catch (err)
{
var myurl = document.location;
document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script><style>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix.split(" - ")[1]+" </b> - <\/span>"+titlex);
document.write("<span style=\"float:right;\">");
document.write("<!--<a class=\"nofill\" href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;-->");
document.write("&nbsp;&nbsp;<a class=\"nofill\" href=\""+tags+"\">[&#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
}

}




function pdf(input){
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE9 - Attempt to Download File directly")
return true;


}}


var myurl = document.location;
document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>File</b> - <\/span>"+titlex);
document.write("<span style=\"float:right;\">");
document.write("<a class=\"nofill\" href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;");
document.write("&nbsp;&nbsp;<a class=\"nofill\" onClick=\"location.reload()\" href=\""+tags+"\">[Close &#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
}


function zip(input){
var searchq=window.location.search+""
if(searchq=="?quick"){throw("Downloading File Instead");}
var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
var tix=document.title;

var ua = window.navigator.userAgent; var msie = ua.indexOf("MSIE ");
if (msie > 0){var version=parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
if(version>8){} else {input.onclick=function(){return true}; document.getElementById(idx).click();
throw("Less than IE10 - Attempt to Download File directly")
}}



document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix.split(" - ")[1]+" </b> - <\/span>"+titlex);
document.write("<span style=\"float:right;\">");
document.write("<a class=\"nofill\" href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download Zip<\/a>&nbsp;&nbsp;");
document.write("&nbsp;&nbsp;<a class=\"nofill\" href=\""+tags+"\">[&#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:97%; height:92%\" height=\"92%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
}
function openLink(a)
{
link="https://script.google.com/macros/s/AKfycbz-COYLMfNV3VGUv4V8zxY_vboQ8UaajJkMynva2lFX-yCla48/exec?"+a+"#sites-chrome-everything-caja-guest-0___"
window.open(link,"_blank","toolbar=no, titlebar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=400, height=270");
}
function getdir()
{
var f = window.location+""
var g = f.split("/")
var h= "THSC Home // "
for (i=5; i<g.length;i++)
{
if (g[i]=="" || g[i]=="webdir.html"){}
else{
h += unescape(g[i])+" // "
}
}
h+="<br>"
document.getElementById("heading").innerHTML=h;
k=g[g.length-2]
document.title="THSC Online - Directory of " + unescape(k);
}
function getnode()
{
var g=window.location+"";
g=g.split("\/");
g=g[g.length-3] + " - "+ g[g.length-2];
g=unescape(g)
g=g.capitalize(g)
g=g.replace("2U", "Maths");
g=g.replace("3U", "Maths Ext 1");
g=g.replace("4U", "Maths Ext 2");
document.title="THSC Online - " + g || "THSC Online";
}
function spider(a)
{
var link=a.innerHTML+"/";
window.location=link;
}
function spiderx(a,ext)
{
var link=a.innerHTML+"."+ext;
window.location=link;
}
function toggle(a)
{
x=a.innerHTML.replace("&", "$")
visible=document.getElementById(x).getElementsByTagName('div')[0].style.display
if (visible=="none")
{document.getElementById(x).getElementsByTagName('div')[0].style.display="block"}
else { 
document.getElementById(x).getElementsByTagName('div')[0].style.display="none"
}
}

function toggleall(a,b)
{
x=document.getElementsByClassName(a)
y=document.getElementsByClassName(b)
if (x.length==y.length)
{
displayx=document.getElementsByClassName(a)[0].style.display
displayy=document.getElementsByClassName(b)[0].style.display

if (displayx=="block" || displayx=="inline"){displayx=="inline-block";}
if (displayy=="block" || displayy== "inline"){displayy=="inline-block";}

for (i=0;i<x.length;i++)
{
try
{
document.getElementsByClassName(a)[i].style.display=displayy;
document.getElementsByClassName(b)[i].style.display=displayx;
}
catch (err){}
}
}
}

function getfile (a)
{
var link=a.innerHTML
window.location=link;

}
function getfile2 (a)
{
var link=a.value
window.location=link;

}
function getlinkx(a)
{
  
   var version = document.documentMode || 9
   var queryz=a.replace("</b>", "").replace("<b>","")
   var ida=-(1-queryz);
   var idb = ida+12;
if (version<9){if (idb > 7){idb=idb+7}} 
var anchors = document.links;
var thislinkx= anchors[idb].href;
window.location=thislinkx
}

function configure()
{

var q=window.location.search+"=z&end" || "?noquery"
var qt=q.split("&")[0]
var queryx=qt.split("=")[0];
var queryz=qt.split("=")[1];
switch(queryx)
{
case "?open":
var ida=-(1-queryz)
var version = document.documentMode || 9
if (version<9){if (ida > 7){ida=ida+7}} 
var anchors = document.links;
var thislinkx= anchors[ida].href;
window.location=thislinkx;
break;
           
default:
if(queryx=="?list2"){document.getElementById('web-list1').style.display='none'; document.getElementById('web-list2').style.display='inline';}
if(queryx=="?rf"){document.getElementById('web-list1').style.display='none'; document.getElementById('web-list2').style.display='inline';}
if(queryx=="?list1"){document.getElementById('web-list2').style.display='none'; document.getElementById('web-list1').style.display='inline';}
              
              try
{
 var anchors = document.links
  var linklength = anchors.length;
var searchbar="<div class=\"sites-header-cell-buffer-wrapper\"><select name=\"q\" id=\"jot-ui-searchInput\" style=\"width:252px;\" class=\"chosen-select\">"
searchbar+="<option value=\"#ui-blank\" class=\"inactive\" selected><\/option>"
    if (queryx=="?search")
{

    document.getElementById("contentall").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].id="results"
    oput="<tr class=\"source\" id=\""+unescape(queryz)+"\"><td>"
oput+="<span class=\"title\"><img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_folder.png\">&nbsp;&nbsp;<b>Search: "+unescape(queryz)+"</b></span>"
oput+="<span class=\"indent\">"
}
  for (i = 0; i<linklength;i++)
{
thislink= anchors[i]
valuex=thislink.innerHTML;
hrefx=thislink.href;
classx=thislink.className;
if(classx!="" || classx=="x" || valuex=="View Sitemap" || valuex=="View Source" || valuex=="Back to Year 12 - HSC" || valuex=="Back to Year 11 - Preliminary" || valuex=="Additional Resources Home" || valuex=="Back to Year 10"  || valuex=="Up One Folder" || valuex=="Home Page" || valuex=="Access Point for Shared Resources" || valuex=="Back")
{
if (classx=="inactive"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }
if (classx=="nav x"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }


}

else {
    
    
    if (queryx=="?search")
{

    
    searchfx=valuex.search(unescape(queryz))
if (searchfx==-1) 
{
if (queryz=="w.%20sol")
{
thislink.href="#"+thislink.id;
thislink.onClick="return false;"

thislink.className="inactive"
}


}
else
{
searchbar+="<option value='"+hrefx+"'>"+valuex+"<\/option>"
oput+="<a href='"+hrefx+"'>"+valuex+"<\/a><br>";
}


    
}
 else   
    {searchbar+="<option value='"+hrefx+"'>"+valuex+"<\/option>"}
    
     }
}

searchbar+="</select><div class=\"goog-inline-block\" id=\"sites-searchbox-button-set\"><div tabindex=\"0\" class=\"goog-inline-block jfk-button jfk-button-standard\" id=\"sites-searchbox-search-button\" role=\"button\" onClick=\"window.location=document.getElementById('jot-ui-searchInput').value\"><\/div><\/div><\/div>"

  if (queryx=="?search")
{
if (queryz=="w.%20sol")
{

}
else
{
document.getElementById("results").innerHTML;
    document.getElementById("results").innerHTML=oput+"<\/span><\/td><\/tr>"
}
}

object=document.getElementsByClassName("sites-layout-searchbox")[0]
object.innerHTML=searchbar;


   var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:26},
      '.chosen-select-no-results': {no_results_text:'Not found!'},
      '.chosen-select-width'     : {width:"180px"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
}
catch (err){console.log(err)}
try
{
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
document.getElementsByClassName("sites-layout-searchbox")[0].style.display="none"
}

}
catch (err){console.log(err)}
try
{
document.getElementById("sites-attachments-container").innerHTML="Contribute any past papers here at this link: <a target=\"_blank\" class=\"x\" href=\"https:\/\/thsconline.github.io\/s\/upload\/uploader2.html\">Add a Resource<\/a>&nbsp;&nbsp;"
}
catch (err){console.log(err)}

g=document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML;

try{var test=document.getElementsByClassName("source")[0].id; var je="<br><a href=\"#sites-chrome-everything\">Go to Top of Page<\/a>&nbsp;|&nbsp;"}
catch (err){var je="";console.log(err)}
try
{
 var urlw=window.location+"?uri"
 var jqw="https://raw.githubusercontent.com/thsconline/s/gh-pages/" +urlw.split("\/s\/")[1]
 var jeq="&nbsp;|&nbsp;<a href=\""+jgw+"\" target=\"blank\">View Source</a>" 
 }
catch (err){var jeq="";console.log(err)}
        try
        {
h=je+g+jeq+"<img height=\"10px;\" src=\"http://counter.digits.net\/?counter={57da36d7-daf0-7014-c14b-9dbd7488e13c}&template=simple&background=EEEEFF&foreground=298CCA\" alt=\"Counter\" border=\"0\"\/>"



document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=h;

}
catch (err){document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=g;console.log(err)}
break;
}

}

function bar(z)
{
var slides = document.getElementsByClassName("overlaybar");
for(var i = 0; i < slides.length; i++)
{
 if(slides[i].id!=z){slides[i].style.display='none'}
}

x=document.getElementById(z).style.display; if(x=='none'){y='inline-block'} else {y='none'} document.getElementById(z).style.display=y;
}
