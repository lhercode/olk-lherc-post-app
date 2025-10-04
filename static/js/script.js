// Datos de los links (se cargarán desde Hugo)
const linkData = {
    github: {
        title: "GitHub",
        description: "Mi código y proyectos",
        url: "https://github.com/lherc",
        image: "/images/github.jpg"
    },
    linkedin: {
        title: "LinkedIn", 
        description: "Mi perfil profesional",
        url: "https://linkedin.com/in/lherc",
        image: "/images/linkedin.jpg"
    },
    twitter: {
        title: "Twitter",
        description: "Mis pensamientos y actualizaciones", 
        url: "https://twitter.com/lherc",
        image: "/images/twitter.jpg"
    },
    portfolio: {
        title: "Portfolio",
        description: "Mis proyectos y trabajos",
        url: "https://lherc.dev", 
        image: "/images/portfolio.jpg"
    },
    blog: {
        title: "Blog",
        description: "Artículos y tutoriales",
        url: "https://blog.lherc.dev",
        image: "/images/blog.jpg"
    },
    email: {
        title: "Email",
        description: "Contáctame directamente",
        url: "mailto:hola@lherc.dev",
        image: "/images/email.jpg"
    }
};

// Función para abrir un link
function openLink(url) {
    window.open(url, '_blank');
}

// Función para abrir el modal
function openModal(linkId) {
    const modal = document.getElementById('linkModal');
    const data = linkData[linkId];
    
    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalLink').href = data.url;
        document.getElementById('modalImage').src = data.image;
        document.getElementById('modalImage').alt = data.title;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('linkModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera de él
window.onclick = function(event) {
    const linkModal = document.getElementById('linkModal');
    const timelineModal = document.getElementById('timelineModal');
    
    if (event.target === linkModal) {
        closeModal();
    } else if (event.target === timelineModal) {
        closeTimelineModal();
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeTimelineModal();
    }
});

// Función para toggle del timeline
function toggleTimeline() {
    const timelineContent = document.getElementById('timeline-content');
    const timelineIcon = document.getElementById('timeline-icon');
    
    if (timelineContent.style.display === 'none') {
        timelineContent.style.display = 'block';
        timelineIcon.className = 'fas fa-chevron-up';
        timelineContent.style.animation = 'slideDown 0.3s ease';
    } else {
        timelineContent.style.display = 'none';
        timelineIcon.className = 'fas fa-chevron-down';
    }
}

// Función para toggle de tareas completadas
function toggleCompleted(button) {
    const completedItems = button.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (completedItems.style.display === 'none') {
        completedItems.style.display = 'block';
        icon.className = 'fas fa-chevron-up';
    } else {
        completedItems.style.display = 'none';
        icon.className = 'fas fa-chevron-down';
    }
}

// Función para abrir el modal del timeline
function openTimelineModal(title, description, category, date, status) {
    const modal = document.getElementById('timelineModal');
    const icon = document.getElementById('timelineModalIcon');
    
    // Actualizar contenido del modal
    document.getElementById('timelineModalTitle').textContent = title;
    document.getElementById('timelineModalDescription').textContent = description;
    document.getElementById('timelineModalCategory').textContent = category;
    document.getElementById('timelineModalDate').textContent = date;
    
    // Actualizar estado
    const statusElement = document.getElementById('timelineModalStatus');
    statusElement.className = `timeline-modal-status status-${status}`;
    
    if (status === 'done') {
        statusElement.innerHTML = '<i class="fas fa-check"></i> Completado';
        icon.className = 'fas fa-check-circle';
    } else if (status === 'inprocess') {
        statusElement.innerHTML = '<i class="fas fa-clock"></i> En Proceso';
        icon.className = 'fas fa-clock';
    } else {
        statusElement.innerHTML = '<i class="fas fa-circle"></i> Pendiente';
        icon.className = 'fas fa-circle';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal del timeline
function closeTimelineModal() {
    const modal = document.getElementById('timelineModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Animaciones de entrada
document.addEventListener('DOMContentLoaded', function() {
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Animaciones para timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
});
