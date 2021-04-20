const sidebarIcon = document.querySelector('.sidebar-icon');
const closeButton = document.querySelector('.close-button');
const sidebar = document.querySelector('.sidebar');

function hideSidebar(sidebar){
  sidebar.style.animation = "hide-sidebar 1s";
}

function showSidebar(sidebar){
  sidebar.style.animation = "show-sidebar 1s";
}

sidebarIcon.addEventListener('click', () => {
  if(sidebar.classList.contains('show-sidebar')){
    hideSidebar(sidebar);
    sidebar.classList.toggle('show-sidebar');
  } else if(!sidebar.classList.contains('show-sidebar')) {
    showSidebar(sidebar);
    sidebar.classList.toggle('show-sidebar');
  }
});

// as can be seen below, instead of keyframes, a transition can do the same thing. if else statement would still be needed but commenting out the above event listener and commenting IN the below event listener will move the sidebar in the same way, i just didnt add a transition back out or functionality for the close button. 

// sidebarIcon.addEventListener('click', () => {
//   sidebar.classList.toggle('show-sidebar-transition');
// });

closeButton.addEventListener('click', () => {
  if(sidebar.classList.contains('show-sidebar')){
    hideSidebar(sidebar);
    sidebar.classList.toggle('show-sidebar');
  } 
});

// i am yet to be able to work a transition back OUT of screen with the classList toggle method alone. i have used the toggle method but not in it's most efficient form. 

// the functions created at the top use keyframe animations.