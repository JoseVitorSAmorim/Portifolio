// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 71, 171, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 71, 171, 0.2)';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador aos cards e seções
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Contadores animados para stats
const animateCounters = () => {
    const stats = document.querySelectorAll('.stat h3');
    const duration = 2000;
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / (duration / 16);
        let current = 0;

        const animate = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + '+';
                requestAnimationFrame(animate);
            } else {
                stat.textContent = target + '+';
            }
        };

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !stat.animated) {
                stat.animated = true;
                animate();
            }
        }, { threshold: 0.5 });

        observer.observe(stat);
    });
};

// Chamada após DOM carregado
document.addEventListener('DOMContentLoaded', animateCounters);

// Menu responsivo (hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Substitua o bloco do hamburger por este:
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// E para fechar ao clicar:
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Efeito parallax no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0px ${window.scrollY * 0.5}px`;
    }
});

// Validação e envio do formulário
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada! ✓';
            submitBtn.style.background = '#06A77D';
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// Hover effect nos project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#FFD700';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#F5F5F5';
    });
});

// Efeito de digitação no título
const typeEffect = () => {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    
    const typeSpeed = 30;
    const type = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, typeSpeed);
        }
    };
    
    window.addEventListener('load', type);
};

// Chamar efeito de digitação quando em mobile
if (window.innerWidth > 768) {
    typeEffect();
}

// Adaptabilidade do layout
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768 && navLinks.style.display === 'flex') {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.backgroundColor = 'transparent';
        navLinks.style.flexDirection = 'row';
        navLinks.style.padding = '0';
    }
});