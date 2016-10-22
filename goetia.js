var allDemons = document.querySelectorAll('.hideDemon');
var firstImage = document.createElement('img');
var container = document.querySelector('.container');
firstImage.setAttribute('class', 'visibleDemon');
firstImage.setAttribute('src', allDemons[(Math.floor(Math.random() * allDemons.length))].getAttribute('src'));
container.appendChild(firstImage);
setInterval(function _conjure() {
    this.setAttribute('src', allDemons[(Math.floor(Math.random() * allDemons.length))].getAttribute('src'));
}.bind(firstImage), 60000);