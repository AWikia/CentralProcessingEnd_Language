﻿window.MW18darkmode = false;
window.MW18wikitheme = 'auto';
window.MW18ContrastNotice = false;
window.MW18ForcedTheme = false;

/* Visual Themes */
var visualThemes = ['lite', 'basic', 'contrast', 'simple']
var visualThemeNames = ['Lite','Basic','High Contrast','Simple'];
var contrastVisual = 2;
/* Visual Colors */
var visualColors = ['factorycolors','lunacolors','classicforced','classicforced2','campbellforced','forced','forced2','forced3','tangoforced','rgbcolors','retro','retro2','retro3','retro4','retro5','retro6','retro7','fandomcolors','fandomcolors2', 'fandomcolors3', 'candycrush','candycrush2','discord','evelution'];
var visualColorNames = ['Factory', 'XP Luna', 'Windows Forced', 'Windows Forced II', 'Campbell Forced', 'Evelution OS Forced', 'Evelution OS Forced II', 'Evelution OS Forced III', 'Tango Forced','RGB Celebration','Retro','Retro II','Retro III','Retro IV','Retro V','Retro VI','Retro VII','Fandom 2021', 'Fandom 2021 II', 'Fandom 2021 III', 'Candy Crush', 'Candy Crush II', 'Discord','Evelution OS'];

(function () {
	// Evelution Specific
	if (getKey('theme-selected') === '-1') {
		insertKey('theme-selected', 'A' );
	}
	if (getKey('style-active') === '-1') {
		if ( ( window.matchMedia('(forced-colors: active)').matches ) ) {
			insertKey('style-active', contrastVisual );
		} else {
			insertKey('style-active', 'S' );
		}
	}
	if (getKey('color-active') === '-1') {
		insertKey('color-active', 'S' );
	}
	if (getKey('filter-active') === '-1') {
		insertKey('filter-active', 'standard' );
	}
	if (getKey('color-mode') === '-1') {
		insertKey('color-mode', 'auto' );
	}
	if (getKey('accent-active') === '-1') {
		insertKey('accent-active', 'false' );
	}
	var theme_selected = getKey('theme-selected');
	var style_active = getKey('style-active');
	var color_active = getKey('color-active');
	var filter_active = getKey('filter-active');
	var color_mode = getKey('color-mode');
	var accent_active = getKey('accent-active');
    getParams().forEach(function (param) {
        var key = param.split("=")[0];
        var value = param.split("=")[1];

        switch (key) {
            case 'usecpetheme':
				switch (value) {
					case 'theme-A':
					case 'A':
					case '0':
						theme_selected = 'A'
						break;
					case 'theme-B':
					case 'B':
					case '1':
						theme_selected = 'B'
						break;
					case 'theme-C':
					case 'C':
					case '2':
						theme_selected = 'C'
						break;
					case 'theme-D':
					case 'D':
					case '3':
						theme_selected = 'D'
						break;
					default:
						theme_selected = 'A'
						break;
				}
				console.info('Active theme settings overriden')
                break;
            case 'usevisualstyle':
				style_active = visualThemes.indexOf(value);
				console.info('Active visual style settings overriden')
                break;
            case 'usevisualcolors':
				color_active = visualColors.indexOf(value);
				console.info('Active visual colors settings overriden')
                break;
            case 'usecolormode':
				color_mode = value;
				console.info('Color mode settings overriden');
                break;
            case 'useaccent':
				accent_active = value;
				console.info('Accent mode settings overriden');
                break;
        }
    });
	$('html').attr('theme',theme_selected);
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li").removeClass('selected');
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li[data-theme-change='theme-" + theme_selected + "']").addClass('selected');
	colortheme(color_mode,false,false)
	SetAccent(accent_active,false)
	$("head").append('<style class="theming"></style>');
	ManagerRows(); // For Task Manager Only
	VisualStyleCompile(); // Compiles the Contrast Options
	VisualStyle(style_active,false);
	VisualColor(color_active,false);
	ContrastBanner(); // Notice
	$('html').addClass('theming-loaded');

})();


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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function SupportsColorMix() {
	return CSS.supports("color","color-mix(in srgb, #34c9eb 70%, white)") || CSS.supports("color:color-mix(in srgb, #34c9eb 70%, white)") 
}

function SupportsColorContrast() {
	return CSS.supports("color","color-contrast(wheat vs tan, sienna, #d2691e)") 

}

function ForcedColors() {
	return window.matchMedia('(forced-colors: active)').matches 
}


/* Visual Styles */
function VisualStyle(style,save=true) {
	if ( (style === 'S') || (style === -1) ) { // Standard Style
		$('html').attr("visualtheme", "standard");
	} else {
		$('html').attr("visualtheme", visualThemes[style]);
	}
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-styles li").removeClass('selected');
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-styles li#style" + style).addClass('selected');
		if (save) {
		insertKey('style-active', style );
		}
}

function VisualColor(style,save=true) {
	if ( (style === 'S') || (style === -1) ) { // Standard Style
		$('html').attr("visualcolors", "standard");
		if ($('.preview-theme-wrapper.selection-theme').length) {
			$('.preview-theme-wrapper.selection-theme').attr("visualcolors", "standard");
		}
	} else {
		$('html').attr("visualcolors", visualColors[style]);
		if ($('.preview-theme-wrapper.selection-theme').length) {
			$('.preview-theme-wrapper.selection-theme').attr("visualcolors", visualColors[style]);
		}
	}
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-colors li").removeClass('selected');
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-colors li#color" + style).addClass('selected');
		if (save) {
		insertKey('color-active', style );
		}
		ColorUpdate(true);
}


function VisualStyleCompile() {
// Puts new options
// In the Visual Styles Dropdown
/* Visual Styles */
	for (let i = 0; i < visualThemes.length; i++) {
		str = '<li id="style' + i + '"><a onclick="VisualStyle(' + i + ')">' + visualThemeNames[i] + '</a></li>'
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-styles").append(str);
	}
/* Visual Colors */
	for (let i = 0; i < visualColors.length; i++) {
		str = '<li id="color' + i + '"><a onclick="VisualColor(' + i + ')">' + visualColorNames[i] + '</a></li>'
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-visual-colors, .skin-tunic #visual-colors .mw-portlet-body ul").append(str);
	}


// In the Visual Styles Options
}

/* Getting non-generic color values */
function GetCommunity() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvas')).getPropertyValue("color");
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-color").trim();
	}
}

function GetCommunityHeaderText() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvastext')).getPropertyValue("color");
	} else if (getComputedStyle(document.querySelector('html')).getPropertyValue("--superbar-text-background-color") === 'auto') {
		var color = getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-color");
		if ( (window.MW18darkmode === true) ) {
			var color = ColorInvert(color);
		}
		if (isLightColor(color)) {
			return getComputedStyle(document.querySelector('body')).getPropertyValue("--light-theme-text-background-color");
		} else {
			return getComputedStyle(document.querySelector('body')).getPropertyValue("--dark-theme-text-background-color");
		}
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--superbar-text-background-color").trim();
	}
}


function GetPageShort() { // Like GetPage() without forced colors mode you get the unaltered page background mode (Used for checking dark mode)
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvas')).getPropertyValue("color");
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color").trim();
	}
}


function GetPage() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvas')).getPropertyValue("color");
	} else {
		var page = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color").trim();
		if ( (window.MW18darkmode === true) ) {
			return ColorInvert(page);
		}
		return page
	}
}

function GetSecondaryAccent() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-linktext')).getPropertyValue("color");
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--secondary-accent-background-color").trim();
	}
}


function GetPageBorder() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-graytext')).getPropertyValue("color");
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color").trim();
	}
}


function GetPageText() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvastext')).getPropertyValue("color");
	} else if (getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") === 'auto') {
		var color = getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color").trim();
		if ( (window.MW18darkmode === true) ) {
			var color = ColorInvert(color);
		}
		if (isLightColor(color)) {
			return getComputedStyle(document.querySelector('body')).getPropertyValue("--light-theme-text-background-color");
		} else {
			return getComputedStyle(document.querySelector('body')).getPropertyValue("--dark-theme-text-background-color");
		}
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color").trim();
	}
}


