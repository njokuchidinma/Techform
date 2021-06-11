const subnav = document.querySelector('.subnav');
const subNavButton = document.querySelector('.subnav-open-btn');

subNavButton.addEventListener('click', () => {
   if(subNavButton.classList.contains('active')){
       subNavButton.classList.remove('active')
       subnav.classList.remove('subnav--active')
   }else{
       subNavButton.classList.add('active')
       subnav.classList.add('subnav--active')
   }
});