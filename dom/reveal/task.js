const reveal = document.querySelectorAll('.reveal');
for (let each of Array.from(reveal))
{
    document.addEventListener('scroll',()=>{
        const viewPortHeight = window.innerHeight;
        const elementTop = each.getBoundingClientRect().top;
        if ( elementTop < viewPortHeight) {
            each.classList.add('reveal_active');
        };
        if ( elementTop > viewPortHeight) {
            each.classList.remove('reveal_active');
        };
    }); 
};