function GetAccent() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-highlight')).getPropertyValue("color");
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color").trim();
	}
}

function GetCaret() {
	if (ForcedColors()) {
		return getComputedStyle(document.querySelector('.fc-canvastext')).getPropertyValue("color");
	} else if (getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-background-color") === 'auto') {
		var color = getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color").trim();
		return color
	} else {
		return getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-background-color").trim();
	}
}


function GetAlert() {
		return BestAlertColor()[0];
}


function GetWarning() {
		return BestAlertColor()[1];
}

function GetSuccess() {
		return BestAlertColor()[2];
}

function GetMessage() {
		return BestAlertColor()[3];
}

function BestAlertColor() {
var page = GetPage()
if ( chroma(page).get('hsl.l') < 0.5) {
/** V1 **/
var colors = ['#e60000', '#cc0000', '#b30000', '#990000', '#800000', '#660000', '#4d0000', '#330000', '#1a0000', '#ff1919', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6'];
var colors2= ['#e69500', '#cc8500', '#b37400', '#996300', '#805300', '#664200', '#4d3200', '#332100', '#1a1100', '#ffaf19', '#ffb833', '#ffc14d', '#ffc966', '#ffd280', '#ffdb99', '#ffe4b3', '#ffedcc', '#fff6e6'];
var colors3= ['#00e673', '#00cc66', '#00b359', '#00994d', '#008040', '#006633', '#004d26', '#00331a', '#001a0d', '#19ff8c', '#33ff99', '#4dffa6', '#66ffb3', '#80ffbf', '#99ffcc', '#b3ffd9', '#ccffe6', '#e6fff2'];
var colors4= ['#727272', '#666666', '#595959', '#4c4c4c', '#404040', '#333333', '#262626', '#191919', '#0c0c0c', '#8c8c8c', '#999999', '#a5a5a5', '#b2b2b2', '#bfbfbf', '#cccccc', '#d8d8d8', '#e5e5e5', '#f2f2f2'];

} else {
/** V1 **/
var colors = ['#ff1919', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6', '#e60000', '#cc0000', '#b30000', '#990000', '#800000', '#660000', '#4d0000', '#330000', '#1a0000'];
var colors2= ['#ffaf19', '#ffb833', '#ffc14d', '#ffc966', '#ffd280', '#ffdb99', '#ffe4b3', '#ffedcc', '#fff6e6', '#e69500', '#cc8500', '#b37400', '#996300', '#805300', '#664200', '#4d3200', '#332100', '#1a1100'];
var colors3= ['#19ff8c', '#33ff99', '#4dffa6', '#66ffb3', '#80ffbf', '#99ffcc', '#b3ffd9', '#ccffe6', '#e6fff2', '#00e673', '#00cc66', '#00b359', '#00994d', '#008040', '#006633', '#004d26', '#00331a', '#001a0d'];
var colors4= ['#8c8c8c', '#999999', '#a5a5a5', '#b2b2b2', '#bfbfbf', '#cccccc', '#d8d8d8', '#e5e5e5', '#f2f2f2', '#727272', '#666666', '#595959', '#4c4c4c', '#404040', '#333333', '#262626', '#191919', '#0c0c0c'];

}


		contrastA = (window.matchMedia('(prefers-contrast: more)').matches) ? 4.50 : 3.00
		contrastW = (window.matchMedia('(prefers-contrast: more)').matches) ? 4.12 : 2.75
		contrastS = (window.matchMedia('(prefers-contrast: more)').matches) ? 3.75 : 2.50
		contrastM = (window.matchMedia('(prefers-contrast: more)').matches) ? 3.37 : 2.25

	for (let i = 0; i < colors.length; i++) {
		var alert = ColorTestTwin(colors[i], ColorInvert(page), 0.15,360);
		var alertsat = chroma(alert).get('hsl.s');
		var warn = chroma(ColorTestTwin(colors2[i], ColorInvert(page), 0.15,38)).set('hsl.s',alertsat).set('hsl.l', chroma(alert).get('hsl.l'));
		var done = chroma(ColorTestTwin(colors3[i], ColorInvert(page), 0.15,150)).set('hsl.s',alertsat).set('hsl.l', chroma(alert).get('hsl.l'));
		var info = chroma(ColorTestTwin(colors4[i], ColorInvert(page), 0.15,-1)).set('hsl.l',chroma(alert).get('hsl.l'));
		if ( ((chroma.contrast(page, alert)) >= contrastA) && ((chroma.contrast(page, warn)) >= contrastW) && ((chroma.contrast(page, done)) >= contrastS) && ((chroma.contrast(page, info)) >= contrastM) ) {
			return [alert, warn, done, info];
		}
	}
	
	
	/* If no color can be found legible, fallback to specific color */
			var page = ColorInvert(page);
			return [ColorTestTwin(colors[3], page, 0.15,360), ColorTestTwin(colors2[3], page, 0.15,38), ColorTestTwin(colors3[3], page, 0.15,150), ColorTestTwin(colors4[3], page, 0.15,-1)];

 
}

/* Get Foreground Variables */

function GetForegroundVariable(color,hover=false) {
	if (hover) {
		if (isLightColor(color)) {
			return 'var(--light-theme-foreground-color-hover)'
		} else {
			return 'var(--dark-theme-foreground-color-hover)'
		}
	} else {
		if (isLightColor(color)) {
			return 'var(--light-theme-foreground-color)'
		} else {
			return 'var(--dark-theme-foreground-color)'
		}
	}
}

function GetForegroundVariable2(color,hover=false) {
	if (hover) {
		if (isLightColor(color)) {
			return 'var(--light-theme-foreground-color-hover-rgb)'
		} else {
			return 'var(--dark-theme-foreground-color-hover-rgb)'
		}
	} else {
		if (isLightColor(color)) {
			return 'var(--light-theme-foreground-color-rgb)'
		} else {
			return 'var(--dark-theme-foreground-color-rgb)'
		}
	}
}

/* Get Gradient Variables */
function GetGradientVariable(color,name="page") {
	if (isLightColor(color)) {
		return ['var(--' + name + '-background-color)', 'var(--' + name + '-background-color-hover)']
	} else {
		return ['var(--' + name + '-background-color-hover)', 'var(--' + name + '-background-color)']
	}
}

function GetGradientVariable2(color,name="page") {
	if (isDarkColor(color)) {
		return ['var(--' + name + '-background-color)', 'var(--' + name + '-background-color-hover)']
	} else {
		return ['var(--' + name + '-background-color-hover)', 'var(--' + name + '-background-color)']
	}
}


/* End of this work */


/* Used for some wiki theme modes 
	Also used for some notifications
	Called on body element only */
function CheckTheme() {
	/* Wiki theme */
	ColorUpdate(true);
ManagerRows();
ContrastBanner();
}



/* Used only on Task Manager, ignored elsewhere */
function ManagerRows() {

/* For Task Manager */
if ($("body.tskmngr").length) {
	if ( ($("cpu").length) < 4) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", $("cpu").length);
	} else if ( ($("cpu").length) < 6 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 2);
	} else if ( ($("cpu").length) < 13 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 3);
	} else if ( ($("cpu").length) < 30 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 4);
	} else if ( ($("cpu").length) < 64 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 6);
	} else if ( ($("cpu").length) < 99 ) {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 8);
	} else {
		document.querySelector('aside.heatmap').style.setProperty("--heatmap-rows", 10);
	}
}


}

function ContrastBanner() {

/* For Evelution */
if  ( ($("body.skin-evelution").length) ) {
	if ( ( window.matchMedia('(forced-colors: active)').matches ) && (window.MW18ContrastNotice === false)  && ($('html').attr("visualtheme") !== 'contrast'  ) ) {
		window.MW18ContrastNotice = true;
		AddFloatingBanner("You're currently using a high contrast theme on your device. You may want to use the <a onclick='RemoveBanner(); VisualStyle(" + contrastVisual + ")'>High Contrast</a> visual style so as to have a consistent high contrast experience.",'message','contrastbanner')  
	} else {
		if ( (!($(".top-gap #contrastbanner").length)) && ($('html').attr("visualtheme") !== 'contrast'  )) {
			window.MW18ContrastNotice = false;
		}
	}
}


}



