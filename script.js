// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Follower
const cursor = document.querySelector('.cursor-follower');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Hover effect for links to enlarge cursor
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Hero Section Animations
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.hero-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    })
    .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta a', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.shape', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.5)'
    }, '-=1.5');

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    if (section.id === 'hero') return;

    gsap.from(section.querySelectorAll('.section-title, .about-text, .stat-item, .skill-card, .project-card, .education-card, .contact-wrapper'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
});

// Parallax effect for shapes
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to('.shape.circle', {
        x: x,
        y: y,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.to('.shape.square', {
        x: -x,
        y: -y,
        duration: 1,
        ease: 'power2.out'
    });
});
