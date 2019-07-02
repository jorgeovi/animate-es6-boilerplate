(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.cat0 = function() {
	this.initialize(img.cat0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.cat1 = function() {
	this.initialize(img.cat1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.cat2 = function() {
	this.initialize(img.cat2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.cat3 = function() {
	this.initialize(img.cat3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.cat4 = function() {
	this.initialize(img.cat4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.dog0 = function() {
	this.initialize(img.dog0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.dog1 = function() {
	this.initialize(img.dog1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.dog2 = function() {
	this.initialize(img.dog2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.dog3 = function() {
	this.initialize(img.dog3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.dog4 = function() {
	this.initialize(img.dog4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mcEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.mcEmpty, null, null);


(lib.mcDog4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dog4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDog4, new cjs.Rectangle(0,0,960,540), null);


(lib.mcDog3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dog3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDog3, new cjs.Rectangle(0,0,960,540), null);


(lib.mcDog2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dog2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDog2, new cjs.Rectangle(0,0,960,540), null);


(lib.mcDog1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dog1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDog1, new cjs.Rectangle(0,0,960,540), null);


(lib.mcDog0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dog0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDog0, new cjs.Rectangle(0,0,960,540), null);


(lib.mcCat4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cat4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCat4, new cjs.Rectangle(0,0,960,540), null);


(lib.mcCat3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cat3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCat3, new cjs.Rectangle(0,0,960,540), null);


(lib.mcCat2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cat2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCat2, new cjs.Rectangle(0,0,960,540), null);


(lib.mcCat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cat1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCat1, new cjs.Rectangle(0,0,960,540), null);


(lib.mcCat0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.cat0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcCat0, new cjs.Rectangle(0,0,960,540), null);


(lib.mcButton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.text = new cjs.Text("I LIKE DOGS", "normal 400 15px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(68,2);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6hUIT1AAQAeAAAAAeIAABtQAAAegeAAIz1AAQgeAAAAgeIAAhtQAAgeAeAAg");
	this.shape.setTransform(67.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ap6BVQgeAAAAgeIAAhtQAAgeAeAAIT1AAQAeAAAAAeIAABtQAAAegeAAg");
	this.shape_1.setTransform(67.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcButton2, new cjs.Rectangle(0,0,136,23.9), null);


(lib.mcButton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.text = new cjs.Text("I LIKE CATS", "normal 400 15px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(68,2);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6hUIT1AAQAeAAAAAeIAABtQAAAegeAAIz1AAQgeAAAAgeIAAhtQAAgeAeAAg");
	this.shape.setTransform(67.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ap6BVQgeAAAAgeIAAhtQAAgeAeAAIT1AAQAeAAAAAeIAABtQAAAegeAAg");
	this.shape_1.setTransform(67.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcButton1, new cjs.Rectangle(0,0,136,23.9), null);


(lib.mcMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.buttonDog = new lib.mcButton2();
	this.buttonDog.name = "buttonDog";
	this.buttonDog.parent = this;
	this.buttonDog.setTransform(227,22,1,1,0,0,0,68,12);

	this.buttonCat = new lib.mcButton1();
	this.buttonCat.name = "buttonCat";
	this.buttonCat.parent = this;
	this.buttonCat.setTransform(81,22,1,1,0,0,0,68,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttonCat},{t:this.buttonDog}]}).wait(1));

	// decoration
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("A4hDhQgeAAAAgdIAAmGQAAgeAeAAMAxDAAAQAeAAAAAeIAAGGQAAAdgeAAg");
	this.shape.setTransform(160,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// picture container
	this.mcEmpty = new lib.mcEmpty();
	this.mcEmpty.name = "mcEmpty";
	this.mcEmpty.parent = this;
	this.mcEmpty.setTransform(8.5,8.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.mcEmpty).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcMain, new cjs.Rectangle(0,0,320,45), null);


(lib.mcExport = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dog4.jpg
	this.instance = new lib.mcDog4();
	this.instance.parent = this;
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dog3.jpg
	this.instance_1 = new lib.mcDog3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dog2.jpg
	this.instance_2 = new lib.mcDog2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dog1.jpg
	this.instance_3 = new lib.mcDog1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dog0.jpg
	this.instance_4 = new lib.mcDog0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cat4.jpg
	this.instance_5 = new lib.mcCat4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// cat3.jpg
	this.instance_6 = new lib.mcCat3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// cat2.jpg
	this.instance_7 = new lib.mcCat2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// cat1.jpg
	this.instance_8 = new lib.mcCat1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// cat0.jpg
	this.instance_9 = new lib.mcCat0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcExport, new cjs.Rectangle(0,0,960,540), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{app:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(21));

	// export
	this.instance = new lib.mcExport();
	this.instance.parent = this;
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},1).wait(10));

	// app
	this.mcMain = new lib.mcMain();
	this.mcMain.name = "mcMain";
	this.mcMain.parent = this;
	this.mcMain._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcMain).wait(9).to({_off:false},0).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'DA793609A84AFE4CAE5B10AE44726F6F',
	width: 960,
	height: 540,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cat0.jpg", id:"cat0"},
		{src:"images/cat1.jpg", id:"cat1"},
		{src:"images/cat2.jpg", id:"cat2"},
		{src:"images/cat3.jpg", id:"cat3"},
		{src:"images/cat4.jpg", id:"cat4"},
		{src:"images/dog0.jpg", id:"dog0"},
		{src:"images/dog1.jpg", id:"dog1"},
		{src:"images/dog2.jpg", id:"dog2"},
		{src:"images/dog3.jpg", id:"dog3"},
		{src:"images/dog4.jpg", id:"dog4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DA793609A84AFE4CAE5B10AE44726F6F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;