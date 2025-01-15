const items = document.querySelectorAll('.accordion button');

function toggleAccordion(item) {
    const itemToggle = item.getAttribute('aria-expanded');

    items.forEach((el) => {
        el.setAttribute('aria-expanded', 'false');
        const icon = el.querySelector('.down-icon');        
        if (icon) {
            icon.classList.remove('rotate-icon'); 
        }
    });

    if (itemToggle === 'false') {
        item.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.down-icon');    
        if (icon) {
            icon.classList.add('rotate-icon');
        }
    }
}

items.forEach((item) => {
    item.addEventListener('click', () => {
        toggleAccordion(item); 
    });
});