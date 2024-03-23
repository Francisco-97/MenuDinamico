document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            const menu = document.getElementById('menu');
            data.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = item.name;
                a.href = item.url;
                li.appendChild(a);
                menu.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching menu:', error));
});
