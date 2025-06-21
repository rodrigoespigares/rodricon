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
});