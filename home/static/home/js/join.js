const buttonClassSelector = '.toggle-bar__button';
const activeButtonClass = 'toggle-bar__button--active';
const activeButtonClassSelector = '.toggle-bar__button--active';

const form = document.querySelector('.form');
const formDescription = document.querySelector('.form-description');
const heroText = document.querySelector('.hero__text')

document.querySelectorAll(buttonClassSelector).forEach(e => {
    e.addEventListener('click', () => {
         document.querySelector(activeButtonClassSelector).classList.remove(activeButtonClass);
        e.classList.add(activeButtonClass);
        const volunteerInput = document.querySelector('.volunteer .input-group__input');
        document.querySelector('input[name="sheetname"]').value = e.dataset.toggle;
        if(e.dataset.toggle === 'volunteer'){
            document.querySelector('#submit').innerText = 'Volunteer Now!';
            addClass([form,formDescription,heroText],'volunteer-is-active');
            removeClass([formDescription,heroText],'partner-is-active');
            volunteerInput.disabled = false;
        }else if(e.dataset.toggle === 'partner'){
            document.querySelector('#submit').innerText = 'Submit';
            addClass([formDescription,heroText],'partner-is-active');
            removeClass([form,formDescription,heroText],'volunteer-is-active');
            volunteerInput.disabled = true;
        }
    })
});

const addClass = (elements,className) => [...elements].forEach(e => e.classList.add(className));

const removeClass = (elements,className) => [...elements].forEach(e => e.classList.remove(className));