/* Changes Wiki theme style
   Supported values: auto, auto-r, light, dark */
function colortheme(theme='auto', repaint=true, save=true) {
    var body_bg =	GetPageShort();
    var old_dark = window.MW18darkmode
    if (ForcedColors()) {
		window.MW18darkmode = false;
	} else if (theme === 'auto') { // Auto
		window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: dark)').matches );
	} else if (theme === 'auto-r') { // Auto-Dark
		window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: light)').matches );
	} else if (theme === 'light') { // Light
			if (isLightColor(body_bg)) {
				window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: dark)').matches );
			} else {
				window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: light)').matches );
			}
	} else if (theme === 'dark') { // Dark
			if (isLightColor(body_bg)) {
				window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: light)').matches );
			} else {
				window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: dark)').matches );
			}
	} else {
		window.MW18darkmode = ( window.matchMedia('(prefers-color-scheme: dark)').matches );
	}
	window.MW18wikitheme = theme
	if (save) {
		insertKey('color-mode', theme );
	}
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-color-modes li").removeClass('selected');
	$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-color-modes li[data-color-mode='" + theme + "']").addClass('selected');
	if ((old_dark != window.MW18darkmode) && (repaint) ) {
		ColorUpdate(false);
	}
}

function SetAccent(tick='false',save='true') {
		if (save) {
			insertKey('accent-active', tick );
		}
		$('html').attr("accented", tick);
}


function ToggleAccent() {
	if ($('html').attr("accented") === 'false') {
		SetAccent( 'true' )
	} else {
		SetAccent ( 'false')
	}
}



/* Preset Themes 
** Themes:
**			0  = Oasis
**			1  = Sapphire
**			2  = Jade
**			3  = Babygirl
**			4  = Sky
**			5  = Carbon
**			6  = Moonlight
**			7  = Rockgarden
**			8  = Oppulence
**			9 = Bluesteel
**			10 = Obession
**			11 = Creamsicle
**			12 = Plated
**			13 = Beach
**			14 = Police
**			15 = Dragstrip
**			16 = Aliencrate
*/
function PresetTheme(theme="") {
	if (theme==="") {
	//	var theme2= $('select.preset_theme').val();
		var theme2= $('.cpe-select .preset_theme .cpe-select__value').attr("value");
	} else {
		var theme2= theme;
	}
	var body_bg=[ 		  // --body-background-color
				'ffffff', // Fandom Light
				'000000', // Fandom Dark
				'f6f6f6', // CC
				'2c343d', // Fansun
				'1f1f1f', // Dark
				'cccccc', // A Secure Light
				'333333', // A Secure Dark
				'7f8afe', // A Wikia
				'ffffff', // Gamepedia Light
				'000000', // Gamepedia Dark
				'3D3527', // Can I Use... Light
				'17140e', // Can I Use... Dark
				'ffffff', // Wikimedia Colors
				'0b284f', // Zelda Blue
				'441177', // CPE Default
				'BACDD8', // Oasis
				'000000', // Windows 10
				'017683', // FandomDesktop Light
				'000000'  // FandomDesktop Dark
				][theme2];
	var body_image=[					 // --backgrounud-image
				'Empty.png',			 // Fandom Light
				'Empty.png',			 // Fandom Dark
				'Empty.png',			 // CC
				'Empty.png',			 // Fansun
				'Empty.png',			 // Dark
				'Empty.png',			 // A Secure Light
				'Empty.png',			 // A Secure Dark
				'AWikia.png',			 // A Wikia
				'Empty.png',			 // Gamepedia Light
				'Empty.png',			 // Gamepedia Dark
				'Empty.png',			 // Can I Use... Light
				'Empty.png',			 // Can I Use... Dark
				'Empty.png',			 // Wikimedia Colors
				'Empty.png',			 // Zelda Blue
				'loadbg_dev.png',		 // CPE Default
				'Empty.png',			 // Oasis
				'Empty.png',			 // Windows 10
				'FD Light.jfif',		 // FandomDesktop Light
				'FD Dark.jfif'			 // FandomDesktop Dark
				][theme2];
	var page_bg=[		  // --page-background-color (--page-text-background-color on reversed colors)
				'f3f5f4', // Fandom Light
				'0e191a', // Fandom Dark
				'ffffff', // CC
				'39424d', // Fansun
				'111111', // Dark
				'f1f1f1', // A Secure Light
				'0e0e0e', // A Secure Dark
				'9ea4f2', // A Wikia
				'ffffff', // Gamepedia Light
				'0e191a', // Gamepedia Dark
				'f2e8d5', // Can I Use... Light
				'252017', // Can I Use... Dark
				'ffffff', // Wikimedia Colors
				'17456e', // Zelda Blue
				'f1f2f3', // CPE Default
				'FFFFFF', // Oasis
				'ffffff', // Windows 10
				'ffffff', // FandomDesktop Light
				'0e191a'  // FandomDesktop Dark
				][theme2];
	var button_bg=[		  // --accent-background-color
				'01cdd1', // Fandom Light
				'01cdd1', // Fandom Dark
				'404a57', // CC
				'00b7e0', // Fansun
				'343434', // Dark
				'0009ff', // A Secure Light
				'0009ff', // A Secure Dark
				'848888', // A Wikia
				'f5811f', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'ba2f00', // Can I Use... Light
				'654600', // Can I Use... Dark
				'3366cc', // Wikimedia Colors
				'001339', // Zelda Blue
				'dd8300', // CPE Default
				'006CB0', // Oasis
				'0066cc', // Windows 10
				'005c62', // FandomDesktop Light
				'005c62'  // FandomDesktop Dark
				][theme2];
	var header_bg=[		  // --minibar-background-color
				'01cdd1', // Fandom Light
				'01cdd1', // Fandom Dark
				'dee7e5', // CC
				'404a57', // Fansun
				'232323', // Dark
				'003fff', // A Secure Light
				'003fff', // A Secure Dark
				'6871e6', // A Wikia
				'f5811f', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'AD6500', // Can I Use... Light
				'654600', // Can I Use... Dark
				'2a4b8d', // Wikimedia Colors
				'1d578b', // Zelda Blue
				'b88300', // CPE Default
				'006CB0', // Oasis
				'96b4d1', // Windows 10
				'005558', // FandomDesktop Light
				'058d9d'  // FandomDesktop Dark
				][theme2];
	var link_bg=[		  // --secondary-accent-background-color
				'088488', // Fandom Light
				'01cdd1', // Fandom Dark
				'009bbe', // CC
				'00c8e0', // Fansun
				'4a90e2', // Dark
				'0009ff', // A Secure Light
				'cdd6ff', // A Secure Dark
				'0038ff', // A Wikia
				'd9721b', // Gamepedia Light
				'f5811f', // Gamepedia Dark
				'bf6f00', // Can I Use... Light
				'D4943A', // Can I Use... Dark
				'3366cc', // Wikimedia Colors
				'f4f26b', // Zelda Blue
				'dd2300', // CPE Default
				'006CB0', // Oasis
				'0066cc', // Windows 10
				'088488', // FandomDesktop Light
				'00cdd0'  // FandomDesktop Dark
				][theme2];
}


