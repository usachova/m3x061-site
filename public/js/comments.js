function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getDataFromAPI() {
    let num = getRandomInt(3) + 1;
    return fetch('https://my-json-server.typicode.com/usachova/pictures-for-site/comments?third=' + num)
        .then(response => response.json())
        .then(json => json)
}

function showComments() {
    const preloader = document.querySelector('.preloader')
    const error = document.querySelector('.error_warning')
    const table = document.querySelector('.comments_table')

    preloader.style.display = 'inherit';
    error.style.display = 'none';
    table.style.display = 'none';
    table.innerHTML = "";

    getDataFromAPI().then(function(data) {
            for (let i = 0; i < data.length; i++) {
                table.innerHTML += `<p><b>${data[i]['name']}:</b> ${data[i]['body']}</p>`
            }
        })
        .then(function() {
            preloader.style.display = 'none';
            table.style.display = 'inherit';
        })
        .catch(function() {
            preloader.style.display = 'none';
            error.style.display = 'inherit';
            table.style.display = 'none';
        })
}