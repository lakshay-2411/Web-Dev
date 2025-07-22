const element = document.getElementById('element');

element.addEventListener('click', function(e) {
    console.log('Element clicked');
});

element.addEventListener('dblclick', function(e) {
    console.log('Element double-clicked');
});

element.addEventListener('mousedown', function(e) {
    console.log('Mouse button pressed');
});

element.addEventListener('mouseup', function(e) {
    console.log('Mouse button released');
});

element.addEventListener('mouseover', function(e) {
    this.style.backgroundColor = 'yellow';
});

element.addEventListener('mouseout', function(e) {
    this.style.backgroundColor = '';
});

element.addEventListener('mouseenter', function(e) {
    this.style.border = '2px solid red';
});

element.addEventListener('mouseleave', function(e) {
    this.style.border = '';
});

element.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('Right-clicked');
});