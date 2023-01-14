const buttonEl = document.getElementById('my-button');

const clickHandler = function() {
    let count = parseInt(this.getAttribute('data-count'));
    count++;

    this.setAttribute('data-count', count);
    this.textContent = `Clicks: ${count}`;
};

buttonEl.addEventListener('click', clickHandler);