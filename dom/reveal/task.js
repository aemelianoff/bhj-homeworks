const reveal = document.querySelectorAll('.reveal');
reveal.forEach(element =>{
    document.addEventListener('scroll',()=>{
        const viewPortHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if ( elementTop < viewPortHeight) {
            element.classList.add('reveal_active');
        };
        if ( elementTop > viewPortHeight) {
            element.classList.remove('reveal_active');
        };
    }); 
});