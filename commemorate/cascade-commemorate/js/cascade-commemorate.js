//------------------------------------------------------------------------------
//
// Cascade 1733 Commemorate Intro
//
// Copyright (c) 2018 Cascade 1733 Sweden Division
//
// Code:   Phazor
// Music:  Skimmer
// Gfx:    Lester
// Text:   Zeldin and Phazor
// Images: Zeldin 
//
// Others: 
//
// Font: Amiga Topaz from www.trueschool.se
//
//------------------------------------------------------------------------------

// MAIN BITMAP

var mycanvas;

// CASCADE LOGO

mylogoimage=new image("media/cascade-first-logo.png");

// LOGO by Petrus and Leech

// MODPLAYER

var modplayer = new music("MK");

// STARTFIELD

var my3dstarfield;
var my2dstarfield;
var my2dstarsparams=[
    {nb:80, speedy:0.0, speedx:0.9, color:'#DDDDDD', size:2},
    {nb:80, speedy:0.0, speedx:0.8, color:'#777777', size:2},
    {nb:80, speedy:0.0, speedx:0.7, color:'#333333', size:2},
];

// FONT & SCROLL

var myscroll1font = new image('media/cascade-rising-font1.png');
myscroll1font.initTile(16,16,32);
var myscroll2font = new image('media/amiga-scrollfont.png');
myscroll2font.initTile(8,16,32);

var myscroll1param=[ 
    {myvalue: 0, amp: 125, inc:0.2, offset: -0.04},
    {myvalue: 0, amp: 50,  inc:0.01, offset: -0.04}
    ];

var myscroll1text;
var myscroll2text;

// 3D OBJECT

var my3d;
      
var my3dobj = new Array();
var my3dobjvert = new Array();
my3dobjvert=[
    {x:-100, y:-100,   z: 0},
    {x: 100, y:-100,   z: 0},
    {x: 100, y:100, z: 0},
    {x:-100, y:100, z: 0},
    ];
        
my3dobj=[ 
    {p1:0, p2:1, p3:2, params:new MeshBasicMaterial({ color: 0x0000ff})},
    {p1:2, p2:3, p3:0, params:new MeshBasicMaterial({ color: 0x00ff00})},
    ];

//
// CHANGE PROD IMAGE
//

var CascadeProdListPointer = -1;
var myprodimage;
var myprodimageX = 0;
var myprodimageMove = 1;

function changeProdImage() {
    CascadeProdListPointer+=1;
    if (CascadeProdListPointer>CascadeProdList.length-1) {
        CascadeProdListPointer=0;
    }
    //console.log(CascadeProdList[CascadeProdListPointer].file);

    //
    // CHANGE IMAGE
    //

    myprodimage=new image("media/"+CascadeProdList[CascadeProdListPointer].file);
    myprodimageX=-myprodimage.img.width
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
};

//
// COOPER COLORS
//

var mygrad;
var mygradcolor=[
    {color: 'rgb(0,0,0)' ,  offset:0},
    {color: 'rgb(0,0,0)' ,  offset:0.80},
    {color: 'rgb(0,0,40)' ,  offset:0.90},
    {color: 'rgb(80,20,0)' ,  offset:1}
];

//
// FULLSCREEN FUNCTION (DO NOT REMOVE)
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


//========================
//
// INIT ROUTINES
//
//=========================

function init(){
    mycanvas=new canvas(640,480,"main");

    initialize();
};

//=========================
//
// INITIALIZE
//
//=========================

function initialize() {

    // LOAD MUSIC 
    modplayer.stereo(true);

    // GREAT MODS: 5, 9, 10,11, 12, 15
    modplayer.LoadAndRun('mods/'+CascadeModList[15].file);

    // COPPER

    mygrad=new grad(mycanvas,mygradcolor);

    // STARTFIELD

    //my2dstarfield=new starfield2D_dot(mycanvas,my2dstarsparams);
    my3dstarfield=new starfield3D(mycanvas, 500, 2, 640,480, 320, 240,'#FFFFFF', 100,0,0);

    // SCROLLS + TEXT

    //myscroll1text = new scrolltext_horizontal();
    myscroll1text = new scrolltext_vertical();
    myscroll1text.scrtxt=CascadeScrollText1;
    //myscroll1text.init(mycanvas, myscroll1font,1); // SPEED 1
    myscroll1text.init(mycanvas, myscroll1font,1, myscroll1param);

    myscroll2text = new scrolltext_horizontal();
    myscroll2text.scrtxt=CascadeScrollText2;
    myscroll2text.init(mycanvas, myscroll2font,1);

    // 3D OBJECT
    
    my3d=new codef3D(mycanvas, 900, 40, 1, 1600 );
    my3d.faces(my3dobjvert,my3dobj, false, false )
    
    // PROD IMAGE INIT

    changeProdImage();
    
    intro();
};

//===============================================
//
// INTRO (BRING 3D OBJECT IN)
//
//===============================================

function intro() {
    // CLEAR SCREEN
    mycanvas.fill('#000000');

    // DRAW STARFIELD 
    my3dstarfield.draw();

    go();
 };

//===============================================
//
// GO - MAIN ROUTINE
//
//===============================================

var effectCounter;

function go(){

    mycanvas.fill('#000000');
 
    // COPPER EFFECTS

    mygrad.drawH();


    // STARFIELD

    my3dstarfield.draw();

    // LOGO

    mylogoimage.draw(mycanvas,7,2);

    // 3D OBJECT

    //my3d.group.rotation.x+=0.01;
    //my3d.group.rotation.y+=0.02;
    my3d.group.rotation.z+=0.04;
    my3d.draw();

    // PROD IMAGE

    myprodimage.draw(mycanvas,myprodimageX,180);
        
    myprodimageX+=myprodimageMove;
        
    if(myprodimageX>640) {
        myprodimageX=-myprodimage.img.width
    }
   
    // SCROLL

    //myscroll1text.draw(460-16);
    myscroll1text.draw(340-16);
    myscroll2text.draw(460-16);

    // LOOP 
    requestAnimFrame( go );
};

//------------------------------------------------------------------------------
//
// EOF
//
//------------------------------------------------------------------------------
