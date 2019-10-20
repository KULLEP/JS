document.querySelector('#btn_start_game').onclick = () => {
    document.querySelector('#game_canvas').classList.toggle('d-block');
    document.querySelector('#game_block').classList.toggle('d-block');
    document.querySelector('#menu_block').classList.toggle('d-none');   
}


document.querySelector('#btn_progress_game').onclick = () => {
    document.querySelector('#btn_start_game').classList.toggle('d-block');
    document.querySelector('#menu_block').classList.toggle('d-none');   
}

document.querySelector('#btn_exit_game').onclick = () => {
document.querySelector('#game_canvas').classList.toggle('d-none');
    document.querySelector('#game_block').classList.toggle('d-none'); 
        document.querySelector('#menu_block').classList.toggle('d-block');  
}