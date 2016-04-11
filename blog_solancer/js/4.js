// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?o:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=!1,i=function(){a||o.scrollHeight==document.height||(a=!0,setTimeout(function(){o.style.height=document.height+"px",a=!1},500))};if(o.style.height="auto",setTimeout(i,10),S.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,n){if(n||(n=1e3),d(t,o),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,o*=i)}C=+new Date}if(M.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||o||(M=[]),M.length?E(u,e,n/v.frameRate+1):T=!1};E(u,e,0),T=!0}}function n(e){x||t();var n=e.target,r=l(n);if(!r||e.defaultPrevented||s(w,"embed")||s(n,"embed")&&/\.pdf/i.test(n.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),o(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}o(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var o=e.length;o--;)z[N(e[o])]=t;return t}function l(e){var t=[],o=S.scrollHeight;do{var n=z[N(e)];if(n)return i(t,n);if(t.push(e),o===e.scrollHeight){if(!y||S.clientHeight+10<o)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,o){window.addEventListener(e,t,o||!1)}function c(e,t,o){window.removeEventListener(e,t,o||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],o=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!(t||o)}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,o,n;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:800,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,z={};setInterval(function(){z={}},1e4);var A,N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L="onmousewheel"in document;L&&K&&(u("mousedown",a),u("mousewheel",n),u("load",t))}();



