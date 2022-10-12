import { getElement } from './utils.js';


const toggleNav = getElement('.toggle-nav');
const sidebarOVerlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', ()=>{
    sidebarOVerlay.classList.add('show');
});
closeBtn.addEventListener('click', ()=>{
    sidebarOVerlay.classList.remove('show');
})