/* Make SmartTVs recognize cursors */
if (navigator.userAgent.match("SmartTV")) {
document.getElementById("Handler").className += " smart"
}

if (navigator.userAgent.match("Macintosh")) {
document.getElementById("Handler").className += " osx"
}

if (navigator.userAgent.match("Linux")) {
document.getElementById("Handler").className += " xubuntu"
}

/* (navigator.userAgent.match("Trident")) {
document.getElementById("Handler").className += " explorer"
}
*/
//if (navigator.userAgent.match("Edge")) {
//document.getElementById("Handler").className += " edge"
//}

/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.getElementById("Handler").className += " phone"
}

/* CSS for App */
if (navigator.userAgent.match("MW18")) {
document.getElementById("Handler").className += " mpisto-servers"
}

// Some old Fox Versions
window.disco=false
window.oldSafari=false
window.disco=false

if ( (navigator.userAgent.match("Safari/")) && !( (navigator.userAgent.match("Chrome/")) || (navigator.userAgent.match("YNGT")) ) ) {
// window.disco= (window.disco || (navigator.userAgent.match("Version/1\\.")) || (navigator.userAgent.match("Version/2\\.")) || (navigator.userAgent.match("Version/3\\.")) || (navigator.userAgent.match("Version/4\\.")) || (navigator.userAgent.match("Version/5\\.")) || (navigator.userAgent.match("Version/6\\.")) || (navigator.userAgent.match("Version/7\\.")) || (navigator.userAgent.match("Version/8\\.")) || (navigator.userAgent.match("Version/9\\.")) || (navigator.userAgent.match("Version/10\\.")) )
window.oldSafari=( (navigator.userAgent.match("Version/1\\.")) || (navigator.userAgent.match("Version/2\\.")) || (navigator.userAgent.match("Version/3\\.")) || (navigator.userAgent.match("Version/4\\.")) || (navigator.userAgent.match("Version/5\\.")) || (navigator.userAgent.match("Version/6\\.")) || (navigator.userAgent.match("Version/7\\.")) || (navigator.userAgent.match("Version/8\\.")) || (navigator.userAgent.match("Version/9\\.")) || (navigator.userAgent.match("Version/10\\.")) )
}

window.oldfox = ( (navigator.userAgent.match("Firefox/21\\.")) || (navigator.userAgent.match("Firefox/20\\.")) || (navigator.userAgent.match("Firefox/19\\.")) || (navigator.userAgent.match("Firefox/18\\.")) || (navigator.userAgent.match("Firefox/17\\.")) || (navigator.userAgent.match("Firefox/16\\.")) || (navigator.userAgent.match("Firefox/15\\.")) || (navigator.userAgent.match("Firefox/14\\.")) || (navigator.userAgent.match("Firefox/13\\.")) || (navigator.userAgent.match("Firefox/12\\.")) || (navigator.userAgent.match("Firefox/11\\.")) || (navigator.userAgent.match("Firefox/10\\.")) || (navigator.userAgent.match("Firefox/9\\.")) || (navigator.userAgent.match("Firefox/8\\.")) || (navigator.userAgent.match("Firefox/7\\.")) || (navigator.userAgent.match("Firefox/6\\.")) || (navigator.userAgent.match("Firefox/5\\.")) || (navigator.userAgent.match("Firefox/4\\.")) || (navigator.userAgent.match("Firefox/3\\.")) || (navigator.userAgent.match("Firefox/2\\.")) || (navigator.userAgent.match("Firefox/1\\.")) || (navigator.userAgent.match("Firefox/31\\.")) || (navigator.userAgent.match("Firefox/32\\.")) || (navigator.userAgent.match("Firefox/33\\.")) || (navigator.userAgent.match("Firefox/34\\.")) || (navigator.userAgent.match("Firefox/35\\.")) || (navigator.userAgent.match("Firefox/36\\.")) || (navigator.userAgent.match("Firefox/37\\.")) || (navigator.userAgent.match("Firefox/38\\.")) || (navigator.userAgent.match("Firefox/39\\.")) || (navigator.userAgent.match("Firefox/40\\.")) || (navigator.userAgent.match("Firefox/41\\.")) || (navigator.userAgent.match("Firefox/42\\.")) || (navigator.userAgent.match("Firefox/43\\.")) || (navigator.userAgent.match("Firefox/44\\.")) || (navigator.userAgent.match("Firefox/45\\.")) || (navigator.userAgent.match("Firefox/46\\.")) || (navigator.userAgent.match("Firefox/47\\.")) || (navigator.userAgent.match("Firefox/48\\.")) || (navigator.userAgent.match("Firefox/49\\.")) || (navigator.userAgent.match("Firefox/50\\.")) || (navigator.userAgent.match("Firefox/51\\.")) || (navigator.userAgent.match("Firefox/52\\.")) || (navigator.userAgent.match("Firefox/53\\.")) || (navigator.userAgent.match("Firefox/54\\.")) || (navigator.userAgent.match("Firefox/55\\.")) || (navigator.userAgent.match("Firefox/56\\.")) || (navigator.userAgent.match("Firefox/57\\.")) || (navigator.userAgent.match("Firefox/58\\.")) || (navigator.userAgent.match("Firefox/59\\."))  )

