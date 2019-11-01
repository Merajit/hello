$(document).ready(function(){

/* $(document).bind('keydown keypress', 'ctrl+s', function(){
  $('#save').click(); 
  return false;
}); */

/*---for heighlited left menu ---*/
	$(function(){
		var pathname = window.location.href;
		$('.active_left_sidebar_div a').each(function(){
			if ($(this).attr('href') == pathname){
				$("a").removeClass("active_left_sidebar");
				$(this).addClass('active_left_sidebar');
		}
		});
		
	});
/*---for heighlited left menu ---*/

/*---for heighlited header menu ---*/
$(function(){
	var pathname = window.location.href;
	
	var url = pathname;
	var part = url.substring(url.lastIndexOf('/') + 1);

	if(part=="about-us" || part=="contact-us" || part=="sitemap"){
		
		$('.active_main_menu_header_ul a').each(function(){
			if ($(this).attr('href') == pathname){
				//window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));
				//alert(pathname);http://ostutorial/home/index
				
				$("a").removeClass("active_main_header_menu");
				$(this).addClass('active_main_header_menu');
				//for making parent of submenu active
				
			}
			$("#active").removeClass("active");
		});	
		
	}
	
});
/*---for heighlited header menu ---*/


	
	
	


});
