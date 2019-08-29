document.querySelector('.chat-widget__side-text').addEventListener('click', function() {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
}) 

const messages = document.querySelector('.chat-widget__messages');
let date = new Date().getHours() + ':' + new Date().getMinutes();
let message 

function clientMessages() {
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const input = document.getElementById('chat-widget__input');
            const value = input.value;
            if (input.value != '') {
            messages.innerHTML += `<div class="message message_client">
                                    <div class="message__time">${date}</div>
                                    <div class="message__text">${value}</div>
                                    </div>`;
            input.value = '';
            setTimeout(botMessages, 1000);
            }
        } 
    });
}

function botRandom() {
    const botMessage = [
        'Кто здесь?',
       'Ой, всё!',
        'Здравствуйте!',
         'До свидания!',
         'Ваш аккаунт заблокирован',
        'О май гад!',
        'Махмуд, поджигай!',
         'Будьте здоровы!',
       'Бот тоже человек!'
    ];
    index = Math.floor(Math.random() * botMessage.length);
    return botMessage[index];
}

function botMessages() {
    messages.innerHTML +=  `<div class="message">
        <div class="message__time">${date}</div>
        <div class="message__text">${botRandom()}</div>
        </div>`;
}

clientMessages();
