//------------------------------------------------------------------------------
//
// Cascade 1733 Archeology Intro
//
// Copyright (c) 2017 Cascade 1733 Sweden Section
//
// Description: Scrolltext
//
//------------------------------------------------------------------------------

var CascadeScrollText1;
var CascadeScrollText2;
var CascadeScrollText3;
var CascadeScrollText2Ending;
var CascadeScrollText2Start;
var CascadeModList = new Array();

// SINUS SCROLL TEXT

//CascadeScrollText1=".... 01234567890ABCDEFGHIJKLMNOPQRSTUWXYZ !! \"\" ## $$ %% '' (())++,,--../ /::??@@ ..";
CascadeScrollText1="CASCADE 1733 # PRESENTS:                 \
ARCHEOLOGY               ^P3     \
RELEASED ON 2017.02.11 # THIS IS A TRIBUTE TO CASCADERS, AMIGA AND C64 SCENERS AROUND THE WORLD.   \
CREDITS:                    \
CODE: PHAZOR               ^P3         \
MUSIC: SKIMMER             ^P3  HINT: HIT SPACE TO CHANGE MUSAX!!                \
GRAPHICS: LESTER            ^P3         \
SCROLLTEXT: ZELDIN & PHAZOR       ^P3   \
MORAL SUPPORT: ZELDIN & LESTER      ^P3      \
PHAZOR BY THE KEYBOARD! VISIT: WWW.CASCADE64.DE - GREAT SITE!! IF YOU WANT TO CONTACT ME, DROP A MSG TO PHAZOR(AT)BAHNHOF.SE       \
BIG THANKS TO THE PPL BEHIND THE CODEF FRAMEWORK FOR MAKING THIS POSSIBLE.     \
SPECIAL # GREETINGS GOES TO:         --------------- \
ASTAROTH --------------- MASTERMIND --------------- LESTER --------------- \
SKIMMER ---------------  ... AND TO ALL CASCADERS AROUND THE WORLD!!    \
THIS INTRO IS REALLY SLOW ON MOBILE DEVICES!! BEWARE!! :-)    \
SKIMMER, YOUR MUSIC STILL ROCKS! HOPE YOU ENJOY THIS INTRO AND YOUR TUNES REVISITED. \
GREAT FUN MAKING THIS INTRO, A WALK THROUGH MEMORY LANE....       \
####################\
###########################################                   \
AND NOW WE HAVE TO CRUNCH (?) THIS INTRO ...                  \
BTW, NICE SCROLL BELOW .....   UNTIL NEXT TIME: KEEP CODING!!  \
                      @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @\
                                                             \
                        ARE YOU STILL HERE?     AWESOME!!          \
                    A WORD FROM OUR SPONSORS: HAPPY WIFE, HAPPY LIFE!    \
                                                5    4    3    2    1    0    \
";

//
// LOWER SCROLL TEXT
//
CascadeScrollText3="                                                        \
                                        \
Hi ppl out there, this is Zeldin of Cascade C64 section. \
What a pleasure to be part in this cool production. Oldschool vibes at its best!!! \
Nice to see some of our old Amiga groupmates back in demo scene mode. \
Phazor obviously still knows, how to get the things (sc)rolling :-) \
And Skimmer's .mods still rule after all those years, as we all can hear. \
If there's a glimpse of a bitter smack though, it is that Axis/Cascade \
can't see this anymore. And oh, how much he would have loved it! Patrick, \
you've been gone now for over two years, but we still miss you...    \
Ok then, before I say goodbye, here's a little message to all former and \
current Cascaders out there: Wherever you guys are right now, feel greeted \
and be thrilled - Cascade will be 29 years old this spring! That's it. \
Bye for now, Zeldin/Cascade in 2017...  \
            Phazor here - Kudoz to Zeldin for sharing and contributing to this \
intro. And ... visit: www.cascade64.de where you will find alot of Cascade Stuff \
from over the years.    \
As a tribute to and honoring the scene I'll end this scroll with \
a message from the past .........                                     \        \
Mega greetings goes to (dead or alive!): ABAKUS   -   ACCESSION   -   ADEPT   -   ALCATRAZ   -   \
ALPHA FLIGHT   -   ANARCHY   -   ANGELS   -   APEX   -   ARMADA   -   AVENGER   -   \
BEYOND FORCE   -   BRAINSTORM   -   BYTERAPERS   -   CAVE   -   CHROME   -   CIBA   -   \
FRAXION      HORIZON      HYPNOSIS      IBB & PIRANHAS      IMAGE      \
CRUSADERS   -   CRYPTOBURNERS   -   CULT   -   DEFJAM, CCS AND ACC   -   DUAL CREW   -   \
KEFRENS   -   NORTH STAR   -   PARADOX   -   PHENOMENA   -   QUELLE   -   RAZOR 1911   -   \
REBELS   -   RED SECTOR INC.   -   SCOOPEX   -   SILENTS   -   SPREADPOINT   -   \
SUBWAY   -   THE HACKING RELATION   -   TRILOGY   -   TRISTAR   -   TUSK   -   \
VALHALLA   -   VISION   -   VISION FACTORY   -   WARFALCONS   -   WIZZCAT   -   \
ZERO DEFECTS  .....  SORRY IF WE FORGOT YOU!   \
                                                                         ";
//
// MUSIC SCROLL TEXT
//
CascadeScrollText2="                          ";
CascadeScrollText2Ending="                                ^S0";
CascadeScrollText2Start="^S3   NOW PLAYING              ";
//
// MOD ARRAY
//

CascadeModList = [
    {file: "skimmer_dancefloor_freakout.mod",
    text:"DANCEFLOOR FREAKOUT  ^P5       "},

    {file: "skimmer_anguish.mod",
    text:"ANGUISH         ^P5            "},

    {file: "skimmer_bit_by_bit.mod",
    text:"BIT BY BIT        ^P5          "},

    {file: "skimmer_drum-track.mod",
    text:"DRUM TRACK        ^P5          "},

    {file: "skimmer_escape_from_reality.mod",
    text:"ESCAPE           ^P5           "},

    {file: "skimmer_extreme_violence.mod",
    text:"EXTREME VIOLENCE     ^P5       "},

    {file: "skimmer_falling.mod",
    text:"FALLING          ^P5           "},

    {file: "skimmer_feel_the_beat.mod",
    text:"FEEL THE BEAT      ^P5         "},

    {file: "skimmer_freakout.mod",
    text:"FREAKOUT         ^P5           "},

    {file: "skimmer_jungle_beat.mod",
    text:"JUNGLE BEAT       ^P5          "},

    {file: "skimmer_manoveur.mod",
    text:"MANOVEUR         ^P5           "},

    {file: "skimmer_on_the_edge.mod",
    text:"ON THE EDGE       ^P5          "},

    {file: "skimmer_real_hunting.mod",
    text:"REAL HUNTING       ^P5         "},

    {file: "skimmer_reality.mod",
    text:"REALITY          ^P5           "},

    {file: "skimmer_slipping_through_time.mod",
    text:"SLIPPING THROUGH TIME ^P5      "},

    {file: "skimmer_we_are_going_in.mod",
    text:"WE ARE GOING IN     ^P5        "},
];


//------------------------------------------------------------------------------
//
// EOF
//
//------------------------------------------------------------------------------
