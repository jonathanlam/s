<html><head><title>BoredofStudies Resources</title>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link href="https://thsconline.github.io/s/styles/style.css" rel="stylesheet" type="text/css">
<!--[if lt IE 9]><style>div a:hover, div a:active {background:none !important; background-color:none !important; color:#FF5500 !important}
div a.inactive:hover, div a.inactive:active {background:none !important; background-color:none !important; color:#555555 !important}  
</style><![endif]-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
<link rel="shortcut icon" type="image/x-icon" href="https://thsconline.github.io/s/images/icon_def.png">
</head>
<body onload="loadx()">
<script>function loadx()
{
var searchq=window.location.search+""
var q=window.location.search+"=z&end" || "?noquery"
var qt=q.split("&")[0]
var queryx=qt.split("=")[0];
switch(queryx)
{
case "?close":
window.close();
document.write("This window can now be closed.")
break;
case "?landing":
document.getElementById('homepage').style.display='none';
document.getElementById('sites-chrome-everything').style.display='block';
setTimeout(function(){configure()}, 0);
break;
case "?download":
document.getElementById('homepage').style.display='none';
document.getElementById('sites-chrome-everything2').style.display='block';
var titlex=getParameterByName('n');
var idx=getParameterByName('id');
document.getElementById("download-link").innerHTML="Download File: "+ titlex;
document.getElementById("qtitle").value=titlex;
document.getElementById("qid").value=idx;
document.getElementById("qsearch").value=searchq;
break;
case "?login":
window.location="https://script.google.com/macros/s/AKfycbxUmQQmSMo9QJmDrTmLOdGyKJ3y5SDpJZeC6PKGwDExP3aD7o3T/exec";
break;
case "?view":
var searchq=window.location.search+""
var viewno=getParameterByName('view', "0000")
var titlex=getParameterByName('n', "NE")
var idx=getParameterByName('id', "NE")
if (viewno.charAt(0)=="f"){viewnox=viewno.substr(1); var switchx="yes"; }
else
{
if (viewno.charAt(0)=="B"){viewnox=viewno.substr(1); var switchx="sdf"; } else {var switchx="no"; var viewnox=viewno;}
}
switch(viewnox)
{
case "yr09":
case "1009":
var tix="THSC Online";
var tags="https://thsconline.github.io/s/yr09/#"+idx;
break;
case "yr10":
case "1010":
var tix="THSC Online";
var tags="https://thsconline.github.io/s/yr10/#"+idx;
break;
case "yr11":
case "1011":
var tix="THSC Online";
var tags="https://thsconline.github.io/s/yr11/#"+idx;
break;
case "yr12":
case "1012":
var tix="THSC Online";
var tags="https://thsconline.github.io/s/yr12/#"+idx;
break;
case "1070":
var tix="HSC Agriculture";
var tags="https://thsconline.github.io/s/yr12/Agriculture/hscpapers.html#"+idx;
break;
case "1070":
var tix="HSC Agriculture";
var tags="https://thsconline.github.io/s/yr12/Agriculture/hscpapers.html#"+idx;
break;
case "1076":
var tix="HSC Agriculture HY Papers";
var tags="https://thsconline.github.io/s/yr12/Agriculture/assessment-tasks.html#"+idx;
break;
case "1078":
var tix="HSC Agriculture Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Agriculture/trialpapers.html#"+idx;
break;
case "1170":
var tix="HSC Ancient History";
var tags="https://thsconline.github.io/s/yr12/Ancient History/index.html?rf#"+idx;
break;
case "1366":
var tix="Year 11 Biology HY Papers";
var tags="https://thsconline.github.io/s/yr11/Biology/assessment-tasks.html#"+idx;
break;
case "1368":
var tix="Year 11 Biology Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Biology/prelimpapers.html#"+idx;
break;
case "1370":
var tix="HSC Biology";
var tags="https://thsconline.github.io/s/yr12/Biology/hscpapers.html#"+idx;
break;
case "1376":
var tix="HSC Biology HY Papers";
var tags="https://thsconline.github.io/s/yr12/Biology/assessment-tasks.html#"+idx;
break;
case "1378":
var tix="HSC Biology Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Biology/trialpapers.html#"+idx;
break;
case "1568":
var tix="Year 11 Business Studies Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Business Studies/prelimpapers.html#"+idx;
break;
case "1520":
var tix="HSC Business Services";
var tags="https://thsconline.github.io/s/yr12/Business Services/index.html#"+idx;
break;
case "1570":
var tix="HSC Business Studies";
var tags="https://thsconline.github.io/s/yr12/Business Studies/hscpapers.html#"+idx;
break;
case "1576":
var tix="HSC Business Studies HY Papers";
var tags="https://thsconline.github.io/s/yr12/Business Studies/assessment-tasks.html#"+idx;
break;
case "1578":
var tix="HSC Business Studies Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Business Studies/trialpapers.html#"+idx;
break;
case "1720":
var tix="HSC CAFS";
var tags="https://thsconline.github.io/s/yr12/CAFS/index.html#"+idx;
break;
case "1816":
var tix="Year 11 Chemistry HY Papers";
var tags="https://thsconline.github.io/s/yr11/Chemistry/assessment-tasks.html#"+idx;
break;
case "1818":
var tix="Year 11 Chemistry Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Chemistry/prelimpapers.html#"+idx;
break;
case "1820":
var tix="HSC Chemistry";
var tags="https://thsconline.github.io/s/yr12/Chemistry/hscpapers.html#"+idx;
break;
case "1821":
var tix="HSC Chemistry CT1 Nov-Dec Assessments";
var tags="https://thsconline.github.io/s/yr12/Chemistry/assessment-tasks.html#"+idx;
break;
case "1823":
var tix="HSC Chemistry CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Chemistry/assessment-tasks.html#"+idx;
break;
case "1826":
var tix="HSC Chemistry HY Papers";
var tags="https://thsconline.github.io/s/yr12/Chemistry/assessment-tasks.html#"+idx;
break;
case "1828":
var tix="HSC Chemistry Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Chemistry/trialpapers.html#"+idx;
break;
case "2070":
var tix="HSC Dance";
var tags="https://thsconline.github.io/s/yr12/Dance/index.html#"+idx;
break;
case "2120":
var tix="HSC Design &amp; Tech";
var tags="https://thsconline.github.io/s/yr12/Design &amp; Tech/index.html#"+idx;
break;
case "2320":
var tix="HSC Drama";
var tags="https://thsconline.github.io/s/yr12/Drama/index.html#"+idx;
break;
case "2420":
var tix="HSC Earth &amp; Environmental Science";
var tags="https://thsconline.github.io/s/yr12/Earth &amp; Environmental Science/hscpapers.html#"+idx
break;
case "2428":
var tix="HSC Earth &amp; Environmental Science";
var tags="https://thsconline.github.io/s/yr12/Earth &amp; Environmental Science/trialpapers.html#"+idx
break;
case "2466":
var tix="Year 11 Economics HY Papers";
var tags="https://thsconline.github.io/s/yr11/Economics/assessment-tasks.html#"+idx;
break;
case "2468":
var tix="Year 11 Economics Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Economics/prelimpapers.html#"+idx;
break;
case "2470":
var tix="HSC Economics";
var tags="https://thsconline.github.io/s/yr12/Economics/hscpapers.html#"+idx
break;
case "2476":
var tix="HSC Economics HY Papers"
var tags="https://thsconline.github.io/s/yr12/Economics/assessment-tasks.html#"+idx
break;
case "2478":
var tix="HSC Economics Trial Papers"
var tags="https://thsconline.github.io/s/yr12/Economics/trialpapers.html#"+idx
break;
case "2670":
var tix="HSC Engineering Studies";
var tags="https://thsconline.github.io/s/yr12/Engineering Studies/index.html#"+idx
break;
case "2716":
var tix="HSC English HY";
var tags="https://thsconline.github.io/s/yr12/English/assessment-tasks.html#"+idx;
break;
case "2718":
var tix="HSC English Trial Paper 1";
var tags="https://thsconline.github.io/s/yr12/English/trialpapers_paper1.html#"+idx;
break;
case "2720":
var tix="HSC English";
var tags="https://thsconline.github.io/s/yr12/English/hscpapers.html#"+idx;
break;
case "2727":
var tix="HSC English Trial Paper 2 Standard";
var tags="https://thsconline.github.io/s/yr12/English/trialpapers_paper2_standard.html#"+idx;
break;
case "2728":
var tix="HSC English Trial Paper 2 Advanced";
var tags="https://thsconline.github.io/s/yr12/English/trialpapers_paper2_advanced.html#"+idx;
break;
case "2730":
var tix="HSC English Ext 1";
var tags="https://thsconline.github.io/s/yr12/English Ext 1 & 2/hscpapers_extension1.html#"+idx;
break;
case "2738":
var tix="HSC English Ext 1 Trial Papers";
var tags="https://thsconline.github.io/s/yr12/English Ext 1 & 2/trialpapers_extension1.html#"+idx;
break;
case "2920":
var tix="HSC Food Tech";
var tags="https://thsconline.github.io/s/yr12/Food Tech/index.html#"+idx;
break;
case "3220":
var tix="HSC Geography";
var tags="https://thsconline.github.io/s/yr12/Geography/index.html#"+idx;
break;
case "3630":
var tix="HSC History Extension";
var tags="https://thsconline.github.io/s/yr12/History Extension/hscpapers.html#"+idx;
break;
case "3638":
var tix="HSC History Extension Trial Papers";
var tags="https://thsconline.github.io/s/yr12/History Extension/trialpapers.html#"+idx;
break;
case "3720":
var tix="HSC Hospitality Papers";
var tags="https://thsconline.github.io/s/yr12/Hospitality/index.html#"+idx;
break;
case "4118":
var tix="Year 11 IPT Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/IPT/prelimpapers.html#"+idx;
break;
case "4120":
var tix="HSC IPT";
var tags="https://thsconline.github.io/s/yr12/IPT/index.html#"+idx;
break;
case "4126":
var tix="HSC IPT HY Papers";
var tags="https://thsconline.github.io/s/yr12/IPT/assessment-tasks.html#"+idx;
break;
case "4128":
var tix="HSC IPT Trial Papers";
var tags="https://thsconline.github.io/s/yr12/IPT/trialpapers.html#"+idx;
break;
case "4200":
var tix="HSC Languages";
var tags="https://thsconline.github.io/s/yr12/LOTE/index.html#"+idx;
break; 
case "4600":
var tix="HSC Japanese";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/index.html#"+idx;
break; 
case "4619":
var tix="HSC Japanese Beginners";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/hscpapers_beginners.html#"+idx;
break; 
case "4620":
var root=titlex.substr(5).toLowerCase();
if (root=="solutions" || root=="solution"){root="hsc"}
var tix="HSC Japanese Continuers";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/"+root+"papers_continuers.html#"+idx;
break; 
case "4626":
var tix="HSC Japanese Continuers HY Papers";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/assessment-tasks_continuers.html#"+idx;
break; 
case "4627":
var tix="HSC Japanese Beginners Trial Papers";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/trialpapers_beginners.html#"+idx;
break;
case "4628":
var tix="HSC Japanese Continuers Trial Papers";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/trialpapers_continuers.html#"+idx;
break;
case "4630":
var tix="HSC Japanese Extension";
var tags="https://thsconline.github.io/s/yr12/LOTE/Japanese/hscpapers_extension.html#"+idx;
break; 
case "5018":
var tix="Year 11 Legal Studies Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Legal Studies/prelimpapers.html#"+idx;
break;
case "5020":
var tix="HSC Legal Studies";
var tags="https://thsconline.github.io/s/yr12/Legal Studies/hscpapers.html#"+idx;
break;
case "5028":
var tix="HSC Legal Studies Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Legal Studies/trialpapers.html#"+idx;
break;
case "5098":
var tix="Year 9 Maths Yearly Papers";
var tags="https://thsconline.github.io/s/yr9/Maths/yr9papers.html#"+idx;
break;
case "5100":
var tix="Year 10 Maths";
var tags="https://thsconline.github.io/s/yr10/Maths/index.html#"+idx;
break;
case "5108":
var tix="Year 10 Maths Yearly Papers";
var tags="https://thsconline.github.io/s/yr10/Maths/yr10papers.html#"+idx;
break;
case "5200":
var tix="Year 11 Maths";
var tags="https://thsconline.github.io/s/yr11/Maths/index.html#"+idx;
break;
case "5218":
var tix="Year 11 General Maths Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/prelimpapers_general.html#"+idx;
break;
case "5221":
var tix="Year 11 Maths PT1 Mar-Apr Assessments";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5222":
var tix="Year 11 Maths PT2 Jul-Aug Assessments";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5226":
var tix="Year 11 Maths HY Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5228":
var tix="Year 11 Maths Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/prelimpapers_advanced.html#"+idx;
break;
case "5231":
var tix="Year 11 Maths Ext 1 PT1 Mar-Apr Assessments";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5232":
var tix="Year 11 Maths Ext 1 PT2 Jul-Aug Assessments";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5236":
var tix="Year 11 Maths Ext 1 HY Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5238":
var tix="Year 11 Maths Ext 1 Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/prelimpapers_extension1.html#"+idx;
break;
case "5276":
var tix="Year 11 Maths (Accelerated) HY Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/assessment-tasks_accelerated.html#"+idx;
break;
case "5278":
var tix="Year 11 Maths (Accelerated) Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Maths/prelimpapers_accelerated.html#"+idx;
break;
case "5300":
var tix="HSC Maths";
var tags="https://thsconline.github.io/s/yr12/Maths/index.html#"+idx;
break;
case "5310":
var tix="HSC General Maths";
var tags="https://thsconline.github.io/s/yr12/Maths/hscpapers_general.html#"+idx;
break;
case "5313":
var tix="HSC General Maths CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_general.html#"+idx;
break;
case "5316":
var tix="HSC General Maths HY Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_general.html#"+idx;
break;
case "5318":
var tix="HSC General Maths Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/trialpapers_general.html#"+idx;
break;
case "5320":
var tix="HSC Maths";
var tags="https://thsconline.github.io/s/yr12/Maths/hscpapers_advanced.html#"+idx;
break;
case "5321":
var tix="HSC Maths CT1 Nov-Dec Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5323":
var tix="HSC Maths CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5324":
var tix="HSC Maths CT4 Aug-Sep Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5326":
var tix="HSC Maths HY Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_advanced.html#"+idx;
break;
case "5328":
var tix="HSC Maths Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/trialpapers_advanced.html#"+idx;
break;
case "5330":
var tix="HSC Maths Ext 1";
var tags="https://thsconline.github.io/s/yr12/Maths/hscpapers_extension1.html#"+idx;
break;
case "5331":
var tix="HSC Maths Ext 1 CT1 Nov-Dec Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5332":
var tix="HSC Maths Ext 1 CT2 Feb-Mar Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5333":
var tix="HSC Maths Ext 1 CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5334":
var tix="HSC Maths Ext 1 CT4 Aug-Sep Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5336":
var tix="HSC Maths Ext 1 HY Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension1.html#"+idx;
break;
case "5338":
var tix="HSC Maths Ext 1 Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/trialpapers_extension1.html#"+idx;
break;
case "5340":
var tix="HSC Maths Ext 2";
var tags="https://thsconline.github.io/s/yr12/Maths/hscpapers_extension2.html#"+idx;
break;
case "5341":
var tix="HSC Maths Ext 2 CT1 Nov-Dec Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
break;
case "5342":
var tix="HSC Maths Ext 2 CT2 Feb-Mar Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
break;
case "5343":
var tix="HSC Maths Ext 2 CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
break;
case "5344":
var tix="HSC Maths Ext 2 CT4 Aug-Sep Assessments";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
break;
case "5346":
var tix="HSC Maths Ext 2 HY Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/assessment-tasks_extension2.html#"+idx;
break;
case "5348":
var tix="HSC Maths Ext 2 Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/trialpapers_extension2.html#"+idx;
break;
case "5391":
/* 539= VCE Maths */
var tix="VCE Further Maths Papers";
var tags="https://thsconline.github.io/s/yr12/Maths/vcepapers_fmaths.html#"+idx;
break;
case "5405":
/* COMPETITIONS */
var root=titlex.split(" ")[0].toLowerCase();
var tix="Olympiad/Competition Paper";
var tags="https://thsconline.github.io/s/yr12/Maths/Competitions/cp_"+root+".html#"+idx;
break;
case "5442":
/* COURSE MATERIALS */
var root=titlex.split(" ")[0].toLowerCase()+titlex.split(" ")[1].toLowerCase();
var tix="Maths Ext 2 Course Material";
var tags="https://thsconline.github.io/s/yr12/Maths/Materials/ws_"+root+"s.html#"+idx;
break;
case "5518":
var tix="Year 11 Modern History Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Modern History/prelimpapers.html#"+idx;
break;
case "5520":
var tix="HSC Modern History";
var tags="https://thsconline.github.io/s/yr12/Modern History/hscpapers.html#"+idx;
break;
case "5528":
var tix="HSC Modern History Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Modern History/trialpapers.html#"+idx;
break;
case "6420":
var tix="HSC PDHPE";
var tags="https://thsconline.github.io/s/yr12/PDHPE/hscpapers.html#"+idx;
break;
case "6516":
var tix="Year 11 Physics HY Papers";
var tags="https://thsconline.github.io/s/yr11/Physics/assessment-tasks.html#"+idx;
break;
case "6518":
var tix="Year 11 Physics Yearly Papers";
var tags="https://thsconline.github.io/s/yr11/Physics/prelimpapers.html#"+idx;
break;
case "6520":
var tix="HSC Physics";
var tags="https://thsconline.github.io/s/yr12/Physics/hscpapers.html#"+idx;
break;
case "6521":
var tix="HSC Physics CT1 Nov-Dec Assessments";
var tags="https://thsconline.github.io/s/yr12/Physics/assessment-tasks.html#"+idx;
break;
case "6523":
var tix="HSC Physics CT3 May-Jun Assessments";
var tags="https://thsconline.github.io/s/yr12/Physics/assessment-tasks.html#"+idx;
break;
case "6526":
var tix="HSC Physics HY Papers";
var tags="https://thsconline.github.io/s/yr12/Physics/assessment-tasks.html#"+idx;
break;
case "6528":
var tix="HSC Physics Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Physics/trialpapers.html#"+idx;
break;
case "7470":
var tix="HSC Software"; /* SDD */
var tags="https://thsconline.github.io/s/yr12/Software/hscpapers.html#"+idx;
break;
case "7478":
var tix="HSC Software Trial Papers"; /* SDD */
var tags="https://thsconline.github.io/s/yr12/Software/trialpapers.html#"+idx;
break;
case "7520":
var tix="HSC Senior Science";
var tags="https://thsconline.github.io/s/yr12/Senior Science/hscpapers.html#"+idx;
break;
case "7528":
var tix="HSC Senior Science Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Senior Science/trialpapers.html#"+idx;
break;
case "7670":
var tix="HSC Society & Culture";
var tags="https://thsconline.github.io/s/yr12/Society & Culture/index.html#"+idx;
break;
case "7700":
var tix="HSC Studies of Religion";
var tags="https://thsconline.github.io/s/yr12/Studies of Religion/hscpapers.html#"+idx;
break;
case "7710":
var titlex=titlex.replace(" (SOR1)", "");
var tix="HSC Studies of Religion 1";
var tags="https://thsconline.github.io/s/yr12/Studies of Religion/hscpapers.html#"+idx;
break;
case "7718":
var tix="HSC Studies of Religion 1 Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Studies of Religion/trialpapers_sor1.html#"+idx;
break;
case "7720":
var titlex=titlex.replace(" (SOR2)", "");
var tix="HSC Studies of Religion 2";
var tags="https://thsconline.github.io/s/yr12/Studies of Religion/hscpapers.html#"+idx;
break;
case "7728":
var tix="HSC Studies of Religion 2 Trial Papers";
var tags="https://thsconline.github.io/s/yr12/Studies of Religion/trialpapers_sor2.html#"+idx;
break;
case "7920":
var tix="HSC Textiles & Design";
var tags="https://thsconline.github.io/s/yr12/Textiles & Design/index.html#"+idx;
break;
case "8570":
var tix="HSC Visual Arts"; /* VA */
var tags="https://thsconline.github.io/s/yr12/Visual Arts/index.html#"+idx;
break;
case "sdf":
var switchx="sdf";
break;
default:
window.location="https://thsconline.github.io/frenzy/v/"+viewno+".html?id="+idx+"&n="+titlex+""
return;
break;
}
if (switchx=="yes")
{
var tags=treelink;
}
switchx="sdf" /* IMPORTANT LINE */
if (switchx=="sdf")
{
var sdfforumlk="http://community.boredofstudies.org/"+getParameterByName('linkref', "459/secondary-education/")
}
var myurl = document.location;
document.write("<html><head>");
if (switchx=="sdf")
{
document.write("<title>File Viewer<\/title>");
}
else
{
document.write("<title>THSC Online - "+tix+" - "+titlex.replace("<i>", "").replace("</i>", "") +"<\/title>");
}
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
document.write("<meta http-equiv=\"content-type\" content=\"text\/html; charset=utf-8\"><link rel=\"shortcut icon\" type=\"image\/x-icon\" href=\"https:\/\/thsconline.github.io\/s\/images\/icon_def.png\">");
document.write("<link href=\"https:\/\/thsconline.github.io\/s\/styles\/style.css\" rel=\"stylesheet\" type=\"text\/css\">");
document.write("<style>html, body {height:100% !important;}</style><!--[if lt IE 9]><style> #mediaplayer{display:none;}</style><![endif]-->");
document.write("<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.6.4\/jquery.min.js\" type=\"text\/javascript\"><\/script>");
document.write("<\/head>");
document.write("<body>");
document.write("<span class=\"overlaybar folder-path-container goog-container\" style=\"width:100%;background-color:#D8D8D8;z-index:1000px;position:absolute;top:0px;\">");
document.write("<span class=\"overlayinsert folder-path-folder folder-path-element\">");
if (switchx=="sdf")
{
document.write("<span class=\"nmob\">&nbsp;<\/span>");}
else
{
document.write("<span class=\"nmob\">&nbsp;&nbsp;<b>"+tix+"</b> - <\/span>"+titlex);
}
document.write("<span style=\"float:right;\">");
if (switchx=="sdf")
{
}
else
{
document.write("<a class=\"nofill\" href=\"https:\/\/drive.google.com\/uc?export=download&id="+idx+"\" target=\"_blank\">Download PDF<\/a>&nbsp;&nbsp;");
}
/*document.write("<a class=\"nofill\" href=\"/s/?login\" target=\"_blank\">Login/Register<\/a>&nbsp;&nbsp;");
document.write("<a class=\"nofill\" href=\"/s/?download"+searchq.substr(5)+"\" target=\"_blank\">Test Download PDF<\/a>&nbsp;&nbsp;");
*/
if (switchx=="sdf")
{
	if (viewno.charAt(0)=="B"){
	linkx="https:\/\/thsconline.github.io/s/?view="+viewnox+"&id="+idx+"&n="+titlex+""
	/*	document.write("<a class=\"nofill\" href=\""+linkx+"\">Expand<\/a>&nbsp;&nbsp;")*/
	}
document.write("<a class=\"nofill\" href=\"boredofstudies.org/\">BoS Home<\/a>&nbsp;&nbsp;<a class=\"nofill\" href=\"community.boredofstudies.org/\">BoS Forum<\/a>&nbsp;&nbsp;<a class=\"nofill\" href=\"\/s\/?close\">[Close &#215;]<\/a></span></span></span><br>");
}
else
{
document.write("&nbsp;&nbsp;<a class=\"nofill\" href=\""+tags+"\">[Close &#215;]<\/a>&nbsp;&nbsp;</span></span></span><br>");
}
document.write("<style>.drive-viewer-popout-button{display:none;}</style><iframe style=\"width:98%; height:95%;\" height=\"95%\" id=\"mediaplayer\" src=\"https:\/\/drive.google.com\/file\/d\/"+idx+"\/preview\"><noscript>&nbsp;Enable Javascript to Load File<\/noscript><\/iframe>");
document.write("</body></html>"); 
break;
case "?study":
var searchq=window.location.search+""
var viewno=getParameterByName('study', "000")
switch(viewno)
{
case "105":
var tix="Agriculture";
break;
case "135":
var tix="Biology";
break;
case "155":
var tix="Business Studies";
break;
case "180":
var tix="Chemistry";
break;
case "245":
var tix="Economics";
var tags="https://thsconline.github.io/s/yr11/Economics/#"+idx;
break;
case "532":
var tix="Maths";
var tags="https://thsconline.github.io/s/yr12/Maths/#"+idx;
break;
case "533":
var tix="Maths Ext 1";
var tags="https://thsconline.github.io/s/yr12/Maths/#"+idx;
break;
case "534":
var tix="Maths Ext 2";
var tags="https://thsconline.github.io/s/yr12/Maths/#"+idx;
break;
default:
document.write("403 Access Denied")
break;
}
}
function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
</script>
&nbsp;
</body></html>
