(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/Asset3leaf80.png", id:"Asset3leaf80"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Asset3leaf80 = function() {
	this.initialize(img.Asset3leaf80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,923,1017);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset3leaf80();
	this.instance.setTransform(782.7,0,0.848,0.74,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,782.7,752.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset3leaf80();
	this.instance.setTransform(0,0,0.853,0.74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,787.2,752.6);


// stage content:
(lib.leaf = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(920.4,467.8,1,1,0,0,0,391.3,420.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:376.3,x:939.2,y:423.7},0).wait(1).to({x:958},0).wait(1).to({x:976.8},0).wait(1).to({x:995.6},0).wait(1).to({x:1014.4},0).wait(1).to({x:1033.2},0).wait(1).to({x:1052},0).wait(1).to({x:1070.8},0).wait(1).to({x:1089.6},0).wait(1).to({x:1108.5},0).wait(1).to({x:1127.3},0).wait(1).to({x:1146.1},0).wait(1).to({x:1164.9},0).wait(1).to({x:1183.7},0).wait(1).to({x:1202.5},0).wait(1).to({x:1221.3},0).wait(1).to({x:1240.1},0).wait(1).to({x:1258.9},0).wait(1).to({x:1277.8},0).wait(1).to({x:1296.6},0).wait(1).to({x:1315.4},0).wait(1).to({x:1334.2},0).wait(1).to({x:1353},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(361.9,423.7,1,1,0,0,0,393.6,376.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:341.5},0).wait(1).to({x:321.1},0).wait(1).to({x:300.8},0).wait(1).to({x:280.4},0).wait(1).to({x:260},0).wait(1).to({x:239.6},0).wait(1).to({x:219.3},0).wait(1).to({x:198.9},0).wait(1).to({x:178.5},0).wait(1).to({x:158.1},0).wait(1).to({x:137.7},0).wait(1).to({x:117.4},0).wait(1).to({x:97},0).wait(1).to({x:76.6},0).wait(1).to({x:56.2},0).wait(1).to({x:35.8},0).wait(1).to({x:15.5},0).wait(1).to({x:-4.9},0).wait(1).to({x:-25.3},0).wait(1).to({x:-45.7},0).wait(1).to({x:-66},0).wait(1).to({x:-86.4},0).wait(1).to({x:-106.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(608.3,447.4,1343.5,752.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;