/**
 * Cleanseas Website JavaScript
 * Modern, accessible, and responsive functionality
 */

(function() {
    'use strict';

    // ===== THEME MANAGEMENT =====
    class ThemeManager {
        constructor() {
            this.themeToggle = document.querySelector('.theme-toggle');
            this.themeIcon = document.querySelector('.theme-icon');
            this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();
            
            this.init();
        }

        init() {
            this.setTheme(this.currentTheme);
            this.bindEvents();
            this.watchSystemTheme();
        }

        getStoredTheme() {
            return localStorage.getItem('theme');
        }

        getPreferredTheme() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            this.updateThemeIcon(theme);
            localStorage.setItem('theme', theme);
            this.currentTheme = theme;
        }

        updateThemeIcon(theme) {
            if (this.themeIcon) {
                this.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
                this.themeToggle.setAttribute('aria-label', 
                    theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
                );
            }
        }

        toggleTheme() {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        }

        bindEvents() {
            if (this.themeToggle) {
                this.themeToggle.addEventListener('click', () => this.toggleTheme());
            }
        }

        watchSystemTheme() {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                if (!this.getStoredTheme()) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // ===== NAVIGATION MANAGEMENT =====
    class NavigationManager {
        constructor() {
            this.header = document.querySelector('.header');
            this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            this.nav = document.querySelector('.nav');
            this.navLinks = document.querySelectorAll('.nav-link');
            this.sections = document.querySelectorAll('section[id]');
            
            this.init();
        }

        init() {
            this.bindEvents();
            this.handleScroll();
            this.setupSmoothScrolling();
        }

        bindEvents() {
            // Mobile menu toggle
            if (this.mobileMenuBtn && this.nav) {
                this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
            }

            // Close mobile menu when clicking nav links
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });

            // Scroll event for header and active nav
            window.addEventListener('scroll', () => this.handleScroll());

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.header.contains(e.target) && this.nav.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });

            // Handle escape key for mobile menu
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.nav.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });
        }

        toggleMobileMenu() {
            const isActive = this.nav.classList.toggle('active');
            this.mobileMenuBtn.classList.toggle('active');
            this.mobileMenuBtn.setAttribute('aria-expanded', isActive);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isActive ? 'hidden' : '';
        }

        closeMobileMenu() {
            this.nav.classList.remove('active');
            this.mobileMenuBtn.classList.remove('active');
            this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        handleScroll() {
            const scrollY = window.scrollY;
            
            // Header scroll effect
            if (scrollY > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }

            // Active navigation highlighting
            this.updateActiveNavigation();
        }

        updateActiveNavigation() {
            const scrollPos = window.scrollY + 100; // Offset for header

            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        setupSmoothScrolling() {
            this.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            const headerHeight = this.header.offsetHeight;
                            const targetPosition = target.offsetTop - headerHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
        }
    }

    // ===== FORM MANAGEMENT =====
    class FormManager {
        constructor() {
            this.contactForm = document.querySelector('.contact-form');
            this.init();
        }

        init() {
            if (this.contactForm) {
                this.bindEvents();
            }
        }

        bindEvents() {
            this.contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Real-time validation
            const inputs = this.contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearError(input));
            });
        }

        handleSubmit(e) {
            e.preventDefault();
            
            const formData = new FormData(this.contactForm);
            let isValid = true;

            // Validate all fields
            const requiredFields = this.contactForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });

            if (isValid) {
                this.submitForm(formData);
            }
        }

        validateField(field) {
            const value = field.value.trim();
            const fieldName = field.name;
            let isValid = true;
            let errorMessage = '';

            // Clear previous errors
            this.clearError(field);

            // Required field validation
            if (field.hasAttribute('required') && !value) {
                errorMessage = 'Este campo es obligatorio.';
                isValid = false;
            }
            // Email validation
            else if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Por favor, introduce un email válido.';
                    isValid = false;
                }
            }
            // Name validation
            else if (fieldName === 'name' && value) {
                if (value.length < 2) {
                    errorMessage = 'El nombre debe tener al menos 2 caracteres.';
                    isValid = false;
                }
            }
            // Message validation
            else if (fieldName === 'message' && value) {
                if (value.length < 10) {
                    errorMessage = 'El mensaje debe tener al menos 10 caracteres.';
                    isValid = false;
                }
            }

            if (!isValid) {
                this.showError(field, errorMessage);
            }

            return isValid;
        }

        showError(field, message) {
            const errorElement = document.getElementById(`${field.name}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');
        }

        clearError(field) {
            const errorElement = document.getElementById(`${field.name}-error`);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
            field.classList.remove('error');
            field.removeAttribute('aria-invalid');
        }

        async submitForm(formData) {
            const submitBtn = this.contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            try {
                // Show loading state
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Show success message
                this.showSuccessMessage();
                this.contactForm.reset();

            } catch (error) {
                this.showErrorMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            } finally {
                // Restore button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }

        showSuccessMessage() {
            const message = document.createElement('div');
            message.className = 'alert alert-success';
            message.textContent = '¡Mensaje enviado correctamente! Te responderemos pronto.';
            message.style.cssText = `
                background-color: var(--success-color);
                color: white;
                padding: var(--spacing-md);
                border-radius: var(--border-radius-md);
                margin-bottom: var(--spacing-lg);
                text-align: center;
            `;
            
            this.contactForm.insertBefore(message, this.contactForm.firstChild);
            
            // Remove message after 5 seconds
            setTimeout(() => message.remove(), 5000);
        }

        showErrorMessage(text) {
            const message = document.createElement('div');
            message.className = 'alert alert-error';
            message.textContent = text;
            message.style.cssText = `
                background-color: var(--danger-color);
                color: white;
                padding: var(--spacing-md);
                border-radius: var(--border-radius-md);
                margin-bottom: var(--spacing-lg);
                text-align: center;
            `;
            
            this.contactForm.insertBefore(message, this.contactForm.firstChild);
            
            // Remove message after 5 seconds
            setTimeout(() => message.remove(), 5000);
        }
    }

    // ===== ANIMATION MANAGER =====
    class AnimationManager {
        constructor() {
            this.animatedElements = document.querySelectorAll('.card, .value-card, .activity-card, .stat');
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
        }

        setupIntersectionObserver() {
            // Check if user prefers reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                return;
            }

            const options = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            this.animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                observer.observe(el);
            });
        }
    }

    // ===== ACCESSIBILITY MANAGER =====
    class AccessibilityManager {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.addSkipLinks();
        }

        setupKeyboardNavigation() {
            // Enhanced keyboard navigation for mobile menu
            document.addEventListener('keydown', (e) => {
                const nav = document.querySelector('.nav');
                if (nav.classList.contains('active')) {
                    if (e.key === 'Tab') {
                        this.trapFocus(e, nav);
                    }
                }
            });
        }

        trapFocus(e, container) {
            const focusableElements = container.querySelectorAll(
                'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
            );
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }

        setupFocusManagement() {
            // Ensure focus is visible for keyboard users
            document.addEventListener('mousedown', () => {
                document.body.classList.add('mouse-user');
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    document.body.classList.remove('mouse-user');
                }
            });
        }

        addSkipLinks() {
            // Skip links are already in HTML, ensure they work properly
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        target.scrollIntoView();
                    }
                });
            }
        }
    }

    // ===== PERFORMANCE MANAGER =====
    class PerformanceManager {
        constructor() {
            this.init();
        }

        init() {
            this.lazyLoadImages();
            this.preloadCriticalResources();
        }

        lazyLoadImages() {
            // For future image implementations
            const images = document.querySelectorAll('img[data-src]');
            
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                images.forEach(img => imageObserver.observe(img));
            } else {
                // Fallback for older browsers
                images.forEach(img => {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                });
            }
        }

        preloadCriticalResources() {
            // Preload critical CSS and fonts (already done in HTML)
            // This could be extended for other critical resources
        }
    }

    // ===== INITIALIZATION =====
    class App {
        constructor() {
            this.init();
        }

        init() {
            // Wait for DOM to be fully loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
            } else {
                this.initializeComponents();
            }
        }

        initializeComponents() {
            try {
                // Initialize all managers
                new ThemeManager();
                new NavigationManager();
                new FormManager();
                new AnimationManager();
                new AccessibilityManager();
                new PerformanceManager();

                // Add CSS animation keyframes
                this.addAnimationStyles();

                console.log('✅ Cleanseas website initialized successfully');
            } catch (error) {
                console.error('❌ Error initializing website:', error);
            }
        }

        addAnimationStyles() {
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .mouse-user *:focus {
                    outline: none;
                }

                .error {
                    border-color: var(--danger-color) !important;
                }

                .alert {
                    animation: slideDown 0.3s ease-out;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ===== START APPLICATION =====
    new App();

})();
