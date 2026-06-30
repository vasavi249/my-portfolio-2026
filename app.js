// ==========================================================================
// PORTFOLIO INTERACTIVE LOGIC (DARK NAVY THEME)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // Load profile photo from localStorage if present (smooth client-side fallback)
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        const savedPhoto = localStorage.getItem('portfolio_profile_photo');
        if (savedPhoto) {
            profileImg.src = savedPhoto;
        }
    }

    // 1. PROJECT DATA & MODAL HANDLER
    const projectDetails = {
        library: {
            title: "Library Management System",
            category: "Database & Python Application",
            description: "A database-driven application built to automate library administrative workflows. The system replaces traditional paper registers with a centralized registry to manage users, books, and borrowing histories securely.",
            bullets: [
                "Developed a Library Management System to manage books, users, and library operations efficiently.",
                "Implemented secure user registration and session login controls.",
                "Designed CRUD operations to dynamically add, update, search, and delete books in real-time.",
                "Structured relational logic to maintain logs of issued/returned books and calculate overdue fines automatically.",
                "Streamlined database workflows which reduced manual administrative labor by over 60%."
            ],
            techStack: ["Python", "SQL", "MongoDB", "HTML5", "CSS3"]
        },
        weather: {
            title: "Weather Monitoring IoT System",
            category: "IoT & Cloud Systems",
            description: "A smart environmental weather logging dashboard designed to record physical ambient metrics (temperature, humidity) and store structured payloads in a cloud database for subsequent visualization and analytics.",
            bullets: [
                "Designed and built an IoT weather station simulating an ESP32 micro-controller and DHT22 digital sensors.",
                "Established real-time telemetry connections to parse and write data payloads directly into a MongoDB cloud instance.",
                "Created structured sensor queries to monitor data feeds, calculate rolling averages, and identify anomalies.",
                "Coded automated alert triggers to notify administrative dashboards when metrics exceed thresholds.",
                "Implemented standard embedded security checks for telemetry packets to prevent data tampering."
            ],
            techStack: ["Embedded C++", "ESP32", "Arduino IDE", "MongoDB", "DHT22 Sensors"]
        },
        watering: {
            title: "Automatic Plant Watering System",
            category: "IoT & Simulation",
            description: "A virtual smart irrigation prototype modeled on micro-controllers and digital sensor networks. The system tracks ambient soil moisture in real-time and coordinates automatic irrigation to conserve water while ensuring optimal plant health.",
            bullets: [
                "Developed a virtual Automatic Plant Watering System using Wokwi simulator and Arduino framework.",
                "Coded automated watering trigger rules to execute water cycles when soil moisture drops below specific thresholds.",
                "Integrated simulated digital sensors to monitor soil moisture, temperature, and relative humidity.",
                "Utilized DHT11/DHT22 sensor libraries and Adafruit Unified Sensor structures.",
                "Simulated real-time telemetries to optimize water usage efficiency and prevent over-irrigation."
            ],
            techStack: ["Wokwi Simulator", "Arduino IDE", "Embedded C++", "DHT Libraries", "Virtual Sensors"]
        },
        problemsolving: {
            title: "Algorithmic Problem Solving Milestones",
            category: "Data Structures & Algorithms",
            description: "A persistent study and implementation framework focusing on solving complex programming problems on platforms like LeetCode and GeeksforGeeks. Built to refine algorithmic efficiency, write optimized code, and understand data structure abstractions.",
            bullets: [
                "Solved 200+ distinct coding questions covering core data structures (linked lists, trees, heaps, graphs).",
                "Developed proficiency in algorithmic design patterns (Dynamic Programming, Backtracking, Divide & Conquer).",
                "Achieved optimal space/time complexities (O(N log N) or O(N)) on highly recursive execution environments.",
                "Participated in weekly competitive contests to sharpen analytical reasoning and time management under pressure.",
                "Maintained a clean GitHub repository containing documented, clean-code solutions for references."
            ],
            techStack: ["Python", "C++", "LeetCode", "GeeksforGeeks", "GitHub", "Algorithmic Analysis"]
        }
    };

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');
    const closeBtn = document.querySelector('.modal-close-btn');
    const backdrop = document.querySelector('.modal-backdrop');

    function openModal(projectId) {
        const data = projectDetails[projectId];
        if (!data) return;

        // Build HTML content for the modal
        let techHTML = data.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        let bulletsHTML = data.bullets.map(bullet => `<li>${bullet}</li>`).join('');

        modalBody.innerHTML = `
            <h3 class="modal-title">${data.title}</h3>
            <p class="modal-subtitle">${data.category}</p>
            <div class="modal-details-title">Project Summary</div>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.98rem; line-height: 1.6;">${data.description}</p>
            <div class="modal-details-title">Key Contributions</div>
            <ul class="modal-bullets">${bulletsHTML}</ul>
            <div class="modal-details-title" style="margin-bottom: 1rem;">Technologies Used</div>
            <div class="modal-tech">${techHTML}</div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable background scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Enable background scroll
    }

    // Attach click listeners to expand buttons
    document.querySelectorAll('.project-expand-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Close modal on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });


    // 2. MOBILE NAVIGATION HAMBURGER MENU
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Disable body scroll when menu is open on mobile
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // 3. SCROLL PROGRESS BAR & NAV SCROLLED STYLING
    const scrollBar = document.getElementById('scroll-progress-bar');
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Scroll progress
        const windowScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = (windowScroll / height) * 100;
        
        if (scrollBar) {
            scrollBar.style.width = scrolledPercentage + '%';
        }

        // Header scrolled state
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });


    // 4. BACK TO TOP BUTTON
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // 5. PROJECTS FILTER SYSTEM
    const projFilterButtons = document.querySelectorAll('.proj-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            projFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                card.style.display = 'flex';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.96)';

                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 150);
            });
        });
    });


    // 6. CONTACT FORM VALIDATION & SUBMISSION HANDLING
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    const formStatus = document.getElementById('form-status');

    // Helper for validation display
    function validateField(input, condition) {
        const formGroup = input.parentElement;
        if (condition) {
            formGroup.classList.remove('invalid');
            return true;
        } else {
            formGroup.classList.add('invalid');
            return false;
        }
    }

    // Real-time error clearing
    nameInput.addEventListener('input', () => validateField(nameInput, nameInput.value.trim() !== ''));
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(emailInput, emailRegex.test(emailInput.value.trim()));
    });
    subjectInput.addEventListener('input', () => validateField(subjectInput, subjectInput.value.trim() !== ''));
    messageInput.addEventListener('input', () => validateField(messageInput, messageInput.value.trim() !== ''));

    // Handle Form Submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Perform validations
        const isNameValid = validateField(nameInput, nameInput.value.trim() !== '');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
        const isSubjectValid = validateField(subjectInput, subjectInput.value.trim() !== '');
        const isMessageValid = validateField(messageInput, messageInput.value.trim() !== '');

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Form is valid: Simulate submission
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitText = submitBtn.querySelector('span');
            const submitSvg = submitBtn.querySelector('svg');

            // Set button to loading state
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
            submitText.textContent = "Sending...";
            submitSvg.style.transform = "translateX(5px)";

            setTimeout(() => {
                // Success feedback
                formStatus.className = "form-status success";
                formStatus.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been sent successfully.`;
                
                // Reset form fields
                contactForm.reset();
                
                // Reset submit button state
                submitBtn.style.opacity = '';
                submitBtn.style.pointerEvents = '';
                submitText.textContent = "Send Message";
                submitSvg.style.transform = "";

                // Scroll to message feedback
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Remove feedback after a delay
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);

            }, 1800);
        } else {
            // Form is invalid: Display general error feedback
            formStatus.className = "form-status error";
            formStatus.textContent = "Please correct the highlighted fields and try again.";
            formStatus.style.display = 'block';
        }
    });

});

