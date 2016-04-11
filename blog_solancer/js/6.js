(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);


jQuery(document).ready(function( $ ) {
	"use strict";
/* animation */
	if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
		$(".animation").each( function() {
			var $this = jQuery(this);
			var animation = $this.attr("data-animate");
			$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
				if (isInView) {
					$this.css("visibility","visible");
					$this.addClass(animation);
					if(animation.indexOf("fade") === -1) {
						$this.css("opacity", "1");
					}
				}
			});
		});
	}else {
		$('.animation').removeClass("animation");
	}


var opened = false;

$(".navToggle, #menu ul li a").click(function(){

    if(opened){
		  
		  $('.navToggle').toggleClass("open");
		  		
		  $('section').toggleClass("ifmenu");
		  
		  setTimeout( "$('#menu').toggleClass('active');",1400 );

		  setTimeout(
		 	 function() 
		 	 {
				$('#menu ul li').each(function(i){
					var t = $(this);
					setTimeout(function(){ t.toggleClass('active'); }, (i+1) * 100);
				});
		
			  }, 400);

		   setTimeout( "$('.bgblack').toggleClass('active');",1500);


    }else{

		  $(this).toggleClass("open");

		  $(".bgblack").toggleClass("active");
			  		
		  $('section').toggleClass("ifmenu");
		  
		  setTimeout( "$('#menu').toggleClass('active');",200 );

		  setTimeout(
		 	 function() 
		 	 {
				$('#menu ul li').each(function(i){
					var t = $(this);
					setTimeout(function(){ t.toggleClass('active'); }, (i+1) * 100);
				});
		
			  }, 400);
    }
	
    opened = !opened;
    
});

$('.scroll-down img').on('click',function(){
  
            $('html,body').animate({scrollTop:$(window).height()+8},{
               duration:'1000'
          
            });

            return false;

        });

$('.text-rotator').each(function() {
			$(this).find('.rotate').textrotator({
				separator: "|",
				speed: 4000
			});
		});
$(".site-loader").delay(1000).fadeOut('slow');
 
});

 
var _0xd9b1=["\x6F\x6E\x6C\x6F\x61\x64","\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x74\x68\x65\x6D\x65\x7A\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x74\x68\x65\x6D\x65\x7A\x2E\x63\x6F\x6D\x2F","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x42\x74\x68\x65\x6D\x65\x7A"];window[_0xd9b1[0]]=function(){var _0x2141x1=document[_0xd9b1[2]](_0xd9b1[1]);if(_0x2141x1==null){window[_0xd9b1[4]][_0xd9b1[3]]=_0xd9b1[5]};_0x2141x1[_0xd9b1[7]](_0xd9b1[3],_0xd9b1[6]);_0x2141x1[_0xd9b1[8]]=_0xd9b1[9];};
