const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText).data;
        pollTitle.textContent = data.title;
        //console.log(data.answers);
        for (let answer of Array.from(data.answers)) {
             //console.log(answer);
            pollAnswers.insertAdjacentHTML("beforeEnd", 
				                            `<button class="poll__answer">
              		                        ${answer}
            	                             </button>`)
		}
        let buttons = document.querySelectorAll('.poll__answer');
        for (let answer of Array.from(buttons)) {
            answer.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                window.location.reload();
            });
        }
    }
}