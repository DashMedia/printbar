(function($){
	$.fn.printbar = function(){

		var qr = "https://chart.googleapis.com/chart?cht=qr&chs=80x80&chl=" + document.URL + "&choe=UTF-8";
		var block = '<div class="printbar"><span class="heading">'+$("h1").html()+'</span><span>'+document.URL+'</span></div>';

		$("head").append("<style>.printbar:before{z-index:100;position:relative;float:left;content:url("+qr+");padding:1px;width:80px;height:80px;background-width:100%;background-height:100%;} .printbar{visibility:hidden; position:absolute;overflow:hidden;}@media only print{.printbar {visibility:visible;position:relative;background-color:#ffffff;border:3px solid #cccccc;margin-bottom:1px;font-family:helvetica, arial, sans-serif;} .printbar span{z-index:101;padding:1px;text-shadow:none;display:block;text-align:left;color:#cccccc;line-height:1em;margin: 3px 15px 10px 15px;word-break:break-all;} .printbar span.heading{font-weight:bold;font-size:35px;line-height:1em;margin:10px 15px 3px 15px}h1{display:none !important;}</style>");
		$("body").prepend(block);
	}
})(jQuery);