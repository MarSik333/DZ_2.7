var playList = [
		{ author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN" },
		{ author: "QUEEN", song:"BOHEMIAN RHAPSODY" },
		{ author: "LYNYRD SKYNYRD", song:"FREE BIRD" },
		{ author: "DEEP PURPLE", song:"SMOKE ON THE WATER" },
		{ author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER" },
		{ author: "AC/DC", song:"BACK IN BLACK" },
		{ author: "QUEEN", song:"WE WILL ROCK YOU" },
		{ author: "METALLICA", song:"ENTER SANDMAN" }
	];

	var playlistEl = document.getElementById('playlist');
	for(var i = 0; i < playList.length; i++) {
		var song = playList[i].song;
		var author = playList[i].author;
		var listItem = document.createElement('li');
		listItem.innerHTML = author + " - " + song;
		playlistEl.appendChild(listItem);
	}








    var modal = document.getElementById("myModal");
		var btn = document.getElementById("openModal");
		var span = document.getElementsByClassName("close")[0];

		btn.onclick = function() {
			modal.style.display = "block";
		}

		span.onclick = function() {
			modal.style.display = "none";
		}

		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}



































        const redLight = document.querySelector('.red');
        const yellowLight = document.querySelector('.yellow');
        const greenLight = document.querySelector('.green');
        const changeColorBtn = document.querySelector('#change-color-btn');
        
        const lights = [redLight, yellowLight, greenLight];
        let currentLightIndex = 0;
        
        changeColorBtn.addEventListener('click', () => {
          // Удалим класс "active" у текущего светофора и добавим класс "inactive"
          lights[currentLightIndex].classList.remove('active');
          lights[currentLightIndex].classList.add('inactive');
          
          // Переключим на следующий цвет светофора
          currentLightIndex = (currentLightIndex + 1) % lights.length;
          
          // Удалим класс "inactive" и добавим класс "active" к новому светофору
          lights[currentLightIndex].classList.remove('inactive');
          lights[currentLightIndex].classList.add('active');
        });
        