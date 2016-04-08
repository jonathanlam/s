String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      }

function launchuploader(a)
{
a.innerHTML="Loading Resources. Please wait..."
link="https://script.google.com/macros/s/AKfycbwsgd6ioZJ_X9usR5f80vH-GjOkqk8NTNMJONDsEM42KAycKD0/exec#sites-chrome-everything-caja-guest-0___"
setTimeout(function(){window.location=link}, 3000);
}
function pdf(input){

var titlex=input.innerHTML;
var idx=input.id;
var tags=unescape(location.pathname.substring(location.pathname.lastIndexOf('/')+1));
    var tix=document.title;
document.write("<html><head>");
document.write("<title>"+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_pdf2.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/secondary.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
document.write("<\/head>");
document.write("<body>");
document.write("<div id=\"sites-chrome-everything\">");
document.write("<span style=\"background-color:rgb(248, 248, 248);width:100%;display:inline-block;\" class=\"goog-tree-item-label\">");
document.write("<img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_back.png\">&nbsp;&nbsp;");
document.write("<a href=\""+tags+"\">Exit File Viewer<\/a>&nbsp;&nbsp;<small><span class=\"nmob\"><b>"+tix.split(" - ")[1]+" </b> - <\/span>"+titlex+"</small>");
document.write("<span style=\"float:right\">");
document.write("<img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_pdf2.png\">&nbsp;&nbsp;");
document.write("<a href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download File<\/a>&nbsp;&nbsp;<wbr>");
document.write("<span class=\"reduciblex\"><img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_back.png\">&nbsp;&nbsp;");
document.write("<a href=\"index.html\">Up One Folder<\/a>&nbsp;&nbsp;<wbr>");
document.write("<img src=\"https:\/\/thsconline.github.io\/s\/images\/icon_home.png\">&nbsp;&nbsp;");
document.write("<a href=\"https:\/\/thsconline.github.io\/s\/\">Home<\/a>&nbsp;&nbsp;</span></span></span><br>");
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:100%; height:92%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</div></body></html>"); 
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
if(classx!="" || classx=="x" || valuex=="View Sitemap" || valuex=="Back to Year 12 - HSC" || valuex=="Back to Year 11 - Preliminary" || valuex=="Back to Year 10"  || valuex=="Up One Folder" || valuex=="Home Page" || valuex=="Access Point for Shared Resources" || valuex=="Back")
{
if (classx=="inactive"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }
if (classx=="nav x"){ searchbar+="<option value=\"#ui-blank\" disabled>"+valuex+"<\/option>" }


}

else {
    
    
    if (queryx=="?search")
{

    
    searchf=valuex.search(unescape(queryz))
if (searchf==-1) 
{
}
else
{

console.log(valuex)
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
    document.getElementById("results").innerHTML=oput+"<\/span><\/td><\/tr>"
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
catch (err){}
try
{
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
document.getElementsByClassName("sites-layout-searchbox")[0].style.display="none"
}

}
catch (err){}
g=document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML;

try{var test=document.getElementsByClassName("source")[0].id; var je="<br><a href=\"#sites-chrome-everything\">Go to Top of Page<\/a>&nbsp;|&nbsp;"}
catch (err){var je=""}
try
{
    
h=je+g+"<img height=\"10px;\" src=\"http://counter.digits.net\/?counter={57da36d7-daf0-7014-c14b-9dbd7488e13c}&template=simple&background=F8F8F8&foreground=298CCA\" alt=\"Counter\" border=\"0\"\/><br><br><br><br><br><br><br><br><br><br><script type=\"text\/javascript\" src=\"https://dbinbox.com\/embed.js\"><\/script>"



document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=h;

}
catch (err){document.getElementById("sites-chrome-adminfooter-container").getElementsByTagName('div')[0].innerHTML=g;}
break;
}

}
