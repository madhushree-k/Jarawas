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
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Asset4leaf80 = function() {
	this.spriteSheet = ss["leaf2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset5leaf80 = function() {
	this.spriteSheet = ss["leaf2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset6leaf80 = function() {
	this.spriteSheet = ss["leaf2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset4leaf80();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,662,689);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset6leaf80();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,923,611);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset5leaf80();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726,785);


// stage content:
(lib.leaf2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.backgroundColor="rgba(0,0,0,0)";
		
		document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(917,432.5,1,1,0,0,0,363,392.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.7,x:926.9,y:431.7},0).wait(1).to({rotation:3.5,x:936.8,y:431},0).wait(1).to({rotation:5.2,x:946.8,y:430.1},0).wait(1).to({rotation:6.9,x:956.7,y:429.4},0).wait(1).to({rotation:8.7,x:966.6,y:428.6},0).wait(1).to({rotation:10.4,x:976.5,y:427.9},0).wait(1).to({rotation:12.2,x:986.4,y:427.1},0).wait(1).to({rotation:13.9,x:996.3,y:426.3},0).wait(1).to({rotation:15.6,x:1006.2,y:425.5},0).wait(1).to({rotation:17.4,x:1016.2,y:424.7},0).wait(1).to({rotation:19.1,x:1026.1,y:423.9},0).wait(1).to({rotation:20.8,x:1036,y:423.2},0).wait(1).to({rotation:22.6,x:1045.9,y:422.4},0).wait(1).to({rotation:24.3,x:1055.8,y:421.6},0).wait(1).to({rotation:26.1,x:1065.7,y:420.8},0).wait(1).to({rotation:27.8,x:1075.6,y:420},0).wait(1).to({rotation:29.5,x:1085.5,y:419.3},0).wait(1).to({rotation:31.3,x:1095.5,y:418.5},0).wait(1).to({rotation:33,x:1105.4,y:417.7},0).wait(1).to({rotation:34.7,x:1115.3,y:416.9},0).wait(1).to({rotation:36.5,x:1125.2,y:416.1},0).wait(1).to({rotation:38.2,x:1135.1,y:415.3},0).wait(1).to({rotation:40,x:1145.1,y:414.6},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(842.7,502.3,1,1,0,0,0,473.4,284.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:461.5,regY:305.5,rotation:2.6,x:839.9,y:519.7},0).wait(1).to({rotation:5.2,x:849.1,y:516.1},0).wait(1).to({rotation:7.8,x:858.3,y:512.4},0).wait(1).to({rotation:10.4,x:867.5,y:508.7},0).wait(1).to({rotation:13,x:876.8,y:505},0).wait(1).to({rotation:15.7,x:886.1,y:501.2},0).wait(1).to({rotation:18.3,x:895.4,y:497.4},0).wait(1).to({rotation:20.9,x:904.7,y:493.5},0).wait(1).to({rotation:23.5,x:914.2,y:489.6},0).wait(1).to({rotation:26.1,x:923.6,y:485.7},0).wait(1).to({rotation:28.7,x:933.1,y:481.9},0).wait(1).to({rotation:31.3,x:942.6,y:477.9},0).wait(1).to({rotation:33.9,x:952.2,y:473.9},0).wait(1).to({rotation:36.5,x:961.8,y:469.9},0).wait(1).to({rotation:39.1,x:971.5,y:465.9},0).wait(1).to({rotation:41.7,x:981.2,y:461.8},0).wait(1).to({rotation:44.3,x:990.9,y:457.7},0).wait(1).to({rotation:47,x:1000.8,y:453.6},0).wait(1).to({rotation:49.6,x:1010.6,y:449.6},0).wait(1).to({rotation:52.2,x:1020.5,y:445.5},0).wait(1).to({rotation:54.8,x:1030.5,y:441.3},0).wait(1).to({rotation:57.4,x:1040.5,y:437.3},0).wait(1).to({rotation:60,x:1050.6,y:433.1},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(949,317.5,1,1,0,0,0,331,344.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:1.7,x:962.5,y:317.9},0).wait(1).to({rotation:3.4,x:976,y:318.2},0).wait(1).to({rotation:5.1,x:989.4,y:318.5},0).wait(1).to({rotation:6.9,x:1002.9,y:318.8},0).wait(1).to({rotation:8.6,x:1016.4,y:319.1},0).wait(1).to({rotation:10.3,x:1029.9,y:319.3},0).wait(1).to({rotation:12,x:1043.3,y:319.7},0).wait(1).to({rotation:13.7,x:1056.8,y:320},0).wait(1).to({rotation:15.4,x:1070.3,y:320.3},0).wait(1).to({rotation:17.1,x:1083.8,y:320.6},0).wait(1).to({rotation:18.9,x:1097.3,y:320.9},0).wait(1).to({rotation:20.6,x:1110.8,y:321.2},0).wait(1).to({rotation:22.3,x:1124.3,y:321.5},0).wait(1).to({rotation:24,x:1137.7,y:321.8},0).wait(1).to({rotation:25.7,x:1151.2,y:322.1},0).wait(1).to({rotation:27.4,x:1164.7,y:322.4},0).wait(1).to({rotation:29.1,x:1178.1,y:322.7},0).wait(1).to({rotation:30.9,x:1191.6,y:323},0).wait(1).to({rotation:32.6,x:1205.1,y:323.3},0).wait(1).to({rotation:34.3,x:1218.6,y:323.6},0).wait(1).to({rotation:36,x:1232.1,y:323.9},0).wait(1).to({rotation:37.7,x:1245.5,y:324.2},0).wait(1).to({rotation:39.4,x:1259.1,y:324.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1009.3,373,923,855.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;