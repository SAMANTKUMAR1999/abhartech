// hover dropdown

var x = window.matchMedia('(max-width: 768px)');

document.getElementById('drop-btn').addEventListener('mouseover', over);
// document.getElementById('drop-menu').addEventListener('mouseover', over);

// document.getElementById('drop-btn').addEventListener('mouseout', out);
document.getElementById('drop-menu').addEventListener('mouseout', out);

function over() {
  if (!x.matches) {
    document.getElementById('drop-menu').style.display = 'flex';
  }
}
function out() {
  if (!x.matches) {
    document.getElementById('drop-menu').style.display = 'none';
  }
}

// on click dropdown
document.getElementById('drop-btn').addEventListener('click', showDrop);
function showDrop() {
  if (x.matches) {
    const dropMenu = document.getElementById('drop-menu');
    dropMenu.style.display = dropMenu.style.display == 'flex' ? 'none' : 'flex';
  }
}

//  menu toggle
document.getElementById('collapse-btn').addEventListener('click', showMenu);
function showMenu() {
  const Navigation = document.getElementById('navigation');
  Navigation.style.display =
    Navigation.style.display == 'flex' ? 'none' : 'flex';
}