// Some old Google Versions
window.oldchrome =  ( (navigator.userAgent.match("Chrome/27\\.")) || (navigator.userAgent.match("Chrome/26\\.")) || (navigator.userAgent.match("Chrome/25\\.")) || (navigator.userAgent.match("Chrome/24\\.")) || (navigator.userAgent.match("Chrome/23\\.")) || (navigator.userAgent.match("Chrome/22\\.")) || (navigator.userAgent.match("Chrome/21\\.")) || (navigator.userAgent.match("Chrome/20\\.")) || (navigator.userAgent.match("Chrome/19\\.")) || (navigator.userAgent.match("Chrome/18\\.")) || (navigator.userAgent.match("Chrome/17\\.")) || (navigator.userAgent.match("Chrome/16\\.")) || (navigator.userAgent.match("Chrome/15\\.")) || (navigator.userAgent.match("Chrome/14\\.")) || (navigator.userAgent.match("Chrome/13\\.")) || (navigator.userAgent.match("Chrome/12\\.")) || (navigator.userAgent.match("Chrome/11\\.")) || (navigator.userAgent.match("Chrome/10\\.")) || (navigator.userAgent.match("Chrome/9\\.")) || (navigator.userAgent.match("Chrome/8\\.")) || (navigator.userAgent.match("Chrome/7\\.")) || (navigator.userAgent.match("Chrome/6\\.")) || (navigator.userAgent.match("Chrome/5\\.")) || (navigator.userAgent.match("Chrome/4\\.")) || (navigator.userAgent.match("Chrome/3\\.")) || (navigator.userAgent.match("Chrome/2\\.")) || (navigator.userAgent.match("Chrome/1\\.")) || (navigator.userAgent.match("Chrome/48\\.")) || (navigator.userAgent.match("Chrome/49\\.")) || (navigator.userAgent.match("Chrome/50\\.")) || (navigator.userAgent.match("Chrome/51\\.")) || (navigator.userAgent.match("Chrome/52\\.")) || (navigator.userAgent.match("Chrome/53\\.")) || (navigator.userAgent.match("Chrome/54\\.")) || (navigator.userAgent.match("Chrome/55\\.")) || (navigator.userAgent.match("Chrome/56\\.")) || (navigator.userAgent.match("Chrome/57\\.")) || (navigator.userAgent.match("Chrome/58\\.")) || (navigator.userAgent.match("Chrome/59\\.")) || (navigator.userAgent.match("Chrome/60\\.")) || (navigator.userAgent.match("Chrome/61\\.")) || (navigator.userAgent.match("Chrome/62\\.")) || (navigator.userAgent.match("Chrome/63\\.")) || (navigator.userAgent.match("Chrome/64\\.")) )

