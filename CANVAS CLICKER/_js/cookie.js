


		var money = 0;
		var click = 1;
		var money_second = 0;

		// CLICK PRICE
		var click_price_1_mini_knife = 20;
		var click_price_2_knife = 100;
		var click_price_3_big_knife = 500;
		var click_price_4_axe = 1000;
		var click_price_5_chainsaw = 10000;







		function start_price() {
			document.querySelector('#click_price_1_mini_knife_text').innerHTML = click_price_1_mini_knife + ' $';
			document.querySelector('#click_price_2_knife_text').innerHTML = click_price_2_knife + ' $';
			document.querySelector('#click_price_3_big_knife_text').innerHTML = click_price_3_big_knife + ' $';
			document.querySelector('#click_price_4_axe_text').innerHTML = click_price_4_axe + ' $';
			document.querySelector('#click_price_5_chainsaw_text').innerHTML = click_price_5_chainsaw + ' $';
		}
		start_price();



		function money_uppload() {
			document.getElementById('money_block').innerHTML = parseInt(money);
			document.getElementById('money_block_title').innerHTML = parseInt(money);
			document.getElementById('money_second_block').innerHTML = parseInt(money_second*10);
			document.getElementById('money_click_block').innerHTML = parseInt(click);
			money += money_second;
		}
		setInterval(money_uppload, 100);



		document.querySelector('#cookie_click').onmouseenter = () => {
			document.querySelector('#cookie_click').setAttribute("style", "transform: scale(1.1); transition: .1s;");
			//document.querySelector('#myaudio').play();
		}



		document.querySelector('#cookie_click').onmouseleave  = () => {
			document.querySelector('#cookie_click').setAttribute("style", "transform: scale(1); transition: .1s;");
		}


		document.querySelector('#cookie_click').onmousedown  = () => {
			document.querySelector('#cookie_click').setAttribute("style", "transform: scale(1); transition: .1s;");
			money += click;
			//console.log(event.clientX+':'+event.clientY);
			
			let rand_number = Math.random();
			console.log(rand_number.toFixed(3));
			
			
			/* BONUS */
			if(rand_number > 0.998) {
				console.log('BONUS x 500');
				money += click * 500;
				document.querySelector('#bonus_x_text').innerHTML = 'BONUS X 10';
				bonus_d_none('#bonus_x500', '#bonus_x500');
				bonus_d_block('#bonus_x500', '#bonus_x500');
			}
			
			else if (rand_number > 0.990) {
				console.log('BONUS x 100');
				money += click * 50;
				document.querySelector('#bonus_x_text').innerHTML = 'BONUS X 10';
				bonus_d_none('#bonus_x50', '#bonus_x50');
				bonus_d_block('#bonus_x50', '#bonus_x50');
			}
			
			else if (rand_number > 0.950) {
				console.log('BONUS x 10');
				money += click * 10;
				document.querySelector('#bonus_x_text').innerHTML = 'BONUS X 10';
				bonus_d_none('#bonus_x_text', '#bonus_x_text');
				bonus_d_block('#bonus_x_text', '#bonus_x_text');
			}
			
		}


		function bonus_d_block(a, b) {
			
			setTimeout(function(){
				document.querySelector(a).classList.toggle('d-none');
				document.querySelector(b).classList.toggle('d-block');
			},1000);
		}

		function bonus_d_none(a, b) {
			
			setTimeout(function(){
				document.querySelector(b).classList.toggle('d-block');
				document.querySelector(a).classList.toggle('d-none');
			},100);
		}




		document.querySelector('#cookie_click').onmouseup  = () => {
			document.querySelector('#cookie_click').setAttribute("style", "transform: scale(1.1); transition: .1s;");
		}



		// KICK BOSS

		let hp_boss = 100;
		document.querySelector('#kick_boss').onclick = () => {
			
			if (hp_boss <=1)
			{
		money += click * 500;
				console.log('win');
				document.querySelector('#boss_element_id').classList.toggle('d-none');
				
				bonus_d_block('#boss_win_id', '#boss_win_id');
				bonus_d_none('#boss_win_id', '#boss_win_id');
				
			}
			else {
				hp_boss -= 1;
				document.querySelector('#hp_boss_text').innerHTML = hp_boss;
				document.querySelector('#hp_boss').value = hp_boss;
				console.log(hp_boss);
				
			}
		}






		// CLICK START

		document.querySelector('#buy_click_price_1').onclick = () => {
			if (money >= click_price_1_mini_knife){
				money = money - click_price_1_mini_knife;
				click = click + 1;
				click_price_1_mini_knife *= 1.3;
				console.log('click - '+click);
				document.querySelector('#click_price_1_mini_knife_text').innerHTML = click_price_1_mini_knife.toFixed(1) + ' $';
			} else alert("No money");
		}




		function buy_click_2() {
			if (money >= 100){
				money = money - 100;
				click = click + 5;
				console.log('click - '+click);
			} else alert("No money");
		}


		function buy_click_3() {
			if (money >= 10000){
				money = money - 10000;
				click = click + 100;
				console.log('click - '+click);
			} else alert("No money");
		}

		// CLICK END



		// SECOND START

		function buy_second_1() {
		if (money >= 20){
		money = money - 20;
		money_second = money_second + 0.1;
		console.log('money_second - '+money_second);
		} else alert("No money");
		}

		// SECOND END

