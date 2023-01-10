const singleElement = document.querySelectorAll('.singleElement');

let count = 1;
setInterval(() => {
    count++;

    const currentElement = document.querySelector('.current');

    currentElement.classList.remove('current');

    if (count > singleElement.length) {
        count = 1;
        singleElement[0].classList.add('current');
        
    } else{
        currentElement.nextElementSibling.classList.add('current');
    }

}, 2000);