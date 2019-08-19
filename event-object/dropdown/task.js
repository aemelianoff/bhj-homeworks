const dropdownList = document.querySelector('.dropdown__list');
const button = document.querySelector('.dropdown__value');
const listItem = document.querySelectorAll('.dropdown__link');

button.addEventListener('click', function() {
dropdownList.classList.toggle('dropdown__list_active');
}) 

for (let item of Array.from(listItem)){
     item.onclick = function() {
      dropdownList.classList.toggle('dropdown__list_active');
       button.textContent = item.textContent;
      return false;
   }
}