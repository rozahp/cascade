//------------------------------------------------------------------------------
//
// Cascade 1733 Archeology Intro
//
// Copyright (c) 2017 Cascade 1733 Sweden Section
//
// Code:   Phazor
// Music:  Skimmer
// Gfx:    Lester
// Ripp:   Phazor (ripping old Cascade stuff)
//
// Others:
//
// Font: Amiga Topaz from www.trueschool.se
//
//------------------------------------------------------------------------------

// MAIN BITMAP

var mycanvas;

// MODPLAYER

var modplayer = new music("MK");

// STARTFIELD

var my2dstarfield;
var my2dstarsparams=[
    {nb:70, speedy:0.1, speedx:0.9, color:'#DDDDDD', size:2},
    {nb:70, speedy:0.2, speedx:0.8, color:'#777777', size:2},
    {nb:70, speedy:0.3, speedx:0.7, color:'#333333', size:2},
];

// LOGO & FX

var mylogo1image=new image('media/cascade-cool-production.png');
var mylogo2image=new image('media/cascade-vector-demo-logo.png');
var mylogo1canvas;
var mylogo2canvas;
var mylogo1fx;
var mylogo2fx;
var mylogo1fxparam=[
     {value: 0, amp: 0,   inc:0.05,  offset: -0.04},
     {value: 0, amp: 0,  inc:0.018, offset: 0.02},
];
var mylogo2fxparam=[
     {value: 0, amp: 2,   inc:0.05,  offset: -0.04},
     {value: 0, amp: 30,   inc:0.018, offset: 0.02},
];

// FONT & SCROLL

var myscroll1font = new image('media/cascade-rising-font1.png');
myscroll1font.initTile(16,16,32);
var myscroll2font = new image('media/amiga-scrollfont.png');
myscroll2font.initTile(8,16,32);
var myscroll3font = new image('media/amiga-scrollfont-gold.png');
myscroll3font.initTile(8,16,32);

var myscroll1text;
var myscroll2text;
var myscroll3text;

var myscroll1fxcanvas;
var myscroll1gradcanvas;
var myscroll2fxcanvas;

var myscroll1fx;
var myscroll2fx;

var myscroll1fxparam = [
    {value: 0, amp: 20,  inc:0.03, offset: -0.05},
    {value: 0, amp: 50,  inc:0.01, offset: -0.04},
];

var myscroll2fxparam = [
    {value: 0, amp: 20,  inc:0.03, offset: -0.05},
    {value: 0, amp: 40,  inc:0.01, offset: -0.04},
];

var myscroll1grad;
var myscroll1gradcolor=[
    {color: 'rgb(0,0,0)' ,  offset:0},
    {color: 'rgb(0,0,255)' ,  offset:0.25},
    {color: 'rgb(0,255,255)' ,  offset:0.50},
    {color: 'rgb(255,0,255)' ,  offset:0.75},
    {color: 'rgb(0,0,0)' ,  offset:1}
];

var myscroll2grad;
var myscroll2gradcolor=[
    //{color: 'rgb(0,0,0)' ,  offset:0},
    {color: 'rgb(0,0,0)' ,  offset:0.25},
    {color: 'rgb(255,255,0)' ,  offset:0.40},
    {color: 'rgb(255,0,255)' ,  offset:0.75},
    {color: 'rgb(0,0,0)' ,  offset:1}
];

// 3D STUFF

var my3d;
var myobj = new Array();
var myobjvert = new Array();

myobjvert=[
    {x:-200, y: 200, z: 200},
    {x:-200, y:-200, z: 200},
    {x: 200, y:-200, z: 200},
    {x: 200, y: 200, z: 200},
    {x: 200, y: 200, z:-200},
    {x: 200, y:-200, z:-200},
    {x:-200, y:-200, z:-200},
    {x:-200, y: 200, z:-200},
];

