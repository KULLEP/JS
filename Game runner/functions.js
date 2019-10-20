function player_idle_sprite() {
    player.src = "images/king/KINGISSE.png";
}



function kick_player() {
    player_Y -= 15;
    player.src = "images/king/King_kick.png";
    setTimeout(player_idle_sprite, 150);
}


function player_is_dead()
{
    hp_player = 0;
    document.querySelector('#hp_player').innerHTML = 0;
    document.querySelector('#hp_player').value = 0;
    //location = 'https://yandex.ru/';
}



function player_mana_heath()
{
    // MANA
    if (mp_player >= 0 && mp_player <= 100)
    {
        mp_player += 0.03;
    }
    
    // HP
    if (hp_player >= 1 && hp_player <= 100)
    {
        hp_player += 0.01;
    }
    
    
    document.querySelector('#hp_player').innerHTML = hp_player.toFixed(0);
    document.querySelector('#hp_player').value = hp_player;
    document.querySelector('#mp_player').innerHTML = mp_player.toFixed(0);
    document.querySelector('#mp_player').value = mp_player;
}







function enemy(enemy_obj, speed, damage, impulse, image, gravity_obj, is_fly)
{
    this.enemy_obj = enemy_obj;
    this.speed = speed;
    this.damage = damage;
    this.impulse = impulse;
    this.image = image;
    this.gravity_obj = gravity_obj;
    this.is_fly = is_fly;
    
    
    
    ctx.fillStyle="black";
    ctx.fillRect(enemy_obj.x, enemy_obj.y - 20,  50, 10);
    
    ctx.fillStyle="red";
    ctx.fillRect(enemy_obj.x, enemy_obj.y - 20,  50 - (100 - hp_player), 10);
    
    
    
    ctx.drawImage(image,enemy_obj.x,enemy_obj.y);
    
    
    
    
    collision_king_x = Math.abs(enemy_obj.x - player_X);
    collision_king_y = Math.abs(enemy_obj.y - player_Y);
    
    delta_king_x = (Math.sign(enemy_obj.x - player_X)).toFixed(3);
    delta_king_y = (Math.sign(enemy_obj.y - player_Y)).toFixed(3);
    
    enemy_obj.x = enemy_obj.x - (delta_king_x * speed);
    if (is_fly == true){
        enemy_obj.y = enemy_obj.y - (delta_king_y * speed);
    }
    
    // ГРАВИТАЦИЯ 
    if(enemy_obj.y + image.height <= cvs.height - fg.height){
        enemy_obj.y += gravity_obj;
    }
    
    if( collision_king_x < 25 && collision_king_y < 35){
        hp_player -= damage;
        player_X = player_X - (delta_king_x * speed * impulse);
        player_Y = player_Y - (delta_king_y * speed * impulse);
    }
}


















