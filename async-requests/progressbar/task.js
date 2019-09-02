const form = document.getElementById('form');
const formData = new FormData(form); 
const send = document.getElementById('send')
const progress = document.getElementById('progress');


function progressBar(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.addEventListener('readystatechange', function() {
       if(this.readyState === 1 && this.status === 200) {
			progress.value = 0.2;
        } else if(this.readyState === 2 && this.status === 200) {
			progress.value = 0.5;
		} else if(this.readyState === 3 && this.status === 200) {
			progress.value = 0.7;
		} else if(this.readyState === 4 && this.status === 200) {
			progress.value = 1;
		}
    })
    xhr.send(formData);
}

send.addEventListener('click', progressBar);