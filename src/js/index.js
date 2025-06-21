document.addEventListener("DOMContentLoaded", () => {

    function cargarIconos(category, id) {
        const categoryArry = Object.keys(category);
        categoryArry.forEach(iconName => {

            const div = document.getElementById(id);

            const svg = category[iconName];
            const icon = document.createElement('i');
            icon.classList.add('ricon');
            icon.classList.add(`ricon-${iconName}`);
            icon.classList.add('size-24');
            icon.innerHTML = svg;

            const car = document.createElement('div');
            car.classList.add('icon-card');
            car.dataset.icon = iconName;
            car.appendChild(icon);

            const name = document.createElement('div');
            name.classList.add('icon-name');
            name.textContent = iconName;
            car.appendChild(name);

            div.appendChild(car);

            
        });
    }

    cargarIconos(navegacionyui, "navegacionyui");
    cargarIconos(comunicacion, "comunicacion");
    cargarIconos(archivosydocumentos, "archivosydocumentos");
    cargarIconos(redessociales, "redessociales");
    cargarIconos(comercio, "comercio");
    
    document.getElementById('icon-search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.icon-card');

        cards.forEach(card => {
            const nameDiv = card.querySelector('.icon-name');
            const iconName = nameDiv ? nameDiv.textContent.toLowerCase() : '';
            const match = iconName.includes(searchTerm);
            card.style.display = match ? 'block' : 'none';
        });
    });
});