// ==========================================================================
// VISUAL EFFECTS ENGINE
// ==========================================================================

/* ── 1. SCROLL REVEAL (Intersection Observer) ── */
(function () {
    const revealEls    = document.querySelectorAll('[data-reveal]');
    const revealGroups = document.querySelectorAll('[data-reveal-group]');
    const timelineEls   = document.querySelectorAll('.timeline');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
    revealGroups.forEach(el => observer.observe(el));
    timelineEls.forEach(el => observer.observe(el));

    // Also mark about-feature-cards for timeline transition
    document.querySelectorAll('.about-feature-card').forEach(card => observer.observe(card));
})();


/* ── 2. TYPEWRITER EFFECT on Hero Subtitle ── */
(function () {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const fullText = subtitle.textContent.trim();
    subtitle.textContent = '';

    // Create cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    subtitle.appendChild(cursor);

    let i = 0;
    function type() {
        if (i < fullText.length) {
            subtitle.insertBefore(document.createTextNode(fullText[i]), cursor);
            i++;
            setTimeout(type, i === 1 ? 600 : 20); // Start delay on first char
        }
    }

    // Start typing after a short intro delay
    setTimeout(type, 800);
})();


/* ── 3. ANIMATED STAT COUNTERS ── */
(function () {
    const statNums = document.querySelectorAll('.hqs-value');

    function animateCount(el) {
        const raw    = el.textContent.trim();
        const suffix = raw.replace(/[\d.]/g, '');       // "+", "%", etc.
        const target = parseFloat(raw);
        const isFloat = raw.includes('.');
        const duration = 1600;
        const steps    = 50;
        const increment = target / steps;
        let current    = 0;
        let step       = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            if (step >= steps) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = (isFloat ? current.toFixed(2) : Math.floor(current)) + suffix;
        }, duration / steps);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => counterObserver.observe(el));
})();