window.oldBrowser =( (navigator.userAgent.match("Trident")) || (navigator.userAgent.match("Presto")) || (navigator.userAgent.match("Tessera")) || (navigator.userAgent.match("MINERVOULA")) || (navigator.userAgent.match("Silk")) || (navigator.userAgent.match("PLAYSTATION 3")) || (navigator.userAgent.match("Nintendo DSi")) || (navigator.userAgent.match("Nintendo 3DS")) || (navigator.userAgent.match("PLAYSTATION PORTABLE")) || (navigator.userAgent.match("Edge")) || (navigator.userAgent.match("BlackBerry")) || (navigator.userAgent.match("IEMobile")) )

/* Hack */
if (window.oldBrowser || window.oldchrome || window.oldfox || window.oldSafari) {
	window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


window.newbrowser = (CSS.supports("color","var(--color)") || CSS.supports("color:var(--color)") ) 

if (!window.newbrowser ) {
	window.location.replace("https://hm100.github.io/UnsupportedBanners/Mpisto.html");window.location.href = "https://hm100.github.io/UnsupportedBanners/Mpisto.html";
}


if (navigator.userAgent.match("BrowserWarn")) {
	window.disco = false
}

if ( (navigator.userAgent.match("BrowserWarn")) || window.disco ) {
AddFloatingBanner('We\'re dropping support on your browser soon. Please make sure that you must update your browser before its too late!<br>If your device doesn\'t allow you to upgrade your browser or can\'t afford a cutting-edge browser, this means we\'re also dropping support on your device.<br>You can download <a href="https://www.google.com/chrome/">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/">Mozilla Firefox</a> or the <a href="https://support.microsoft.com/help/4501095/download-the-new-microsoft-edge-based-on-chromium">Chromium Edge</a> if you want to still use Qora Qore.','warning','BrowserBanner')


}

// Not in use
function RemoveBannerBrowser() {
    var x = document.getElementById("BannerBrowser");
        x.className += " cpe-is-transparent";
	    setTimeout(RemoveBannerBrowser1, 405) 
}

function RemoveBannerBrowser1() {
    var x = document.getElementById("BannerBrowser");
	document.getElementById("floatingbanner2").removeChild(x);
	if ($(".mpisto-content").length) {
		document.querySelector(".mpisto-content .mpisto-wrapper").removeChild(document.getElementById("floatingbanner2"));
	}
	if ($(".mpisto-options-content").length) {
		document.querySelector(".mpisto-options-content").removeChild(document.getElementById("floatingbanner2"));
	}
}



/* Mobile Only CSS */
if (navigator.userAgent.match("Mobile")) {
document.querySelector("body").className += " phone"
}

/* Local Storage */
function getKey(key) {
var str = window.localStorage,
    result = str.getItem('-evelution-pref-'+key);
if (!result) {
   return '-1';
}
return result;
}

function insertKey(key,value) {
	window.localStorage.setItem('-evelution-pref-' + key, '' + value);
}

function getParams() {
	if (window.location.search != "") {
		var params = window.location.search.split("?")[1].split("&");
    } else {
		var params = []
    }
	return params
}


/* Dropdowns */
// Calls the function on all toggles
function DropDownUpdate() {
	var dropdowns = document.querySelectorAll(".cpe-dropdown");
	dropdowns.forEach(function(x) {
		x.setAttribute('tabindex',-1);; // Add the CPE button class
	});


/* Select Inputs */
	var select_items = document.querySelectorAll(".cpe-dropdown.cpe-select .cpe-dropdown__content .cpe-list li:not(.cpe-dropdown-level-2)");
	select_items.forEach(function(y) {
		y.setAttribute('onclick','UpdateSelectValue()')
		y.addEventListener('click', (function(e) {
						e.preventDefault();
						var selected = this;


		var x = document.querySelector(".cpe-dropdown.cpe-select:focus-within .cpe-dropdown__content .cpe-list li.selected");
		if (x) {
			x.classList.remove("selected");
		}
//		this.classList.add("selected");


						var value = selected.getAttribute("value");
						document.querySelector(' .cpe-dropdown.cpe-select:focus-within')
						.addEventListener('click',(function() {
									var content = selected.innerText;
									document.querySelector('.cpe-select:focus-within .cpe-select__value').setAttribute("value", value);
									document.querySelector('.cpe-select:focus-within .cpe-select__value').innerHTML= content;
//									TestDynamicTheme(); // Change
								}));
        }) );
	});

					
}

function UpdateSelectValue() { // Handles Blurring
		setTimeout(
		(function() { document.querySelector(' .cpe-dropdown.cpe-select:focus-within').blur() } )
	,0)
}


function UpdateRange() {
	var ranges = document.querySelectorAll('input[type="range"]');
	ranges.forEach(function(x) {
		x.style.setProperty("--range-percent",  (((x.value) * 100) / x.getAttribute('max')) + '%' );
	});

}

function UpdateRangeInputs() {
	UpdateRange();

	var ranges2 = document.querySelectorAll('input[type="range"]');
	ranges2.forEach(function(x) {
		x.addEventListener("input", function(e) { UpdateRange(); });
	});

}

/* Enable New Global Navigation - No exception for now */
(function () {
	AliasFandomComponents();
	if (getKey('content-full') === '-1') {
		insertKey('content-full', 'false' );
	}
	if (getKey('toolbar-full') === '-1') {
		insertKey('toolbar-full', 'true' );
	}
	if (getKey('nav-full') === '-1') {
		insertKey('nav-full', 'true' );
	}
	if (getKey('right-rail-full') === '-1') {
		insertKey('right-rail-full', 'true' );
	}
	if (getKey('left-rail-full') === '-1') {
		insertKey('left-rail-full', 'true' );
	}
	var content_full = getKey('content-full')
	var toolbar_full = getKey('toolbar-full');
	var nav_full = getKey('nav-full');
	var right_rail_full = getKey('right-rail-full');
	var left_rail_full = getKey('left-rail-full');
    getParams().forEach(function (param) {
        var key = param.split("=")[0];
        var value = param.split("=")[1];

        switch (key) {
            case 'fullwidth':
				content_full = (value === 'true');
				console.info('Article width settings overriden')
                break;
            case 'hidetoolbar':
				toolbar_full = (value === 'false');
				console.info('Toolbar visibility settings overriden')
                break;
            case 'hidenavbar':
				nav_full = (value === 'false');
				console.info('Sticky navigation visibility settings overriden')
                break;
            case 'hiderail':
				right_rail_full = (value === 'false');
				left_rail_full = (value === 'false');
				console.info('Pane visibility settings overriden')
                break;
            case 'hiderightrail':
				right_rail_full = (value === 'false');
				console.info('Right pane visibility settings overriden')
                break;
            case 'hideleftrail':
				left_rail_full = (value === 'false');
				console.info('Left pane visibility settings overriden')
                break;

        }
    });
	document.querySelector(' container ').setAttribute('wide', content_full );
	document.querySelector(' container ').setAttribute('toolbar', toolbar_full );
	document.querySelector(' container ').setAttribute('nav', nav_full );
	document.querySelector(' container ').setAttribute('right-rail', right_rail_full );
	document.querySelector(' container ').setAttribute('left-rail', left_rail_full );
	UpdateRangeInputs();
	DropDownUpdate();
})();


/* Aliases all components with the .wds prefix to the ones from .cpe ones */
function AliasFandomComponents() {

	var highlightedItems = document.querySelectorAll(":not(svg)[class*='wds-'], [class*='cpe-is-'], [class*='cpe-has-']");

	while (document.querySelectorAll(':not(svg)[class*="wds-"], [class*="cpe-is-"], [class*="cpe-has-"]').length > 0) {
		highlightedItems.forEach(function(x) {
			x.className = x.className.replace("wds-is-", "is-");
			x.className = x.className.replace("wds-has-", "has-");
			x.className = x.className.replace("cpe-is-", "is-");
			x.className = x.className.replace("cpe-has-", "has-");
			x.className = x.className.replace("wds-midlight-aqua", "cpe-midlight-color");
			x.className = x.className.replace("wds-", "cpe-");
		});
	}


}



/* Banners */
function RemoveBanner() {
		var banner= document.querySelector('#floatingbanner .cpe-banner-notification:focus-within');
		banner.classList.add("is-transparent")
		setTimeout(
		(function () {
			banner.remove();			
			if (!(document.querySelectorAll("#floatingbanner .cpe-banner-notification").length)) {
				document.querySelector('#floatingbanner').remove();
			}
			document.querySelector('body').focus();
		}),405);
	

}

function AddFloatingBanner(content='Sample Content',kind='message',extraclass='') {
	if (kind === 'warning') {
		var icon = 'report_problem'
	} else if (kind === 'alert') {
		var icon = 'report'
	} else if (kind === 'success') {
		var icon = 'done'
	} else {
		var icon = 'info'
	}
	if (!(document.querySelector(".top-gap #floatingbanner"))) {
		document.querySelector(".top-gap").insertAdjacentHTML('afterbegin', 
			  '<div class="cpe-banner-notification__container" id="floatingbanner">' +
			  '\n</div>'
		);
	}

	document.querySelector(".top-gap #floatingbanner").insertAdjacentHTML('beforeend', 
			'<div class=" cpe-banner-notification cpe-' + kind + '" id="' + extraclass  + '">' +
			  '<div class="cpe-banner-notification__icon">' +
				'<span class="cpe-icon cpe-icon-small material-icons">' +
					icon + 
				'</span>' +
			  '</div>' +
			  '<span class="cpe-banner-notification__text">' + content + '</span>' +
			  '<span tabindex="-1" onclick="RemoveBanner()" class="cpe-banner-notification__close">' +
				'<span class="cpe-icon cpe-icon-tiny cpe-icon-large material-icons">close</span>' +
			  '</span>' +
			'</div>' 
	);


}

/* File Downloader */
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

/* Save File */
 function saveFileAs(contents,fileType,fileName) {
    /** Allow for downloading a file to a disk.
        This relies the FileSaver.js library which exports saveAs()
        Two utility methods saveImageAs and saveXMLAs should be used first.
    */
    var blobIsSupported = false,
        fileExt,
        dialog;

    // fileType is a <kind>/<ext>;<charset> format.
    fileExt = fileType.split('/')[1].split(';')[0];
    // handle text/plain as a .txt file
    fileExt = '.' + (fileExt === 'plain' ? 'txt' : fileExt);

    function dataURItoBlob(text, mimeType) {
        var i,
            data = text,
            components = text.split(','),
            hasTypeStr = text.indexOf('data:') === 0;
        // Convert to binary data, in format Blob() can use.
        if (hasTypeStr && components[0].indexOf('base64') > -1) {
            text = atob(components[1]);
            data = new Uint8Array(text.length);
            i = text.length;
            while (i--) {
                data[i] = text.charCodeAt(i);
            }
        } else if (hasTypeStr) {
            // not base64 encoded
            text = text.replace(/^data:image\/.*?, */, '');
            data = new Uint8Array(text.length);
            i = text.length;
            while (i--) {
                data[i] = text.charCodeAt(i);
            }
        }
        return new Blob([data], {type: mimeType });
    }

    try {
        blobIsSupported = !!new Blob();
    } catch (e) {}

    if (blobIsSupported) {
        if (!(contents instanceof Blob)) {
            contents = dataURItoBlob(contents, fileType);
        }
        // download a file and delegate to FileSaver
        // false: Do not preprend a BOM to the file.
        saveAs(contents, fileName + fileExt, false);
    } else {
        prompt("Could not export" + fileName);
    }
 }
 
 /* Download Data */
function DownloadData(contents,filename,ext) {
eval("saveFileAs(contents,\'text/"+ext+";charset=utf-8\', filename)");
}