/* Downloads all modificative values of the current selected theme to a file */
function DownloadTheme(full=false) {
	wordfilter2 = getComputedStyle(document.querySelector('body')).getPropertyValue("--logo-filter-hover")
	if ( wordfilter2 == "" ) {
		wordfilter2 == 'initial'
	}
	if (full) { // For use without Theme Management
		result = '[theme="A"][visualcolors="standard"] {\n' + // Beginning
				// Body BG
				 '--body-background-image:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-image")  + ';\n' +
				 '--body-background-image-opacity:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-image-opacity")  + ';\n' +
				// Body Color
				 '--body-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-color")  + ';\n' +
				 '--body-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-color-hover")  + ';\n' +
				 '--body-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-fadeout-color")  + ';\n' +
				 '--body-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-gradient-color")  + ';\n' +
				 '--body-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-gradient-color-hover")  + ';\n' +
				 '--body-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-foreground-color")  + ';\n' +
				 '--body-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-foreground-color-hover")  + ';\n' +
				 '--body-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-foreground-color-inverted")  + ';\n' +

				 '--body-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-color-rgb")  + ';\n' +
				 '--body-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-foreground-color-rgb")  + ';\n' +
				 '--body-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-foreground-color-hover-rgb")  + ';\n' +
				// Superbar Text Color
				 '--superbar-text-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-background-color")  + ';\n' +
				 '--superbar-text-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-background-color-hover")  + ';\n' +
				 '--superbar-text-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-fadeout-color")  + ';\n' +
				 '--superbar-text-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-gradient-color")  + ';\n' +
				 '--superbar-text-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-gradient-color-hover")  + ';\n' +
				 '--superbar-text-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-foreground-color")  + ';\n' +
				 '--superbar-text-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-foreground-color-hover")  + ';\n' +
				 '--superbar-text-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-background-color-rgb")  + ';\n' +
				 '--superbar-text-background-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-background-color-hover-rgb")  + ';\n' +
				 '--superbar-text-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-foreground-color-rgb")  + ';\n' +
				 '--superbar-text-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--superbar-text-foreground-color-hover-rgb")  + ';\n' +
				// Body BG Settings
				 '--body-background-mode:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-mode")  + ';\n' +
				 '--body-background-horizontal-alignment:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-horizontal-alignment")  + ';\n' +
				 '--body-background-vertical-alignment:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-vertical-alignment")  + ';\n' +
				 '--body-background-size:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-size")  + ';\n' +
				 '--body-background-no-horizontal-tiling:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-no-horizontal-tiling")  + ';\n' +
				 '--body-background-no-vertical-tiling:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--body-background-no-vertical-tiling")  + ';\n' +
				 // Secondary Accent Color
				 '--secondary-accent-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-background-color")  + ';\n' +
				 '--secondary-accent-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-background-color-hover")  + ';\n' +
				 '--secondary-accent-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-fadeout-color")  + ';\n' +
				 '--secondary-accent-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-gradient-color")  + ';\n' +
				 '--secondary-accent-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-gradient-color-hover")  + ';\n' +
				 '--secondary-accent-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-foreground-color")  + ';\n' +
				 '--secondary-accent-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-foreground-color-hover")  + ';\n' +
				 '--secondary-accent-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-foreground-color-inverted")  + ';\n' +
				 '--secondary-accent-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-background-color-rgb")  + ';\n' +
				 '--secondary-accent-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-foreground-color-rgb")  + ';\n' +
				 '--secondary-accent-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--secondary-accent-foreground-color-hover-rgb")  + ';\n' +
				 // Page Color
				 '--page-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-background-color")  + ';\n' +
				 '--page-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-background-color-hover")  + ';\n' +
				 '--page-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-fadeout-color")  + ';\n' +
				 '--page-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-gradient-color")  + ';\n' +
				 '--page-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-gradient-color-hover")  + ';\n' +
				 '--page-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-foreground-color")  + ';\n' +
				 '--page-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-foreground-color-hover")  + ';\n' +
				 '--page-secondary-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-background-color")  + ';\n' +
				 '--page-secondary-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-background-color-hover")  + ';\n' +
				 '--page-secondary-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-fadeout-color")  + ';\n' +
				 '--page-secondary-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-gradient-color")  + ';\n' +
				 '--page-secondary-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-gradient-color-hover")  + ';\n' +

				 '--page-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-background-color-rgb")  + ';\n' +
				 '--page-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-foreground-color-rgb")  + ';\n' +
				 '--page-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-foreground-color-hover-rgb")  + ';\n' +
				 '--page-secondary-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-secondary-background-color-rgb")  + ';\n' +

				 // Page Border Color
				 '--page-border-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-background-color")  + ';\n' +
				 '--page-border-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-background-color-hover")  + ';\n' +
				 '--page-border-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-fadeout-color")  + ';\n' +
				 '--page-border-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-gradient-color")  + ';\n' +
				 '--page-border-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-gradient-color-hover")  + ';\n' +
				 '--page-border-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-foreground-color")  + ';\n' +
				 '--page-border-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-foreground-color-inverted")  + ';\n' +
				 '--page-border-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-foreground-color-hover")  + ';\n' +
				 '--page-border-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-background-color-rgb")  + ';\n' +
				 '--page-border-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-foreground-color-rgb")  + ';\n' +
				 '--page-border-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-border-foreground-color-hover-rgb")  + ';\n' +
				 // Page Text Color
				 '--page-text-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-background-color")  + ';\n' +
				 '--page-text-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-background-color-hover")  + ';\n' +
				 '--page-text-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-fadeout-color")  + ';\n' +
				 '--page-text-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-gradient-color")  + ';\n' +
				 '--page-text-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-gradient-color-hover")  + ';\n' +
				 '--page-text-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-foreground-color")  + ';\n' +
				 '--page-text-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-foreground-color-hover")  + ';\n' +
				 '--page-text-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-foreground-color-inverted")  + ';\n' +
				 '--page-text-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-background-color-rgb")  + ';\n' +
				 '--page-text-background-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-background-color-hover-rgb")  + ';\n' +
				 '--page-text-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-foreground-color-rgb")  + ';\n' +
				 '--page-text-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--page-text-foreground-color-hover-rgb")  + ';\n' +
				 // Accent Color
				 '--accent-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-background-color")  + ';\n' +
				 '--accent-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-background-color-hover")  + ';\n' +
				 '--accent-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-fadeout-color")  + ';\n' +
				 '--accent-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-gradient-color")  + ';\n' +
				 '--accent-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-gradient-color-hover")  + ';\n' +
				 '--accent-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-foreground-color")  + ';\n' +
				 '--accent-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-foreground-color-hover")  + ';\n' +
				 '--accent-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-foreground-color-inverted")  + ';\n' +
				 '--accent-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-background-color-rgb")  + ';\n' +
				 '--accent-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-foreground-color-rgb")  + ';\n' +
				 '--accent-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--accent-foreground-color-hover-rgb")  + ';\n' +
				 // Caret
				 '--caret-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-background-color")  + ';\n' +
				 '--caret-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-background-color-hover")  + ';\n' +
				 '--caret-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-fadeout-color")  + ';\n' +
				 '--caret-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-gradient-color")  + ';\n' +
				 '--caret-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-gradient-color-hover")  + ';\n' +
				 '--caret-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-foreground-color")  + ';\n' +
				 '--caret-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-foreground-color-hover")  + ';\n' +
				 '--caret-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-foreground-color-inverted")  + ';\n' +
				 '--caret-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-background-color-rgb")  + ';\n' +
				 '--caret-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-foreground-color-rgb")  + ';\n' +
				 '--caret-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--caret-foreground-color-hover-rgb")  + ';\n' +
				 // Alert
				 '--alert-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-background-color")  + ';\n' +
				 '--alert-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-background-color-hover")  + ';\n' +
				 '--alert-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-fadeout-color")  + ';\n' +
				 '--alert-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-gradient-color")  + ';\n' +
				 '--alert-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-gradient-color-hover")  + ';\n' +
				 '--alert-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-foreground-color")  + ';\n' +
				 '--alert-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-foreground-color-hover")  + ';\n' +
				 '--alert-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-foreground-color-inverted")  + ';\n' +
				 '--alert-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-background-color-rgb")  + ';\n' +
				 '--alert-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-foreground-color-rgb")  + ';\n' +
				 '--alert-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--alert-foreground-color-hover-rgb")  + ';\n' +
				 // Warning
				 '--warning-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-background-color")  + ';\n' +
				 '--warning-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-background-color-hover")  + ';\n' +
				 '--warning-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-fadeout-color")  + ';\n' +
				 '--warning-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-gradient-color")  + ';\n' +
				 '--warning-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-gradient-color-hover")  + ';\n' +
				 '--warning-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-foreground-color")  + ';\n' +
				 '--warning-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-foreground-color-hover")  + ';\n' +
				 '--warning-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-foreground-color-inverted")  + ';\n' +
				 '--warning-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-background-color-rgb")  + ';\n' +
				 '--warning-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-foreground-color-rgb")  + ';\n' +
				 '--warning-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--warning-foreground-color-hover-rgb")  + ';\n' +
				 // Success
				 '--success-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-background-color")  + ';\n' +
				 '--success-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-background-color-hover")  + ';\n' +
				 '--success-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-fadeout-color")  + ';\n' +
				 '--success-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-gradient-color")  + ';\n' +
				 '--success-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-gradient-color-hover")  + ';\n' +
				 '--success-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-foreground-color")  + ';\n' +
				 '--success-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-foreground-color-hover")  + ';\n' +
				 '--success-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-foreground-color-inverted")  + ';\n' +
				 '--success-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-background-color-rgb")  + ';\n' +
				 '--success-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-foreground-color-rgb")  + ';\n' +
				 '--success-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--success-foreground-color-hover-rgb")  + ';\n' +
				 // Message
				 '--message-background-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-background-color")  + ';\n' +
				 '--message-background-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-background-color-hover")  + ';\n' +
				 '--message-fadeout-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-fadeout-color")  + ';\n' +
				 '--message-gradient-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-gradient-color")  + ';\n' +
				 '--message-gradient-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-gradient-color-hover")  + ';\n' +
				 '--message-foreground-color:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-foreground-color")  + ';\n' +
				 '--message-foreground-color-hover:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-foreground-color-hover")  + ';\n' +
				 '--message-foreground-color-inverted:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-foreground-color-inverted")  + ';\n' +
				 '--message-background-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-background-color-rgb")  + ';\n' +
				 '--message-foreground-color-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-foreground-color-rgb")  + ';\n' +
				 '--message-foreground-color-hover-rgb:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--message-foreground-color-hover-rgb")  + ';\n' +
				 // Miscs
				 '--custom-secondary-font:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--custom-secondary-font")  + ';\n' +
				 '--border-radius:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--border-radius")  + ';\n' +
				 '--logo-filter:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--logo-filter")  + ';\n' +
				 '--logo-filter-hover:' + wordfilter2  + ';\n' +
				 '--logo-filter-duration:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--logo-filter-duration")  + ';\n' +
				 '--logo-filter-delay:' + getComputedStyle(document.querySelector('body')).getPropertyValue("--logo-filter-delay")  + ';\n' +
				 '}' // Ending
	} else { // For use with Theme Management
		result = '[theme="A"][visualcolors="standard"] {\n' + // Beginning
				 '--body-background-image:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-image")  + ';\n' +
				 '--body-background-image-opacity:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-image-opacity")  + ';\n' +
				 '--body-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-color")  + ';\n' +
				 '--superbar-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--superbar-text-background-color")  + ';\n' +
				 '--body-background-mode:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-mode")  + ';\n' +
				 '--body-background-horizontal-alignment:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--body-background-horizontal-alignment")  + ';\n' +
				 '--body-background-vertical-alignment:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-vertical-alignment")  + ';\n' +
				 '--body-background-size:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-size")  + ';\n' +
				 '--body-background-no-horizontal-tiling:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--body-background-no-horizontal-tiling")  + ';\n' +
				 '--body-background-no-vertical-tiling:' + getComputedStyle(document.querySelector('container')).getPropertyValue("--body-background-no-vertical-tiling")  + ';\n' +
				 '--secondary-accent-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--secondary-accent-background-color")  + ';\n' +
				 '--page-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-background-color")  + ';\n' +
				 '--page-border-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color")  + ';\n' +
				 '--page-text-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color")  + ';\n' +
				 '--accent-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--accent-background-color")  + ';\n' +
				 '--caret-background-color:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--caret-background-color")  + ';\n' +
				 '--custom-secondary-font:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--custom-secondary-font")  + ';\n' +
				 '--border-radius:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--border-radius")  + ';\n' +
				 '--logo-filter:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter")  + ';\n' +
				 '--logo-filter-hover:' + wordfilter2  + ';\n' +
				 '--logo-filter-duration:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-duration")  + ';\n' +
				 '--logo-filter-delay:' + getComputedStyle(document.querySelector('html')).getPropertyValue("--logo-filter-delay")  + ';\n' +
				 '}' // Ending
	}
	alert('Once you save the file, put the stylesheet contents to MediaWiki:Common.css for use in the wiki or upload it to any website.');
	DownloadData(result,'MyTheme','css');
}


