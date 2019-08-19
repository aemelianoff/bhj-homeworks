const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

for (let tab of Array.from(tabs)) {
    let arr =  Array.from(tabs);
   
    tab.onclick = function() {
    for  (let tab of Array.from(tabs)) {
        if (tab.className = 'tab tab_active') {
            tab.classList.toggle('tab_active');
        }
    }
    for (let content of Array.from(contents)) {
        if (content.className = 'tab__content tab__content_active') {
            content.classList.toggle('tab__content_active');
        }
    }
    tab.classList.toggle('tab_active');
    contents.item(arr.indexOf(tab)).className ='tab__content tab__content_active';
    }
}
