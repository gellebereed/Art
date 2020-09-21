const t1 = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

t1.to('.hide', { duration: 1, opacity: 1, y: '0%', stagger: 0.6 });
t1.to('.slider', { duration: 1, y: '-100%', delay: 1.2 });
t1.to('.welcome-msg', { duration: 1, y: '-100%' }, '-=1');
