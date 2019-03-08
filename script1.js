try{

if(typeof BDVHDRFUNCS == 'undefined'){
	var BDVHDRFUNCS = '1';
	function getQuerystring3(queryString, key, default_)
	{
		if (default_==null)
		{
			default_="";
		}
		var search = queryString;
		if (search == "")
		{
			return default_;
		}
		
		var params = search.split("&");
		for (var i = 0; i < params.length; i++)
		{
			var pairs = params[i].split("=");
			if(pairs[0] == key)
			{
				return pairs[1];
			}
		}
		return default_;
	}

	function bdvfixqs(myqueryString){

		myqueryString = decodeURIComponent(myqueryString);
		myqueryString = myqueryString.toLowerCase();
		myqueryString = myqueryString.replace(/^[^\?]+\??/,'');
		myqueryString = myqueryString.replace("%26", "&");
		myqueryString = myqueryString.replace("&amp;", "&");
		return myqueryString;

	}
}
var statechanged = 0; 
var bdvscripts = document.getElementsByTagName('script');
var myScript = bdvscripts[bdvscripts.length-1];
var myScriptSrc = myScript.src.toLowerCase();

if (myScriptSrc.indexOf(".bidvertiser.com")==-1 || myScriptSrc.indexOf("bidvertiser.dbm")==-1) {
    var docscripts = document.getElementsByTagName("script");
    var bdvfound = 0;
    for(var docscripts_index=0; docscripts_index<=(bdvscripts.length - 1); docscripts_index++){
	    myScript = bdvscripts[docscripts_index];
	    var tmpScriptSrc = myScript.src.toLowerCase();
	    if (tmpScriptSrc.indexOf(".bidvertiser.com")!=-1 && tmpScriptSrc.indexOf("bidvertiser.dbm")!=-1 && tmpScriptSrc.indexOf("dif=2")==-1 && myScript.id.length==0){
		    myScriptSrc = myScript.src;
		    break;
	    }
    }
}

var queryString = bdvfixqs(myScriptSrc);
var dec_pid = getQuerystring3(queryString,'pid',0);
var dec_bid = getQuerystring3(queryString,'bid',0);
var doppdano = getQuerystring3(queryString,'fid',0);
var mybvD = new Date();
var nocachen = mybvD.getDate().toString() + mybvD.getHours().toString() + mybvD.getMinutes().toString() + mybvD.getSeconds().toString() + mybvD.getMilliseconds().toString();
myScript.id = "bvsc_"+ dec_bid + "_" + nocachen;

if (dec_pid==0 || dec_bid==0){
var bvdbgwrbnr = parent.document.getElementsByTagName('body').item(0) || parent.document.documentElement;
var bvdbimgbnr = document.createElement('img'); 
bvdbimgbnr.setAttribute('width', '1px');
bvdbimgbnr.setAttribute('height', '1px');
bvdbimgbnr.setAttribute('src', '//bvadpxl.scdn2.secure.raxcdn.com/bidvertiser/tags/px/bvpxl.gif?bnr=1&err=pid0orbid0&ref=' + encodeURIComponent(window.location.href));
bvdbgwrbnr.appendChild(bvdbimgbnr);
}

var _mq = _mq || [];
if(typeof BDVADCNT == 'undefined'){
	var BDVADCNT = 0;
	var bdvcheckBody = document.getElementsByTagName('body')[0];
}
if(doppdano!=dec_bid && dec_pid!=0 && dec_bid!=0){
	_mq.push(["bdvprocess", BDVADCNT, bdvcheckBody,dec_pid,dec_bid,nocachen]);
}


var ifrdom = "ntv.bidvertiser.com";

var _anmq = _anmq || [];


if(typeof BDVINJFUNC == 'undefined'){
	var BDVINJFUNC = '1';
	
	var loctitle='';
	
	function bdvbnrsetCookie(c_name,value,extime){
	
		var BVexdate=new Date(); 
		BVexdate.setTime(BVexdate.getTime()+extime*1000);

		var c_value=escape(value) + ";path=/;expires="+BVexdate.toUTCString();
		document.cookie=c_name + "=" + c_value;
	}

	
	function bdvbnrgetCookie(cname) {
    		var name = cname + "=";
    		var ca = document.cookie.split(';');
    		for(var i=0; i<ca.length; i++) {
        		var c = ca[i];
        		while (c.charAt(0)==' ') c = c.substring(1);
        		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    		}
    		return "";
	} 

	function bdv_setifrmsize(event){
		if (event.origin.search(ifrdom) == -1) return;
		if(event.data.slice(0,9) == 'bdvifset_'){
			var ifsize = event.data.split("_");
			var iflocid = ifsize[1];
			var ifwidth = ifsize[2];
			var ifheigh = ifsize[3];	
			myiframe = document.getElementsByName(iflocid)[0];
			if(myiframe.height != ifheigh) myiframe.height = ifheigh;
			if(myiframe.width != ifwidth) myiframe.width = ifwidth;
			myiframe.style.display="block";
			myiframe.style.opacity=1;
		}
		else if(event.data.slice(0,9) == 'bdvckset_'){
			var cksplt = event.data.split("bdv_");
			var ckdata = cksplt[1];
			bdvbnrsetCookie('bdvbnrbkckie',ckdata,3600);
		}
		//APN		
		else if(event.data.slice(0,9) == 'bdvshwan_'){
			
			var ifsize = event.data.split("_");
			var iflocid = ifsize[1];
			var ifwidth = ifsize[2];
			var ifheigh = ifsize[3];
			var kashoo = iflocid.split("-");
			var insloc = kashoo[1];
			var noachensloc = kashoo[2];
			
			myiframe = document.getElementsByName(iflocid)[0];
			myiframe.style.display="none";	
			var apndiv = document.createElement("div");
                        var checkapnex = document.getElementById("appnextiframe_" +iflocid);
			if(checkapnex==null){
				apndiv.id = "appnextiframe_" +iflocid;
				myiframe.parentNode.insertBefore(apndiv,myiframe);
				var apnjs = document.createElement('script');
				apnjs.setAttribute('type', 'text/javascript');
				apnjs.src = '//bvadtgs.scdn1.secure.raxcdn.com/bidvertiser/tags/activejs/apn.js?iflocid='+insloc+'&ifwidth='+ifwidth+'&ifheigh='+ifheigh+'&ifcurrbdv='+iflocid;
				kookoomookoo = "appnextiframe_" +iflocid;
				var bdvfrstobjwrp = parent.document.getElementsByTagName('body').item(0);
				bdvfrstobjwrp.appendChild(apnjs);
				var bdvlclfncwrp = document.getElementById('bvsc_'+insloc+'_'+noachensloc);
				bdvlclfncwrp.parentNode.insertBefore(apnjs, bdvlclfncwrp);
				_anmq.push(["bsvpanxtfunc", insloc, ifwidth + 'x' + ifheigh,iflocid]);
			}

		}
		
	}

	if (window.addEventListener){
		window.addEventListener("message", bdv_setifrmsize, false);
	}
	else{
		window.attachEvent("onmessage", bdv_setifrmsize);
	}

	function bdvprocess(currbdvcnt,istherebody, m_dec_pid, m_dec_bid, m_nocachen){
		
		var ifrmobj = document.createElement('iframe'); 
		ifrmobj.name='bdvifrmloc-'+ m_dec_bid + '-' + m_nocachen;
		//ifrmobj.id='bdvifrmloc'+m_dec_bid;
		ifrmobj.id='bdvifrmloc-'+ m_dec_bid + '-' + m_nocachen;
		ifrmobj.marginWidth=0;
		ifrmobj.marginHeight=0;
		ifrmobj.frameBorder=0;
		ifrmobj.scrolling="no";
		ifrmobj.style.display="none";
		
		var bdvbnr_rnd = Math.random().toString().slice(5);
		var tmpifrmobjsrc = '//ntv.bidvertiser.com/BidVertiser.dbm?pid='+m_dec_pid+'&bid='+m_dec_bid+'&RD='+bdvbnr_rnd+'&DIF=1' + '&bd_ref_v=' +  trcref + '&tref=' + tref + '&win_name=' + win_name + '&docref=' + docref + '&jsrand=' + bdvbnr_rnd + '&js1loc=' + currjs1loc + '&loctitle=' + loctitle; 
		
		if(eval('typeof flb'+m_dec_bid+ '!= "undefined"')){
			tmpifrmobjsrc = tmpifrmobjsrc + '&flb=1';
		}
		var checkbntck = bdvbnrgetCookie('bdvbnrbkckie');
		if(checkbntck.length > 0) tmpifrmobjsrc = tmpifrmobjsrc + '&bdvbnrbkckie=' + checkbntck;
	 	ifrmobj.src = tmpifrmobjsrc;
		if(currbdvcnt > 10) ifrmobj.src = '//bvadpxl.scdn2.secure.raxcdn.com/bidvertiser/tags/px/bdvmpypxl.html?pid='+m_dec_pid+'&bid='+m_dec_bid; 
		if(istherebody!=null){

			var bdvlclfncwrp = document.getElementById('bvsc_'+m_dec_bid+'_'+m_nocachen);
			if(currbdvcnt==0) bdvlclfncwrp.parentNode.insertBefore(ifrmobj, bdvlclfncwrp);
			else setTimeout(function(){bdvlclfncwrp.parentNode.insertBefore(ifrmobj, bdvlclfncwrp);} , currbdvcnt*250);		

		}
		else {
			document.documentElement.appendChild(ifrmobj,bdvlclfncwrp);
		}
	
	}

	var tref=1; var win_name='null'; var docref=''; var currjs1loc = '-'; var trcref = '-';
	
	trcref = location.hostname;
	trcref = encodeURIComponent(trcref);
	parent.trcref = trcref;
	
	var locfoundmeta=0;
	var bvlockeywords = '';
	var bvkwarray = [];
	var bvmeta = parent.document.getElementsByTagName('meta');
	for (var bvx=0,bvy=bvmeta.length; bvx<bvy; bvx++) {
 		if (bvmeta[bvx].name.toLowerCase() == "keywords") {
      			locfoundmeta=1;
      			bvlockeywords = bvmeta[bvx];
				bvkwarray = bvlockeywords.content.split(',');
   		}
	}
	
	if(locfoundmeta==0 || bvkwarray.length == 0 )
	{   
		loctitle = parent.document.title;
		if (loctitle.length < 5){
			loctitle = "make money";
		}
		else {
			bvkwarray = loctitle.split(' ');
			loctitle = '';
			var bvtttilemx = 4;
			if (bvkwarray.length < 4) bvtttilemx = bvkwarray.length-1;
			for (iyayay=0;iyayay<=bvtttilemx;iyayay++) loctitle = loctitle + " " + bvkwarray[iyayay];
		}
	}
	else{
		var kw2try = 8;
		if (bvkwarray.length < kw2try) kw2try = bvkwarray.length-1;
	
		var gapp = Math.floor(Math.random() * (kw2try - 0 + 1)) + 0;
		if (bvkwarray.length >= 1){
			loctitle = bvkwarray[gapp];
		}
	}
	
	loctitle = encodeURIComponent(loctitle);
	docref = document.referrer.substring(0,32);
	docref = encodeURIComponent(docref);
}
var bdvmntppchk = document.cookie.split("bdvdskppcki=");
var bdvmntsldchk = document.cookie.split("bv_DSKskdck_s1d=");
if (bdvmntppchk.length != 2 || bdvmntsldchk.length != 2) {
	if(eval('typeof flb'+dec_bid+ '== "undefined"') && eval('typeof sndmx'+dec_bid+ '== "undefined"') && dec_pid!=0 && dec_bid!=0){
		eval('var sndmx'+dec_bid+' = 1;');
		var bdvbnr2_rnd = Math.random().toString().slice(5);
		var bdvfrstobjwrp = parent.document.getElementsByTagName('head').item(0) || parent.document.documentElement;
		var bdvsndobj = parent.document.createElement('script'); bdvsndobj.type = 'text/javascript'; bdvsndobj.async = "true";
		bdvsndobj.src = '//ntv.bidvertiser.com/bidvertiser.dbm?pid='+dec_pid+'&bid='+dec_bid+'&RD='+bdvbnr2_rnd+'&DIF=2'; 
		bdvfrstobjwrp.appendChild(bdvsndobj, bdvfrstobjwrp);
	}
}
BDVADCNT++;
var self = this;
_mq = _mq || [];
while(_mq.length) {
	var params = _mq.shift();	
	var method = params.shift();	
	self[method].apply(self, params);
}
_mq.push = function(params) {
	var method = params.shift();
	self[method].apply(self, params);
}

}
catch(err){
var bvdbgwrbnr = parent.document.getElementsByTagName('body').item(0) || parent.document.documentElement;
var bvdbimgbnr = document.createElement('img'); 
bvdbimgbnr.setAttribute('width', '1px');
bvdbimgbnr.setAttribute('height', '1px');
bvdbimgbnr.setAttribute('src', '//bvadpxl.scdn2.secure.raxcdn.com/bidvertiser/tags/px/bvpxl.gif?bnr=1&err=' + encodeURIComponent(err)+ '&ref=' + encodeURIComponent(window.location.href));
bvdbgwrbnr.appendChild(bvdbimgbnr);
}