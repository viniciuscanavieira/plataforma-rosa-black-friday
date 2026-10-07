/* ============================================
   COUNTDOWN TIMER
   ============================================ */

function initializeCountdown() {
    // Data de término do countdown (ajuste conforme necessário)
    const targetDate = new Date('2026-01-05T23:59:59').getTime();
    let countdownInterval = null;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
                const element = document.getElementById(id);
                if (element) element.textContent = '00';
            });
            if (countdownInterval !== null) clearInterval(countdownInterval);
            return;
        }

        // Cálculos de tempo
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Atualiza elementos no DOM
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Anima mudança de valor
        if (daysElement && daysElement.textContent !== String(days).padStart(2, '0')) {
            daysElement.style.opacity = '0.5';
            setTimeout(() => {
                daysElement.textContent = String(days).padStart(2, '0');
                daysElement.style.opacity = '1';
            }, 150);
        }

        if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');

    }

    // Atualiza imediatamente
    updateCountdown();

    if (targetDate > Date.now()) {
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

/* ============================================
   SMOOTH SCROLLING E INTERAÇÕES
   ============================================ */

function initializeSmoothScroll() {
    // Smooth scroll para links internos
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
}

/* ============================================
   BOTÕES COM FEEDBACK
   ============================================ */

function initializeButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Cria efeito ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            // Remove qualquer ripple anterior
            const oldRipple = this.querySelector('.ripple');
            if (oldRipple) oldRipple.remove();

            this.appendChild(ripple);

            // Simula ação (em produção, seria um link ou formulário)
            console.log('Botão clicado:', this.textContent.trim());
        });

        // Adiciona feedback visual de hover
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa elementos com classe 'scroll-animate'
    document.querySelectorAll('.feature-card').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

/* ============================================
   PERFORMANCE E LAZY LOADING
   ============================================ */

function initializeLazyLoading() {
    // Lazy loading nativo para imagens (se houver)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

/* ============================================
   DETECTA REDIMENSIONAMENTO
   ============================================ */

function initializeResponsiveHelper() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
        }, 250);
    });
}

/* ============================================
   DARK MODE / LIGHT MODE (OPCIONAL)
   ============================================ */

function initializeThemeSwitcher() {
    // Verifica preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (prefersLight) {
        document.documentElement.style.colorScheme = 'light';
    }

    // Listener para mudanças de preferência
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.documentElement.style.colorScheme = 'dark';
        }
    });
}

/* ============================================
   INICIALIZAÇÃO
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Executa todas as funções de inicialização
    initializeCountdown();
    initializeSmoothScroll();
    initializeButtons();
    initializeScrollAnimations();
    initializeLazyLoading();
    initializeResponsiveHelper();
    initializeThemeSwitcher();

    console.log('✓ Plataforma Rosa - Aplicação iniciada com sucesso!');
});

/* ============================================
   FUNÇÕES AUXILIARES
   ============================================ */

// Formata números com zeros à esquerda
function padZero(num) {
    return String(num).padStart(2, '0');
}

// Valida email (se necessário para formulários futuros)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para rastrear eventos de clique
function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

/* ============================================
   EFEITOS VISUAIS EXTRAS
   ============================================ */

// Adiciona efeito de parallax leve no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

// Cursor customizado (opcional)
document.addEventListener('mousemove', (e) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        const isHovering = (
            e.clientX >= rect.left && 
            e.clientX <= rect.right && 
            e.clientY >= rect.top && 
            e.clientY <= rect.bottom
        );
        
        if (isHovering) {
            btn.style.cursor = 'pointer';
        }
    });
});