/* Begin Color Parsers */
function ColorTestTwin(color1,color2,intensity=1,hue='nil') {
	var alpha = 0.5*intensity;
	if (hue === 'nil') {
		return chroma.mix(color1, color2, alpha, 'rgb');
	} else if (hue === -1) {
		return chroma.mix(color1, color2, alpha, 'rgb').set('hsl.s', 0).set('hsl.h', 0);
	} else {
		return chroma.mix(color1, color2, alpha, 'rgb').set('hsl.h', hue);
	}
}


function ColorTest(color,text=false,inv=false,dledlen=false) { // Regular Colors
	if (dledlen === true) {
		var color2 = GetPage();
	} else {
		var color2 = color;
	}
	var func = (isLightColor(color2));
	var light = chroma(color).get('hsl.l')
	if (func) {
		if (text === true) {
			if (inv === false) {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"); // Was #000000 and 0e191a
			} else {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color");
			}
		} else {
			if (inv === false) {
				return chroma(color).set('hsl.l', light-0.2);
			} else {
				return chroma(color).set('hsl.l', light+0.2);
			}
		}
	} else {
		if (text === true) {
			if (inv === true) {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"); // Was #000000 and 0e191a
			} else {
				return getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color");
			}
		} else {
			if (inv === true) {
				return chroma(color).set('hsl.l', light-0.2);
			} else {
				return chroma(color).set('hsl.l', light+0.2);
			}
		}
	}


}



function ColorInvert(color) {
	var r = 255 - chroma(color).get('rgb.r');
	var g = 255 - chroma(color).get('rgb.g');
	var b = 255 - chroma(color).get('rgb.b');
	var h = chroma(color).get('hsl.h');
	return chroma(color).set('rgb.r', r).set('rgb.g', g).set('rgb.b', b).set('hsl.h', h);
}



// Only used for link and header colors
function ColorTest2(color,text=false) {
	return Color2(ColorTest(color,text));
}

// Conversion for R,G,B syntax
function Color2(color) {
	return Math.round(chroma(color).get('rgb.r') ) + ',' + Math.round(chroma(color).get('rgb.g') ) + ',' + Math.round(chroma(color).get('rgb.b') );
}

function Color4(color) {
	return Math.round(chroma(color).get('rgb.r') ) + ' ' + Math.round(chroma(color).get('rgb.g') ) + ' ' + Math.round(chroma(color).get('rgb.b') );
}

function isLightColor(color) {
	var c1 = (chroma.contrast('#000000',  chroma(color)))
	var c2 = (chroma.contrast('#ffffff',  chroma(color)))
	var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 7 : 4.5
	var contrast2 = (window.matchMedia('(prefers-contrast: more)').matches) ? 3 : 4.5
	if (c1 > c2) {
		return (c1 >= contrast )
	} else {
		return (c2 < contrast2 )
	}
}

function isDarkColor(color) {
	return !isLightColor(color)
}

function isSuperLightColor(color) {
	var c1 = (chroma.contrast('#000000',  chroma(color)))
	var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 13 : 10
	return (c1 >= contrast )
}

function isSuperDarkColor(color) {
	var c1 = (chroma.contrast('#ffffff',  chroma(color)))
	var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 13 : 10
	return (c1 >= contrast )
}