/**
 * Slideshowify is a super easy-to-use jQuery plugin for generating image slideshows 
 * with a Ken Burns Effect, where images which don't fit the screen exactly 
 * (generally the case) are cropped and either panned across the screen or 
 * zoomed in a randomly determined direction.
 * 
 * Author: Aleksandar Kolundzija 
 * version 0.9.3
 *
 * @requires jquery
 * @requires jquery.transit (http://ricostacruz.com/jquery.transit/) as of version 0.9
 *
 * (The MIT License)
 *
 * Copyright (c) 2012 Aleksandar Kolundzija (a@ak.rs)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($){

	$.fn.slideshowify = function(/* config */){
	
		var _self         = this,
			_imgs         = [],
			_imgIndex     = -1,	
			_imgIndexNext = 0,        // for preloading next			
			_transition   = true,     // use CSS3 transitions (default might be changed during init)
			_easing       = 'in-out',
			_viewEl       = document, // filled by slideshow (used for determining dimensions)
			_containerId  = "slideshowify-" + new Date().getTime(),
			_containerCSS = {
				"position" : "absolute",
				"overflow" : "hidden",
				"z-index"  : "-2",
				"left"     : "0",
				"top"      : "0",
				"width"    : "100%",
				"height"   : "100%"
			},
			_cfg = {
				parentEl      : "body",   // slideshow-container is injected into this
				blend         : "into",   // "into" || "toBg"
				randomize     : false,
				fadeInSpeed   : 1500,
				fadeOutSpeed  : 1500,
				aniSpeedMin   : 9000, 
				aniSpeedMax   : 15000
			},
			_$viewEl,
			_$parentEl;
		

		if (arguments[0]){
			$.extend(_cfg, arguments[0]); // reconfigure
			if (_cfg.parentEl != "body") {
				_viewEl = _cfg.parentEl;
			}
		}

		// local refs
		_$viewEl   = $(_viewEl);
		_$parentEl = $(_cfg.parentEl);


		/**
		 * Fill viewEl with image (most likely cropped based on its dimensions and view size).
		 * @TODO Add support for target divs whose dimensions were set with %s (get px value from parents).
		 * @TODO Add a window resize handler (adjust photo dims/margins).
		 */
		function _revealImg(curImg){
			var $img            = $(this),
				viewW           = _$viewEl.width(),
				viewH           = _$viewEl.height(),
				viewRatio       = viewW/viewH,
				imgRatio        = $img.width()/$img.height(),
				marginThreshold = Math.floor(Math.max(viewW, viewH)/10), // for zoom transitions
				direction       = Math.round(Math.random()),
				transAttr       = {},
				transProps,
				marginPixels,
				modDims; // will hold values to set and animate

			if (imgRatio > viewRatio){
				modDims = _transition ? 
							direction ? {dim:'left', attr:'x', sign:'-'} : {dim:'right', attr:'x', sign:''} 
							:
							direction ? {dim:'left', attr:'left', sign:'-'} : {dim:'right', attr:'right', sign:'-'};
				$img.height(viewH + 'px').width(curImg.w * (viewH/curImg.h) + 'px');			
				marginPixels = $img.width() - viewW;
			}
			else {
				modDims = _transition ? 
							direction ? {dim:'top', attr:'y', sign:'-'} : {dim:'bottom', attr:'y', sign:''} 
							:
							direction ? {dim:'top', attr:'top', sign:'-'} : {dim:'bottom', attr:'bottom', sign:'-'};
				$img.width(viewW+'px').height(curImg.h * (viewW/curImg.w) + 'px');
				marginPixels = $img.height() - viewH;
			}
			$img.css(modDims.dim, '0');
			transAttr[modDims.attr] = modDims.sign + marginPixels + 'px'; 

			// if marginThreshold is small, zoom a little instead of panning
			if (_transition && marginPixels < marginThreshold){
				if (direction){ // zoom out 
					$img.css('scale','1.2');
					transAttr = {'scale':'1'};
				}
				else { // zoom in
					transAttr = {'scale':'1.2'};
				}
			}

			transProps = {
				duration : Math.min(Math.max(marginPixels * 10, _cfg.aniSpeedMin), _cfg.aniSpeedMax),
				easing   : _easing,
				queue    : false, 
				complete : function(){
					_$parentEl.trigger('beforeFadeOut', _imgs[_imgIndex])
					$img.fadeOut(_cfg.fadeOutSpeed, function(){
						_$parentEl.trigger('afterFadeOut', _imgs[_imgIndex]);
						$img.remove();
					});
					_loadImg();

				}
			};
			
			_$parentEl.trigger('beforeFadeIn', _imgs[_imgIndex]);
			$img.fadeIn(_cfg.fadeInSpeed, function(){
					$img.css('z-index', -1);
					_$parentEl.trigger('afterFadeIn', _imgs[_imgIndex])
				});

			// use animate if css3 transitions aren't supported
			_transition ? 
				$img.transition($.extend(transAttr, transProps)) :
				$img.animate(transAttr, transProps);
		}	// end of _revealImg()

		
		/**
		 * Loads image and starts display flow
		 */
		function _loadImg(){
			var img     = new Image(),
				nextImg = new Image(), // for preloading
				len     = _imgs.length;

			_imgIndex = (_imgIndex < len-1) ? _imgIndex+1 : 0;
		
			$(img)
				// assign handlers
				.load(function(){
					if (_cfg.blend==='into'){
						$(this).css({'position':'absolute', 'z-index':'-2'});
						$('#'+_containerId).append(this);
					}
					else { // @TODO verify that this works
						$('#'+_containerId).empty().append(this);
					}
					_revealImg.call(this, _imgs[_imgIndex]);
				})
				.error(function(){
					throw new Error("Oops, can't load the image.");
				})
				.hide()
				.attr("src", _imgs[_imgIndex].src); // load
		
			if (_imgIndexNext == len) return; // nothing left to preload

			// preload next image
			_imgIndexNext = _imgIndex + 1;
			if (_imgIndexNext < len-1){
				nextImg.src = _imgs[_imgIndexNext].src;
			}
		} // end of _loadImg()
		

		// INITIALIZE
		if (!$.support.transition) {
        	_transition = false;
        	_easing = 'swing';
      	}


    	if (!_cfg.imgs){ // images were passed as selector 
			// load images into private array
			$(this).each(function(i, img){
				$(img).hide();
				_imgs.push({
					src : $(img).attr('src'),
					w   : $(img).width(),
					h   : $(img).height()
				});
			});
		}
		else {
			_imgs = _cfg.imgs;
		}
	
		
		if (_cfg.randomize){ 
			_imgs.sort(function(){ return 0.5 - Math.random(); });
		}


		// create container div 
		$("<div id='"+_containerId+"'></div>")
			.css(_containerCSS)
			.appendTo(_cfg.parentEl);


		// start
		_loadImg();
		
		return this;
	};

	/**
	 * Expose slideshowify() to jQuery for use without DOM selector.
	 */ 
	$.slideshowify = function(cfg){
		var _self = this,
			_cfg  = {
				dataUrl  : "",
				dataType : "json",
				async    : true,
				filterFn : function(data){ return data; } // default filter. does nothing
			};
				
		$.extend(_cfg, cfg);
	
		$.ajax({
			url      : _cfg.dataUrl,
			dataType : _cfg.dataType,
			async    : _cfg.async,
			success  : function(imgs){
				_cfg.imgs = _cfg.filterFn(imgs);			
				$({}).slideshowify(_cfg);
			}
		});
	};

}(jQuery));







    
