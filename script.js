const sidebarIcon = document.querySelector('.sidebar-icon');
const closeButton = document.querySelector('.close-button');
const sidebar = document.querySelector('.sidebar');

// ORIGINAL METHOD - editing style in a function then calling that within the event listener. was using functions, toggle, keyframes and if else statements

// function hideSidebar(sidebar){
//   sidebar.style.animation = "hide-sidebar 1s";
// }

// function showSidebar(sidebar){
//   sidebar.style.animation = "show-sidebar 1s";
// }

// sidebarIcon.addEventListener('click', () => {
//   if(sidebar.classList.contains('show-sidebar')){
//     hideSidebar(sidebar);
//     sidebar.classList.toggle('show-sidebar');
//   } else if(!sidebar.classList.contains('show-sidebar')) {
//     showSidebar(sidebar);
//     sidebar.classList.toggle('show-sidebar');
//   }
// });

// sidebarIcon.addEventListener('click', () => {
//   sidebar.classList.toggle('show-sidebar-transition');
//   console.log(`showbar: ${sidebar.classList.contains('show-sidebar-transition')}`);
//   if(sidebar.classList.toggle('show-sidebar-transition')){
//     // console.log("toggle is true");
//     sidebar.classList.toggle('hide-sidebar-transition');
//     console.log(`hidebar: ${sidebar.classList.contains('hide-sidebar-transition')}`);
//   } else if(!sidebar.classList.toggle('show-sidebar-transition')){
//     // console.log("toggle is false"); 
//     ;
//   }
// });

// closeButton.addEventListener('click', () => {
//   if(sidebar.classList.contains('show-sidebar')){
//     hideSidebar(sidebar);
//     sidebar.classList.toggle('show-sidebar');
//   } 
// });


// BEST METHOD - simply using toggle and CSS transitions, and an if statement for the close button. Much less code including in CSS file. Key factor was adding the hide-sidebar-transition class to the sidebar element to begin with so that it was toggled to true on page load. We toggle both 'show' and 'hide' on each click so when one is true the other is false and so on - removes conditional statements. 

// For the close button, as we can only click when 'show-sidebar' is true, we dont need a conditional statement because all we can do is close it, so just give it the same functionality as the sidebar icon and toggle both transitions back. 

sidebarIcon.addEventListener('click', () => {
  // console.log(`show ${sidebar.classList.contains('show-sidebar-transition')}`)
  // console.log(`hide ${sidebar.classList.contains('hide-sidebar-transition')}`)
  // console.log(`sidebar starting classes ${sidebar.classList}`);
  sidebar.classList.toggle('show-sidebar-transition');
  sidebar.classList.toggle('hide-sidebar-transition');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.toggle('hide-sidebar-transition');
    sidebar.classList.toggle('show-sidebar-transition');
});