function isSuitableColor(color,color2) {
var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 4.5 : 3
return ((chroma.contrast(color, color2)) >= contrast)
}

function isSuitableColor2(color,color2) {
var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 1.75 : 1.25
return ((chroma.contrast(color, color2)) >= contrast) // For Border Color
}

function isSuitableColor3(color,color2) {
var contrast = (window.matchMedia('(prefers-contrast: more)').matches) ? 4.5 : 3
return ((chroma.contrast(color, color2)) >= contrast)
}




/* End Color Parsers */

/* Used to udpate all dynamical variables */
function ColorUpdate(refresh=true) {
if (refresh === true) {
	var theme = window.MW18wikitheme;
	colortheme(theme, false,false);
	/** Foreground Colors 
	document.querySelector('html').style.setProperty("--light-theme-foreground-color-hover", ColorTest(getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color")) );
	document.querySelector('html').style.setProperty("--dark-theme-foreground-color-hover", ColorTest(getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color")) );

	document.querySelector('html').style.setProperty("--light-theme-foreground-color-rgb", Color2(getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color")) );
	document.querySelector('html').style.setProperty("--dark-theme-foreground-color-rgb", Color2(getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color")) );

	document.querySelector('html').style.setProperty("--light-theme-foreground-color-hover-rgb", Color2(ColorTest(getComputedStyle(document.querySelector('html')).getPropertyValue("--light-theme-foreground-color"))) );
	document.querySelector('html').style.setProperty("--dark-theme-foreground-color-hover-rgb", Color2(ColorTest(getComputedStyle(document.querySelector('html')).getPropertyValue("--dark-theme-foreground-color"))) );
	**/
}

/** Page BG **/
/* Set Vars */
// content_text is Content Color
// content_text4 is Text color of Content Color
// content_text5 is Dark text color of Content Color
// content_color is Content Bg
// dropdowncolor is Dropdown Bg
// dropdowncolor2 is Content Border

var content_color =  GetPageShort();

// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	var content_color = ColorInvert(content_color);
}

/* This goes before compiling Generic Colors or else they will think the theme is light */
	$('html').removeClass("theme-fandomdesktop-light").removeClass("theme-fandomdesktop-dark")
	if (window.MW18darkmode) {
		if (isLightColor( GetPageShort() )) {
			$('html').addClass("theme-fandomdesktop-dark");
		} else {
			$('html').addClass("theme-fandomdesktop-light");
		}
	} else {
		if (isDarkColor( GetPageShort() )) {
			$('html').addClass("theme-fandomdesktop-dark");
		} else {
			$('html').addClass("theme-fandomdesktop-light");
		}
	}



var content_color2 = ColorTest(content_color);

var adjustment = (window.matchMedia('(prefers-contrast: more)').matches) ? 0.35 : 0.25

	if (isLightColor(content_color)) {
		var dropdowncolor = ColorTestTwin(content_color,"#000000",adjustment);
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") === 'auto')  ) {
			var dropdowncolor2 = ColorTestTwin(content_color,"#000000",adjustment*2);
		} else {
			var dropdowncolor2 = GetPageBorder();
		}
	} else {
		var dropdowncolor = ColorTestTwin(content_color,"#ffffff",adjustment);
		if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") === 'auto')  ) {
			var dropdowncolor2 = ColorTestTwin(content_color,"#ffffff",adjustment*2);
		} else {
			var dropdowncolor2 = GetPageBorder();
		}
	}
var dropdowncolorH = ColorTest(dropdowncolor,false,false,true);



/** Page text color **/
var content_text= GetPageText();

if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-text-background-color") !== 'auto')  ) {
	// Liatch Quirk
	if ( (window.MW18darkmode === true) ) {
		var content_text = ColorInvert(content_text);
	}

		if ( !(isSuitableColor(content_text, content_color)) )  { // If still not legible
			var content_text= ColorTest(content_text,false,false,true);
			if ( !(isSuitableColor(content_text, content_color)) )  { // If still not legible
				var content_text= ColorTest(content_text,false,false,true);
				if ( !(isSuitableColor(content_text, content_color)) )  { // If still not legible
					var content_text= ColorTest(content_text,false,false,true);
					if ( !(isSuitableColor(content_text, content_color)) )  { // If still not legible
						var content_text= ColorTest(content_text,false,false,true);
					}
				}
			}
		}


}


var content_text1 = ColorTest(content_text,false,true,true);




/** Button Color **/
/* Set Vars */

var button_color = GetAccent();

// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	var button_color = ColorInvert(button_color);
}
		if ( !(isSuitableColor2(button_color, content_color)) )  { // If still not legible
			var button_color= ColorTest(button_color,false,false,true);
			if ( !(isSuitableColor2(button_color, content_color)) )  { // If still not legible
				var button_color= ColorTest(button_color,false,false,true);
				if ( !(isSuitableColor2(button_color, content_color)) )  { // If still not legible
					var button_color= ColorTest(button_color,false,false,true);
					if ( !(isSuitableColor2(button_color, content_color)) )  { // If still not legible
						var button_color= ColorTest(button_color,false,false,true);
					}
				}
			}
		}


var buttoncolor1 = ColorTest(button_color,false);


/** Link Color **/
/* Set Vars */
var link_color = GetSecondaryAccent();

// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
	var link_color = ColorInvert(link_color);
}
		if ( !(isSuitableColor(link_color, content_color)) )  { // If still not legible
			var link_color= ColorTest(link_color,false,false,true);
			if ( !(isSuitableColor(link_color, content_color)) )  { // If still not legible
				var link_color= ColorTest(link_color,false,false,true);
				if ( !(isSuitableColor(link_color, content_color)) )  { // If still not legible
					var link_color= ColorTest(link_color,false,false,true);
					if ( !(isSuitableColor(link_color, content_color)) )  { // If still not legible
						var link_color= ColorTest(link_color,false,false,true);
					}
				}
			}
		}

var linkcolor1 = ColorTest(link_color,false,false,true);



/** Content Border **/
/* Set Vars */

var border_color =	dropdowncolor2;

if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--page-border-background-color") != 'auto') ) { // Only run Liatch quirk if not in autocolorization
	// Liatch Quirk

	if ( (window.MW18darkmode === true) ) {
		var border_color = ColorInvert(border_color);
	}


		if ( !(isSuitableColor2(border_color, content_color)) )  { // If still not legible
			var border_color= ColorTest(border_color,false,false,true);
			if ( !(isSuitableColor2(border_color, content_color)) )  { // If still not legible
				var border_color= ColorTest(border_color,false,false,true);
				if ( !(isSuitableColor2(border_color, content_color)) )  { // If still not legible
					var border_color= ColorTest(border_color,false,false,true);
					if ( !(isSuitableColor2(border_color, content_color)) )  { // If still not legible
						var border_color= ColorTest(border_color,false,false,true);
					}
				}
			}
		}  else if ( (window.MW18darkmode === true) ) {
		}


}


var bordercolor1 = ColorTest(border_color);


/** Body Bg **/
/* Set Vars */

var head_color =	GetCommunity();

// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
		var head_color = ColorInvert(head_color);
}

var headcolor1 = ColorTest(head_color,false,false,true);

/** Community Header text color **/

var headertext_color= GetCommunityHeaderText();

if ((getComputedStyle(document.querySelector('html')).getPropertyValue("--superbar-text-background-color") !== 'auto')  ) {
	// Liatch Quirk
	if ( (window.MW18darkmode === true) ) {
		var headertext_color = ColorInvert(headertext_color);
	}


}

var headertextcolor1 = ColorTest(headertext_color,false,true,true);

/** Caret Color **/
/* Set Vars */
var caret_color = GetCaret();
// Liatch Quirk
if ( (window.MW18darkmode === true) ) {
		var caret_color = ColorInvert(caret_color);
}

var caretcolor1 = ColorTest(caret_color);



/** Alert Color **/
/* Set Vars */
var alert_color = BestAlertColor()[0];
var alertcolor1 = ColorTest(alert_color,false,false,true);