/* ── 4. PROJECT CARD MOUSE SPOTLIGHT ── */
(function () {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width)  * 100;
            const y = ((e.clientY - rect.top)  / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });
})();


/* ── 5. BUTTON RIPPLE EFFECT ── */
(function () {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect   = btn.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height);
            const x      = e.clientX - rect.left - size / 2;
            const y      = e.clientY - rect.top  - size / 2;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
            btn.appendChild(ripple);

            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
})();


/* ── 6. CARDS 3-D TILT on Hover ── */
(function () {
    const tiltElements = document.querySelectorAll('.skills-card, .project-card, .timeline-content, .about-feature-card, .contact-form-block');
    tiltElements.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const cx   = rect.left + rect.width  / 2;
            const cy   = rect.top  + rect.height / 2;
            const dx   = (e.clientX - cx) / (rect.width  / 2);
            const dy   = (e.clientY - cy) / (rect.height / 2);
            card.style.transform = `perspective(800px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();


/* ── 7. ROLE TEXT ROTATOR ── */
(function () {
    const roles = [
        'Aspiring Software Engineer',
        'Efficient Problem Solver',
        'Innovative Developer',
        'Analytical Mind',
        'Active Tech Learner'
    ];
    const el = document.getElementById('role-text');
    if (!el) return;

    let idx = 0;
    function rotateRole() {
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        setTimeout(() => {
            idx = (idx + 1) % roles.length;
            el.textContent = roles[idx];
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    }

    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setInterval(rotateRole, 3000);
})();


/* ── 8. ACTIVE NAV LINK (Scroll Spy) ── */
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active',
                        link.getAttribute('href') === '#' + entry.target.id
                    );
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(sec => spy.observe(sec));
})();


/* ── 9. ANIMATED SKILL PROFICIENCY BARS ── */
(function () {
    const bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const pct  = fill.getAttribute('data-pct') || '0';
                setTimeout(() => {
                    fill.style.width = pct + '%';
                }, 150);
                barObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.2 });

    bars.forEach(bar => barObserver.observe(bar));
})();


/* ── 10. RESUME DOWNLOAD TOAST ── */
(function () {
    const btn   = document.getElementById('resume-download-btn');
    const toast = document.getElementById('toast');
    if (!btn || !toast) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <span>Resume download is simulated. Please contact via email!</span>
        `;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    });
})();


