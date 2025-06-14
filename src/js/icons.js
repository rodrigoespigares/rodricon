//Navegación y UI
const navegacionyui = {

    'home': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>`,

    'menu': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>`,

    'search': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
    </svg>`,

    'settings': `<svg class="icon-svg" viewBox="0 0 1024 1024"><path fill="#000000" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"/></svg>`,

    'user': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
    </svg>`,

    'notifications': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>`,

    'delete': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 6h18"/>
        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
        <path d="M10 11v6"/>
        <path d="M14 11v6"/>
        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
    </svg>`,

        'save': `<svg class="icon-svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M15.586 3A2 2 0 0 1 17 3.586L19.414 6A2 2 0 0 1 20 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 5H5v14h2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5h2V7.414L15.586 5H15v2.5A1.5 1.5 0 0 1 13.5 9h-4A1.5 1.5 0 0 1 8 7.5zm6 9H9v5h5zm-1-9h-3v2h3z"/></g></svg>`,

}

//Comunicación
const comunicacion = {
    'mail': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-10 5L2 7"/>
    </svg>`,

    'phone': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,

    'chat': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`,

    'video': `<svg  class="icon-svg" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"/></svg>`
}

//Archivos y Documentos
const archivosydocumentos = {
    'download': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7,10 12,15 17,10"/>
        <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>`,

    'upload': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17,8 12,3 7,8"/>
        <line x1="12" x2="12" y1="3" y2="15"/>
    </svg>`,        

    'folder': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>`,

    'file': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    </svg>`
}

//Redes Sociales
const redessociales = {
    'share': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
    </svg>`,

    'heart': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">        
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>`,
    'thumbs-up': `<svg class="icon-svg" viewBox="0 0 48 48"><path fill="#000000" d="M24.844 3.87c.427-1.165 1.735-2.37 3.383-1.881c1.651.489 2.726 1.668 3.364 3.097c.624 1.396.857 3.075.87 4.764c.023 2.72-.525 5.71-1.24 8.15h5.04c3.463 0 5.977 3.292 5.066 6.632L37.993 36.85a9.25 9.25 0 0 1-11.079 6.56l-14.07-3.37a7.25 7.25 0 0 1-5.295-5.107L6.315 30.5c-.759-2.727.79-5.417 3.205-6.525c6.324-2.902 9.707-7.127 12.357-12.526c.84-1.71 1.455-3.409 2.289-5.715c.21-.58.433-1.198.678-1.864m2.583.544a.65.65 0 0 0-.236.317c-.231.63-.447 1.225-.652 1.793c-.84 2.325-1.512 4.182-2.417 6.027c-2.831 5.766-6.578 10.493-13.56 13.696c-1.46.67-2.222 2.203-1.838 3.582l1.233 4.433a4.75 4.75 0 0 0 3.47 3.346l14.07 3.37a6.75 6.75 0 0 0 8.084-4.787l3.334-12.217a2.75 2.75 0 0 0-2.653-3.474H29.5a1.25 1.25 0 0 1-1.175-1.677c.884-2.432 1.662-5.935 1.637-8.953c-.012-1.511-.226-2.806-.654-3.765c-.414-.926-.996-1.484-1.791-1.72c-.013-.003-.017-.003-.022-.002a.2.2 0 0 0-.068.03"/></svg>`,

    'star': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
    </svg>`,

    'github': `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"/></svg>`,
}

//Comercio
const comercio = {
    'shopping-cart': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="8" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>`,

    'credit-card': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>`,

    'tag': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.486 8.486a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z"/>
        <circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/>
    </svg>`,

    'gift': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="8" width="18" height="4" rx="1"/>
        <path d="M12 8v13"/>
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
    </svg>`,

    'task': `<svg class="icon-svg" viewBox="0 0 24 24"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 5h10M11 9h5"/><rect width="4" height="4" x="3" y="5" rx="1"/><path d="M11 15h10m-10 4h5"/><rect width="4" height="4" x="3" y="15" rx="1"/></g></svg>`,

    'box': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M3 9h18M9 21V9"/>
    </svg>`,

    'box-plus': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <path d="M12 8v8M8 12h8"/>
        </svg>`,
    
    'invoice': `<svg class="icon-svg" viewBox="0 0 16 16"><path fill="#000000" d="M4.4 10.2c-.6.1-1.4-.3-1.7-.4l-.5.9s.9.4 1.7.5v.8h1v-.9c.9-.3 1.4-1.1 1.5-1.8c0-.8-.6-1.4-1.9-1.9c-.4-.2-1.1-.5-1.1-.9c0-.5.4-.8 1-.8c.7 0 1.4.3 1.4.3l.4-.9s-.5-.2-1.2-.4V4H4v.7c-.9.2-1.5.8-1.6 1.7c0 1.2 1.3 1.7 1.8 1.9c.6.2 1.3.6 1.3.9c0 .4-.4.9-1.1 1"/><path fill="#000000" d="M0 2v12h16V2zm15 11H1V3h14z"/><path fill="#000000" d="M8 5h6v1H8zm0 2h6v1H8zm0 2h3v1H8z"/></svg>`,

    'ticket': `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14v18l-1.032-.884a2 2 0 0 0-2.603 0L14.333 21l-1.031-.884a2 2 0 0 0-2.604 0L9.667 21l-1.032-.884a2 2 0 0 0-2.603 0L5 21zm10 4H9m6 4H9m6 4h-4"/></svg>`,
}


const IconLibrary = {
    "navegacionyui": navegacionyui,
    "comunicacion": comunicacion,
    "archivosydocumentos": archivosydocumentos,
    "redessociales": redessociales,
    "comercio": comercio
};