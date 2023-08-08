
const diabloBtns = document.querySelectorAll('.diabloBtn');
diabloBtns[0].classList.add('font-bold');
diabloBtns[0].classList.add('opacity-100');

diabloBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // Clearing classes from unactive classes.
        diabloBtns.forEach(item => {
            item.classList.remove('font-bold');
            item.classList.remove('opacity-100');
            item.classList.add('opacity-70');
        })
        // Setting styles for active button
        event.currentTarget.classList.add('font-bold');
        event.currentTarget.classList.add('opacity-100');
        
    });
})



// Setting active the tabBtn

const tabBtns = document.querySelectorAll('.tabBtn');
tabBtns[0].classList.add('tabActive');
// tabBtns[0].classList.add('opacity-100');

tabBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // Clearing classes from unactive classes.
        tabBtns.forEach(item => {
            item.classList.remove('tabActive');
        })
        // Setting styles for active button
        event.currentTarget.classList.add('tabActive'); 
    });
})