/* ── 11. FUTURISTIC AI CONSTELLATION PARTICLE NETWORK ── */
(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let stars = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null, radius: 160 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    });

    // Static background stars (constellation dots)
    class Star {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 1.0 + 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.twinkleSpeed = Math.random() * 0.02 + 0.005;
            this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            this.opacity += this.twinkleSpeed * this.twinkleDir;
            if (this.opacity > 0.7 || this.opacity < 0.05) {
                this.twinkleDir *= -1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 210, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Dynamic moving particles
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.8 + 0.8;
            // Colors: violet, blue, cyan
            const colors = [
                [139, 92, 246],   // violet
                [79, 70, 229],    // indigo
                [59, 130, 246],   // blue
                [99, 102, 241],   // purple
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.4 + 0.15;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse repulsion
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let force = (mouse.radius - dist) / mouse.radius;
                    this.x -= dx / dist * force * 2;
                    this.y -= dy / dist * force * 2;
                }
            }
        }

        draw() {
            const [r, g, b] = this.color;
            // Glow effect - outer ring
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity + 0.2})`;
            ctx.fill();
        }
    }

    function init() {
        stars = [];
        particles = [];

        // Create constellation stars
        const numStars = Math.min(180, Math.floor((width * height) / 8000));
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // Create dynamic particles
        const numParticles = Math.min(65, Math.floor((width * height) / 18000));
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        const connectionDistance = 120;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const alpha = 0.15 * (1 - dist / connectionDistance);
                    // Blend the two particle colors
                    const [r1, g1, b1] = particles[i].color;
                    const [r2, g2, b2] = particles[j].color;
                    const r = Math.floor((r1 + r2) / 2);
                    const g = Math.floor((g1 + g2) / 2);
                    const b = Math.floor((b1 + b2) / 2);

                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Connect particles to mouse position
        if (mouse.x !== null && mouse.y !== null) {
            particles.forEach(p => {
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const alpha = 0.25 * (1 - dist / 180);
                    const [r, g, b] = p.color;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw static stars
        stars.forEach(s => { s.update(); s.draw(); });

        // Draw connections
        drawConnections();

        // Draw dynamic particles
        particles.forEach(p => { p.update(); p.draw(); });

        requestAnimationFrame(animate);
    }

    init();
    animate();
})();


/* ── 12. FLOATING CODE SYMBOLS AMBIENT EFFECT ── */
(function () {
    const symbols = ['</', '{}', '=>', '&&', '||', '()', '[]', '01', ';;', '//', '**', '!=', '<=', '>=', '++', '--', '::', '&&', 'fn()', 'def', 'var', 'let', 'const', 'null', 'true', 'if{}'];
    const container = document.body;
    const maxSymbols = 12;
    let activeCount = 0;

    function createSymbol() {
        if (activeCount >= maxSymbols) return;
        activeCount++;

        const el = document.createElement('div');
        el.className = 'floating-code-symbol';
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        const left = Math.random() * 90 + 5;
        el.style.left = left + '%';
        el.style.fontSize = (Math.random() * 0.6 + 0.65) + 'rem';
        el.style.opacity = '0';

        const duration = Math.random() * 15 + 18;
        const delay = Math.random() * 5;
        el.style.animationDuration = duration + 's';
        el.style.animationDelay = delay + 's';

        container.appendChild(el);

        // Remove after animation completes
        setTimeout(() => {
            if (el.parentNode) el.parentNode.removeChild(el);
            activeCount--;
        }, (duration + delay) * 1000 + 500);
    }

    // Generate symbols periodically
    setInterval(createSymbol, 2500);

    // Initial batch
    for (let i = 0; i < 6; i++) {
        setTimeout(createSymbol, i * 800);
    }
})();