/** Warning Color **/
/* Set Vars */
var warning_color = BestAlertColor()[1];
var warningcolor1 = ColorTest(warning_color,false,false,true);



/** Success Color **/
/* Set Vars */
var success_color = BestAlertColor()[2];
var successcolor1 = ColorTest(success_color,false,false,true);


/** Message Color **/
/* Set Vars */
var message_color = BestAlertColor()[3];
var messagecolor1 = ColorTest(message_color,false,false,true);


if (['full','legacy'].includes(getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-mode"))) {
	var overlay = ['none', '100%'];
} else {
	var overlay = ['block', 'var(--header-size)'];
}

/* Set Values for dynamical variables */
	var result = 		  "--page-secondary-background-color:" + dropdowncolor + ";\n" + 
						  "--page-secondary-background-color-hover:" + dropdowncolorH + ";\n" + 
						  "--page-background-color-hover:" + content_color2 + ";\n" +
						  "--page-foreground-color:" + GetForegroundVariable(content_color) + ";\n" +
						  "--page-foreground-color-hover:" + GetForegroundVariable(content_color,true) + ";\n" + 
						  "--page-secondary-background-color-rgb:" + Color2(dropdowncolor) + ";\n" + 
						  "--page-background-color-rgb:" + Color2( content_color ) + ";\n" +
						  "--page-foreground-color-rgb:" + GetForegroundVariable2(content_color) + ";\n" +
						  "--page-foreground-color-hover-rgb:" + GetForegroundVariable2(content_color,true) + ";\n" + 
						  "--page-text-background-color-hover:" + content_text1 + ";\n" +
						  "--page-text-foreground-color:" + GetForegroundVariable(content_text) + ";\n" +
						  "--page-text-foreground-color-hover:" + GetForegroundVariable(content_text,true) + ";\n" +
						  "--page-text-foreground-color-inverted:" + GetForegroundVariable(content_text1) + ";\n" +
						  "--page-text-background-color-rgb:" + Color2( content_text ) + ";\n" +
						  "--page-text-background-color-hover-rgb:" + Color2(content_text1) + ";\n" +
						  "--page-text-foreground-color-rgb:" + GetForegroundVariable2(content_text) + ";\n" +
						  "--page-text-foreground-color-hover-rgb:" + GetForegroundVariable2(content_text,true) + ";\n" +
						  "--accent-background-color-hover:" + buttoncolor1 + ";\n" +
						  "--accent-foreground-color:" + GetForegroundVariable(button_color) + ";\n" +
						  "--accent-foreground-color-hover:" + GetForegroundVariable(button_color,true) + ";\n" +
						  "--accent-foreground-color-inverted:" + GetForegroundVariable(buttoncolor1) + ";\n" +
						  "--accent-background-color-rgb:" + Color2(button_color) + ";\n" +
						  "--accent-foreground-color-rgb:" + GetForegroundVariable2(button_color) + ";\n" +
						  "--accent-foreground-color-hover-rgb:" + GetForegroundVariable2(button_color,true) + ";\n" +
						  "--secondary-accent-background-color-hover:" + linkcolor1 + ";\n" +
						  "--secondary-accent-foreground-color:" + GetForegroundVariable(link_color) + ";\n" +
						  "--secondary-accent-foreground-color-hover:" + GetForegroundVariable(link_color,true) + ";\n" +
						  "--secondary-accent-foreground-color-inverted:" + GetForegroundVariable(linkcolor1) + ";\n" +
						  "--secondary-accent-background-color-rgb:" + Color2(link_color) + ";\n" +
						  "--secondary-accent-foreground-color-rgb:" + GetForegroundVariable2(link_color) + ";\n" +
						  "--secondary-accent-foreground-color-hover-rgb:" + GetForegroundVariable2(link_color,true) + ";\n" +
						  "--page-border-background-color-hover:" + bordercolor1 + ";\n" +
						  "--page-border-foreground-color:" + GetForegroundVariable(border_color) + ";\n" +
						  "--page-border-foreground-color-hover:" + GetForegroundVariable(border_color,true) + ";\n" +
						  "--page-border-foreground-color-inverted:" + GetForegroundVariable(bordercolor1) + ";\n" +
						  "--page-border-background-color-rgb:" + Color2(border_color) + ";\n" +
						  "--page-border-foreground-color-rgb:" + GetForegroundVariable2(border_color) + ";\n" +
						  "--page-border-foreground-color-hover-rgb:" + GetForegroundVariable2(border_color,true) + ";\n" +
						  "--body-background-color-hover:" + headcolor1 + ";\n" +
						  "--body-foreground-color:" + GetForegroundVariable(head_color) + ";\n" +
						  "--body-foreground-color-hover:" + GetForegroundVariable(head_color,true) + ";\n" +
						  "--body-foreground-color-inverted:" + GetForegroundVariable(headcolor1) + ";\n" +
						  "--body-background-color-rgb:" + Color2(head_color) + ";\n" +
						  "--body-foreground-color-rgb:" + GetForegroundVariable2(head_color) + ";\n" +
						  "--body-foreground-color-hover-rgb:" + GetForegroundVariable2(head_color,true) + ";\n" +
						  "--superbar-text-background-color-hover:" + headertextcolor1 + ";\n" +
						  "--superbar-text-foreground-color:" + GetForegroundVariable(headertext_color) + ";\n" +
						  "--superbar-text-foreground-color-hover:" + GetForegroundVariable(headertext_color,true) + ";\n" +
						  "--superbar-text-foreground-color-inverted:" + GetForegroundVariable(headertextcolor1) + ";\n" +
						  "--superbar-text-background-color-rgb:" + Color2( headertext_color ) + ";\n" +
						  "--superbar-text-background-color-hover-rgb:" + Color2(headertextcolor1) + ";\n" +
						  "--superbar-text-foreground-color-rgb:" + GetForegroundVariable2(headertext_color) + ";\n" +
						  "--superbar-text-foreground-color-hover-rgb:" + GetForegroundVariable2(headertext_color,true) + ";\n" +
						  "--caret-background-color-hover:" + caretcolor1 + ";\n" +
						  "--caret-foreground-color:" + GetForegroundVariable(caret_color) + ";\n" +
						  "--caret-foreground-color-hover:" + GetForegroundVariable(caret_color,true) + ";\n" +
						  "--caret-foreground-color-inverted:" + GetForegroundVariable(caretcolor1) + ";\n" +
						  "--caret-background-color-rgb:" + Color2( caret_color ) + ";\n" +
						  "--caret-foreground-color-rgb:" + GetForegroundVariable2(caret_color) + ";\n" +
						  "--caret-foreground-color-hover-rgb:" + GetForegroundVariable2(caret_color,true) + ";\n" +
						  "--alert-background-color:" + alert_color + "!important;\n" +
						  "--alert-background-color-hover:" + alertcolor1 + "!important;\n" +
						  "--alert-gradient-color:" + GetGradientVariable(content_color,'alert')[0] + "!important;\n" +
						  "--alert-gradient-color-hover:" + GetGradientVariable(content_color,'alert')[1] + "!important;\n" +
						  "--alert-foreground-color:" + GetForegroundVariable(alert_color) + "!important;\n" +
						  "--alert-foreground-color-hover:" + GetForegroundVariable(alert_color,true) + "!important;\n" +
						  "--alert-foreground-color-inverted:" + GetForegroundVariable(alertcolor1) + "!important;\n" +
						  "--alert-background-color-rgb:" + Color2(alert_color) + "!important;\n" +
						  "--alert-foreground-color-rgb:" + GetForegroundVariable2(alert_color) + "!important;\n" +
						  "--alert-foreground-color-hover-rgb:" + GetForegroundVariable2(alert_color,true) + "!important;\n" +
						  "--warning-background-color:" + warning_color + "!important;\n" +
						  "--warning-background-color-hover:" + warningcolor1 + "!important;\n" +
						  "--warning-gradient-color:" + GetGradientVariable(content_color,'warning')[0] + "!important;\n" +
						  "--warning-gradient-color-hover:" + GetGradientVariable(content_color,'warning')[1] + "!important;\n" +
						  "--warning-foreground-color:" + GetForegroundVariable(warning_color) + "!important;\n" +
						  "--warning-foreground-color-hover:" + GetForegroundVariable(warning_color,true) + "!important;\n" +
						  "--warning-foreground-color-inverted:" + GetForegroundVariable(warningcolor1) + "!important;\n" +
						  "--warning-background-color-rgb:" + Color2(warning_color) + "!important;\n" +
						  "--warning-foreground-color-rgb:" + GetForegroundVariable2(warning_color) + "!important;\n" +
						  "--warning-foreground-color-hover-rgb:" + GetForegroundVariable2(warning_color,true) + "!important;\n" +
						  "--success-background-color:" + success_color + "!important;\n" +
						  "--success-background-color-hover:" + successcolor1 + "!important;\n" +
						  "--success-gradient-color:" + GetGradientVariable(content_color,'success')[0] + "!important;\n" +
						  "--success-gradient-color-hover:" + GetGradientVariable(content_color,'success')[1] + "!important;\n" +
						  "--success-foreground-color:" + GetForegroundVariable(success_color) + "!important;\n" +
						  "--success-foreground-color-hover:" + GetForegroundVariable(success_color,true) + "!important;\n" +
						  "--success-foreground-color-inverted:" + GetForegroundVariable(successcolor1) + "!important;\n" +
						  "--success-background-color-rgb:" + Color2(success_color) + "!important;\n" +
						  "--success-foreground-color-rgb:" + GetForegroundVariable2(success_color) + "!important;\n" +
						  "--success-foreground-color-hover-rgb:" + GetForegroundVariable2(success_color,true) + "!important;\n" +
						  "--message-background-color:" + message_color + "!important;\n" +
						  "--message-background-color-hover:" + messagecolor1 + "!important;\n" +
						  "--message-gradient-color:" + GetGradientVariable(content_color,'message')[0] + "!important;\n" +
						  "--message-gradient-color-hover:" + GetGradientVariable(content_color,'message')[1] + "!important;\n" +
						  "--message-foreground-color:" + GetForegroundVariable(message_color) + "!important;\n" +
						  "--message-foreground-color-hover:" + GetForegroundVariable(message_color,true) + "!important;\n" +
						  "--message-foreground-color-inverted:" + GetForegroundVariable(messagecolor1) + "!important;\n" +
						  "--message-background-color-rgb:" + Color2(message_color) + "!important;\n" +
						  "--message-foreground-color-rgb:" + GetForegroundVariable2(message_color) + "!important;\n" +
						  "--message-foreground-color-hover-rgb:" + GetForegroundVariable2(message_color,true) + "!important;\n"

/* Set Values for color-adjusted and Gradient variables */
	var result2 = 		  "--page-background-color:" + content_color + ";\n" +
						  "--page-gradient-color:" + GetGradientVariable(content_color,'page')[0] + ";\n" +
						  "--page-gradient-color-hover:" + GetGradientVariable(content_color,'page')[1] + ";\n" +
						  "--page-secondary-gradient-color:" + GetGradientVariable(content_color,'page-secondary')[0] + ";\n" +
						  "--page-secondary-gradient-color-hover:" + GetGradientVariable(content_color,'page-secondary')[1] + ";\n" +
						  "--page-text-background-color:" + content_text + ";\n" +
						  "--page-text-gradient-color:" + GetGradientVariable2(content_color,'page-text')[0] + ";\n" +
						  "--page-text-gradient-color-hover:" + GetGradientVariable2(content_color,'page-text')[1] + ";\n" +
						  "--accent-background-color:" + button_color + ";\n" +
						  "--accent-gradient-color:" + GetGradientVariable(button_color,'accent')[0] + ";\n" +
						  "--accent-gradient-color-hover:" + GetGradientVariable(button_color,'accent')[1] + ";\n" +
						  "--secondary-accent-background-color:" + link_color + ";\n" +
						  "--secondary-accent-gradient-color:" + GetGradientVariable(content_color,'secondary-accent')[0] + ";\n" +
						  "--secondary-accent-gradient-color-hover:" + GetGradientVariable(content_color,'secondary-accent')[1] + ";\n" +
						  "--page-border-background-color:" + border_color + ";\n" +
						  "--page-border-gradient-color:" + GetGradientVariable(border_color,'page-border')[0] + ";\n" +
						  "--page-border-gradient-color-hover:" + GetGradientVariable(border_color,'page-border')[1] + ";\n" +
						  "--body-background-color:" + head_color + ";\n" +
						  "--body-gradient-color:" + GetGradientVariable(content_color,'body')[0] + ";\n" +
						  "--body-gradient-color-hover:" + GetGradientVariable(content_color,'body')[1] + ";\n" +
						  "--superbar-text-background-color:" + headertext_color + ";\n" +
						  "--superbar-text-gradient-color:" + GetGradientVariable2(content_color,'superbar-text')[0] + ";\n" +
						  "--superbar-text-gradient-color-hover:" + GetGradientVariable2(content_color,'superbar-text')[1] + ";\n" +
						  "--caret-background-color:" + caret_color + ";\n" +
						  "--caret-gradient-color:" + GetGradientVariable(caret_color,'caret')[0] + ";\n" +
						  "--caret-gradient-color-hover:" + GetGradientVariable(caret_color,'caret')[1] + ";\n" +
						  "--bg-size:" + ['cover','contain','100% 100%','auto'][["cover", "contain", "stretched", "full"].indexOf( getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-size") ) ] + ";\n" +
						  "--bg-tile-x:" + ['repeat','no-repeat'][["false", "true"].indexOf( getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-no-horizontal-tiling") ) ] + ";\n" +
						  "--bg-tile-y:" + ['repeat','no-repeat'][["false", "true"].indexOf( getComputedStyle(document.querySelector('html')).getPropertyValue("--body-background-no-vertical-tiling") ) ] + ";\n" +
						  "--bg-overlay-display:" + overlay[0] + ";\n" +
						  "--bg-overlay-size:" + overlay[1] + ";\n" +
						  "--invertion-filter:" + ['none','invert(1) hue-rotate(180deg)'][[false, true].indexOf(window.MW18darkmode) ] + ";\n"


/* Write them to the stylesheet */
$("head .theming").html(':root {\n' + result + '}\n' + 'body {\n' + result2 + '}');



}

/* Toggles Theme */
function HCa() {
    var x = document.querySelector('html');
		$('html').attr('theme','A');
		ColorUpdate(true);
		insertKey('theme-selected', 'A' );
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li").removeClass('selected');
		$(".cpe-dropdown .cpe-dropdown__content .cpe-themes li[data-theme-change='theme-" + getKey('theme-selected') + "']").addClass('selected');
}

function HCb() {
    var x = document.querySelector('html');
		$('html').attr('theme','B');
		ColorUpdate(true);
		insertKey('theme-selected', 'B' );
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li").removeClass('selected');
		$(".cpe-dropdown .cpe-dropdown__content .cpe-themes li[data-theme-change='theme-" + getKey('theme-selected') + "']").addClass('selected');
}

function HCc() {
    var x = document.querySelector('html');
		$('html').attr('theme','C');
		ColorUpdate(true);
		insertKey('theme-selected', 'C' );
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li").removeClass('selected');
		$(".cpe-dropdown .cpe-dropdown__content .cpe-themes li[data-theme-change='theme-" + getKey('theme-selected') + "']").addClass('selected');
}

function HCd() {
    var x = document.querySelector('html');
		$('html').attr('theme','D');
		ColorUpdate(true);
		insertKey('theme-selected', 'D' );
		$(".cpe-dropdown .cpe-dropdown__content .cpe-list.cpe-themes li").removeClass('selected');
		$(".cpe-dropdown .cpe-dropdown__content .cpe-themes li[data-theme-change='theme-" + getKey('theme-selected') + "']").addClass('selected');
}