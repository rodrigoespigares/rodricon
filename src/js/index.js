document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('i.ricon').forEach(el => {
        const classes = Array.from(el.classList);
        const iconClass = classes.find(c => c.startsWith('ricon-') && c !== 'ricon');
        
        if (iconClass) {
            const iconName = iconClass.replace('ricon-', '');
            let svg = null;

            svg = IconLibrary[iconName]; 

            if (!svg) {
                for (const categoryKey in IconLibrary) {

                    if (Object.prototype.hasOwnProperty.call(IconLibrary, categoryKey) && 
                        typeof IconLibrary[categoryKey] === 'object' && 
                        IconLibrary[categoryKey] !== null) {

                        const category = IconLibrary[categoryKey];
                        if (category[iconName]) {
                            svg = category[iconName];
                            break; 
                        }
                    }
                }
            }

            if (svg) {
                el.innerHTML = svg;
            } else {
                console.warn(`Icon "${iconName}" not found in IconLibrary or any category.`);
            }
        }
    });

    function cargarIconos(category, id) {
        const categoryArry = Object.keys(category);
        categoryArry.forEach(iconName => {

            const div = document.getElementById(id);

            const svg = category[iconName];
            const icon = document.createElement('i');
            icon.classList.add('ricon');
            icon.classList.add(`ricon-${iconName}`);
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