var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// Загрузка картинок

var player = new Image();
var king = new Image();
var cricle = new Image();

var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

// SKILLS

var skill_1 = new Image();
var skill_2 = new Image();
var skill_3 = new Image();
var skill_4 = new Image();

skill_1.src = "images/skills/1.png";
skill_2.src = "images/skills/2.png";
skill_3.src = "images/skills/3.png";
skill_4.src = "images/skills/4.png";



player.src = "images/king/KINGISSE.png";
cricle.src = "images/cricle.png";
king.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// Некоторые переменные

var gap = 85,
constant,

player_X = 50,
player_Y = 270,

gravity = 5,

score = 0,
speed = 2 // max speed


hp_player = 100, // HP
mp_player = 100, // MP


bg_speed_move = 0, // Speed background
fg_speed_move = 0; // Speed ground


var global_player_pos = 0;


// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// События на клавишы
keys = [];

// key events
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});








// Камни координаты

var cricle_Resp = [];

cricle_Resp[0] = {
    x : cvs.width,
    y : 0
};


// Монстры координаты

var monsters_1 = [];

monsters_1[0] = {
    x : cvs.width,
    y : 300
};




var player_kick = new Image();
player_kick.src = "images/king/knight-sprite-sheet.png";


// Рисовать

function draw(){
    
    
    // ГРАВИТАЦИЯ ГЕРОЯ
    if(player_Y + player.height <=  cvs.height - fg.height){
        player_Y += gravity;
    }
    
    
    
    if(player_X <= -60 || player_Y <= -50) //Если за пределами карты по x или y
    {
        player_is_dead();
    }
    else if(player_X >= 800 && global_player_pos <= 1000)
    {
        fg_speed_move -= 2;
        bg_speed_move -= 1;
        global_player_pos += 1;
    }
    else if(player_X + cvs.width <= 1200)
    {
        if(player_X <= 60 && global_player_pos >= 1)
        {
            global_player_pos -= 1;
            fg_speed_move += 2;
            bg_speed_move += 1;
        }
    }
    
    
    // W
    if (keys['87']) {
        player_Y -= 15;
    }
    
    // D
    if (keys['68']) {
        player_X += 10;
    }
    
    // A
    if (keys['65']) {
        player_X -= 10;  
    }
    
    // S
    if (keys['83']) {
        if(player_Y + player.height <= cvs.height - fg.height){
            player_Y += 15;  
        }
    }
    
    // SKILLS
    document.querySelector('html').onkeydown = function (events)
    {
        if(events.key == '1'){
            if(mp_player >= 5){
                mp_player -= 5;
                kick_player();
            }
        }
    }
    
    
    
    
    
    
    
    
    for(var k = 0; k <= cvs.width * 2; k += 180)
    {
        ctx.drawImage(bg,k + bg_speed_move,0); // BackGround
        ctx.drawImage(fg,k + fg_speed_move,cvs.height - fg.height); // Ground 
    }
    
    
    
    
    
    // КАМЕНЬ
    for(var i = 0; i < cricle_Resp.length; i++){
        
        /* enemy_obj, speed, damage, impulse, gravitu, is_fly */
        enemy(cricle_Resp[i], 2, 9, 15, cricle, 1, true);
    }
    
    
    // KING
    for(var i = 0; i < monsters_1.length; i++){
        
        /* enemy_obj, speed, damage, impulse, gravitu, is_fly */
        enemy(monsters_1[i], 3, 9, 15, king, 1, false);
        
    }
    
    
    
    // SPRITE PLAYER
    ctx.drawImage(player, player_X, player_Y, player.width, player.height);
    
    
    
    
    //SKILLS
    ctx.drawImage(skill_1, 40, 430, skill_1.width, skill_1.height);
    ctx.drawImage(skill_2, 90, 430, skill_2.width, skill_2.height);
    ctx.drawImage(skill_3, 140, 430, skill_3.width, skill_3.height);
    ctx.drawImage(skill_4, 190, 430, skill_4.width, skill_4.height);
    
    
    
    document.querySelector('#score').innerHTML = score;
    
    
    
    
    
    if(hp_player <= 0)
    {
        player_is_dead(); // Функция смерти игрока
    }
    
    
    player_mana_heath(); // Обновление результата маны и хп
    
    
    requestAnimationFrame(draw);
}

draw();
