myobj=[
    {p1:0, p2:1, p3:2, p4:3, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
    {p1:3, p2:2, p3:5, p4:4, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
    {p1:7, p2:6, p3:1, p4:0, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
    {p1:7, p2:0, p3:3, p4:4, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
    {p1:1, p2:6, p3:5, p4:2, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
    {p1:4, p2:5, p3:6, p4:7, params:new MeshLambertMaterial({ color: 0x2222ff, shading: FlatShading})},
];

//
// COOPER COLORS
//

var mygrad;
var mygradcolor=[
    {color: 'rgb(0,0,0)' ,  offset:0},
    {color: 'rgb(0,0,0)' ,  offset:0.75},
    {color: 'rgb(0,0,0)' ,  offset:1}
];
var mygradcolorshift=[0,0,0];

var mygradcolorarray = new Array();

mygradcolorarray = [
  {rgb:[0,0,0], pos:2,adder:"p"},
  {rgb:[0,0,50],pos:0,adder:"p"},
  {rgb:[50,0,50],pos:1,adder:"p"},
  {rgb:[50,50,50],pos:2,adder:"n"},
  {rgb:[50,50,0],pos:1,adder:"n"},
  {rgb:[50,0,0],pos:0,adder:"n"},
  {rgb:-1,pos:-1,adder:"nada"}
];

var mygradcolorpos = 0;
var mygradcolorPointer = 0;
var mygradcolorAdder = 0;

//
// SHIFT COOPER
//

function shiftCooper() {
  if (mygradcolorarray[mygradcolorpos].rgb[0] == mygradcolorshift[0] &&
      mygradcolorarray[mygradcolorpos].rgb[1] == mygradcolorshift[1] &&
      mygradcolorarray[mygradcolorpos].rgb[2] == mygradcolorshift[2]) {
        mygradcolorPointer=mygradcolorarray[mygradcolorpos].pos;
        mygradcolorAdder=mygradcolorarray[mygradcolorpos].adder;
        mygradcolorpos=mygradcolorpos + 1;
        if (mygradcolorarray[mygradcolorpos].rgb==-1) {
          mygradcolorpos=0;
        }
    } else {
      if (mygradcolorAdder=="p") {
        mygradcolorshift[mygradcolorPointer]+=1;
      } else {
        mygradcolorshift[mygradcolorPointer]-=1;
      }
    }
};

//
// CHECK KEYBOARD
//

var checkKeyWait = 0;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == 32) {
        if (checkKeyWait > 0) {
            return;
        }
        checkKeyWait=300;
        changeMusic();
    }
};

//
// CHANGE MUSIC
//

var CascadeModListPointer = 0;

function changeMusic() {
    CascadeModListPointer+=1;
    if (CascadeModListPointer>CascadeModList.length-1) {
        CascadeModListPointer=0;
    }
    //console.log(CascadeModListPointer)

    //
    // CHANGE MODULE
    //
    modplayer.loader.player.stop();
    modplayer.loader.player.reset();
    modplayer.LoadAndRun('mods/'+CascadeModList[CascadeModListPointer].file);

    //myscroll2text = new scrolltext_vertical();
    myscroll2text.scrtxt=CascadeScrollText2Start+CascadeModList[CascadeModListPointer].text + CascadeScrollText2Ending;
    myscroll2text.scroffset=0;
    myscroll2text.speed=3;

};

//
// FULLSCREEN FUNCTION
//

function fullscr(elemId) {
    var elem = document.getElementById(elemId);
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
};


//
// DECRUNCH INTRO
//
var myAmigaDecrunch;

function decrunch_intro() {
    if (myAmigaDecrunch.finished != 1) {
        myAmigaDecrunch.doDecrunch(mycanvas);
        requestAnimFrame( decrunch_intro );
    } else {
        init_before_go();
    }
};

//========================
//
// INIT ROUTINES
//
//=========================

function init(){
    mycanvas=new canvas(640,480,"main");
    myAmigaDecrunch = new AmigaDecrunch(3, 3, 100, 300);
    myAmigaDecrunch.palette = Array("#000031","#000073","#0000AD","#00BA00","#000073","#0000CE","#0055EF","#005500","#00FFEF","#00308C","#00BA52","#00CF21","#0075CE","#005531","#009A00","#007563","#003073","#00FF42","#000000");

    GlobalFlag=false;
    decrunch_intro();
    //init_before_go();
};

//
// INIT BEFORE GO
//

function init_before_go() {

    // LOAD MUSIC
    modplayer.stereo(true);
    modplayer.LoadAndRun('mods/'+CascadeModList[0].file);
    // LOGO

    mylogo1canvas=new canvas(640,480);
    mylogo2canvas=new canvas(640,146);
    mylogo1image.draw(mylogo1canvas,0,0);
    mylogo2image.draw(mylogo2canvas,0,0);
    mylogo1fx=new FX(mylogo1canvas,mycanvas,mylogo1fxparam);
    mylogo2fx=new FX(mylogo2canvas,mycanvas,mylogo2fxparam);

    // STARTFIELD

    my2dstarfield=new starfield2D_dot(mycanvas,my2dstarsparams);

    // SCROLLS

    myscroll1fxcanvas = new canvas(640,16);
    myscroll1gradcanvas = new canvas(640,16);
    myscroll2fxcanvas = new canvas(16,480);
    myscroll2gradcanvas = new canvas(16,480);
    myscroll1text = new scrolltext_horizontal();
    myscroll2text = new scrolltext_vertical();
    myscroll3text = new scrolltext_horizontal();
    myscroll1text.scrtxt=CascadeScrollText1;
    myscroll2text.scrtxt=CascadeScrollText2;
    myscroll3text.scrtxt=CascadeScrollText3;
    myscroll1text.init(myscroll1fxcanvas, myscroll1font,2);
    myscroll2text.init(myscroll2fxcanvas, myscroll2font,1); // SPEED 0
    myscroll3text.init(mycanvas,myscroll3font,1)
    myscroll1fx = new FX(myscroll1fxcanvas,mycanvas,myscroll1fxparam);
    myscroll2fx = new FX(myscroll2fxcanvas,mycanvas,myscroll2fxparam);

    // SCROLL COOPER COLORS
    myscroll1grad = new grad(myscroll1gradcanvas, myscroll1gradcolor);
    myscroll1grad.drawV();
    myscroll2grad = new grad(myscroll2gradcanvas, myscroll2gradcolor);
    myscroll2grad.drawH();

    // 3D OBJECT

    my3d=new codef3D(mycanvas, 600,120, 1, 1200);
    my3d.faces4(myobjvert,myobj, false, true);
    my3d.addAmbiLight(0x333333);
    my3d.addDirLight(0.5,0.5,0.5,0xffffff);

    // COOPER COLORS
    mygrad=new grad(mycanvas,mygradcolor);

    // GO INTRO
    go_intro();
};

//===============================================
//
// GO INTRO (BRING LOGOS IN AND OUT)
//
//===============================================

var mylogo1fxpos = 500;
var mylogo2fxpos = 640;
var mylogo1wait = 500;
var mylogo1exitpos = -700
var mylogo1finished = 0;
var mylogo2finished = 0;
var ga = 0.01;
var gaAdder = 0.002;
function go_intro() {
    // CLEAR SCREEN
    mycanvas.fill('#000000');

    // STARTFIELD
    mycanvas.contex.globalAlpha=ga;

    my2dstarfield.draw();
    // BRING LOGO1 IN
    if (mylogo1finished == 0) {

        // BRING LOGO1 IN
        if (mylogo1fxpos > 0) {
            mylogo1fxpos-=1;
            mycanvas.contex.globalAlpha=ga;
            if (ga<1) {
                ga+=gaAdder;
            }
            mylogo1fx.sinx(0,mylogo1fxpos);

        }
        // WAIT LOGO1
        if (mylogo1fxpos == 0) {
            mylogo1wait-=1;
            if (mylogo1wait==0) {
                mylogo1fxpos=-1;
            }
            mylogo1fx.sinx(0,0)
          // DISTORT LOGO
        }
        // BRING LOGO1 OUT
        if (mylogo1wait==0){
          mylogo1fx.sinx(mylogo1fxpos,0);
          mylogo1fxpos-=2;
        }
        if (mylogo1fxpos<mylogo1exitpos) {
            mylogo1finished=1;
        }

    }

    //BRING LOGO 2 IN
    if (mylogo1finished == 1) {
        // BRING LOGO2 IN
        if (mylogo2fxpos > 0) {
            mylogo2fxpos-=1;
            mylogo2fx.sinx(mylogo2fxpos,0);
        } else {
            mylogo2finished =1;
        }
    }
    // ANIMATE

    if (mylogo2finished==0) {
        requestAnimFrame( go_intro );
    } else {
        // ADD EVENTHANDLER FOR GRABBING KEYBOARRD
        document.onkeydown = checkKey;
        go();
    }
};

//===============================================
//
// GO FINAL
//
//===============================================

var effectCounter = 0;

function go(){

    mycanvas.fill('#000000');
    myscroll1fxcanvas.clear();
    myscroll2fxcanvas.clear();

    // CHECK KEY WAIT
    if (checkKeyWait>0) { checkKeyWait-=1; }

    // COOPER && EFFECTS

    effectCounter+=1;
    if (effectCounter>10) {
      effectCounter=0;
      shiftCooper();
      newRGB='rgb('+mygradcolorshift[0]+','+mygradcolorshift[1]+','+mygradcolorshift[2]+')';
      mygrad.params[2]["color"]=newRGB;
    }

    mygrad.drawH();

    // STARFIELD
    my2dstarfield.draw();

    // 3D CUDE
    my3d.group.rotation.x+=0.01;
    my3d.group.rotation.y+=0.02;
    my3d.group.rotation.z+=0.04;
    my3d.draw();

    // SINUS SCROLL
    myscroll1text.draw(0);
    myscroll1fxcanvas.contex.globalCompositeOperation='source-atop';
    myscroll1fxcanvas.contex.drawImage(myscroll1gradcanvas.canvas,0,0);
    myscroll1fxcanvas.contex.globalCompositeOperation='source-over';
    myscroll1fx.siny(0,280);

    // BOTTOM SCROLL
    myscroll3text.draw(460-16);

    // MUSIC SCROLL
    myscroll2text.draw(0);
    myscroll2fxcanvas.contex.globalCompositeOperation='source-atop';
    myscroll2fxcanvas.contex.drawImage(myscroll2gradcanvas.canvas,0,0);
    myscroll2fxcanvas.contex.globalCompositeOperation='source-over';
    myscroll2fxcanvas.sethandle(0,0);
    myscroll2fx.sinx(320,0);
    // LOGO FX

    mylogo2fx.sinx(0,0);
    requestAnimFrame( go );
};

//------------------------------------------------------------------------------
//
// EOF
//
//------------------------------------------------------------------------------
