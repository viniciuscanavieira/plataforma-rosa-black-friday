(function () {
    const section = document.querySelector('.opportunity');

    if (!section || !window.gsap || !window.ScrollTrigger || !window.SplitText) return;

    const { gsap, ScrollTrigger, SplitText } = window;
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
        const context = gsap.context(() => {
            const heading = section.querySelector('.opportunity-heading');
            const title = section.querySelector('.opportunity-title');
            const intro = section.querySelector('.opportunity-intro');
            const bundle = section.querySelector('.opportunity-bundle');
            const bundleRows = section.querySelectorAll('.opportunity-included li');
            const benefits = section.querySelectorAll('.opportunity-benefits span');
            const pricePanel = section.querySelector('.opportunity-bundle-price');
            const productHeading = section.querySelector('.opportunity-options-heading');
            const cards = section.querySelectorAll('.opportunity-product');
            const progress = section.querySelector('.opportunity-progress');
            const splitTitle = SplitText.create(title, {
                type: 'words',
                wordsClass: 'opportunity-word',
                mask: 'words',
                aria: 'auto'
            });

            gsap.fromTo(progress, {
                scaleX: 0
            }, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6
                }
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 82%',
                    once: true
                }
            })
                .from(heading.querySelector('.opportunity-tag'), {
                    autoAlpha: 0,
                    y: 18,
                    duration: 0.55,
                    ease: 'power3.out'
                })
                .from(splitTitle.words, {
                    autoAlpha: 0,
                    yPercent: 110,
                    rotationX: -45,
                    transformOrigin: '50% 100%',
                    duration: 0.8,
                    stagger: 0.055,
                    ease: 'power4.out'
                }, '-=0.25')
                .from(intro, {
                    autoAlpha: 0,
                    y: 18,
                    duration: 0.65,
                    ease: 'power3.out'
                }, '-=0.48');

            gsap.timeline({
                scrollTrigger: {
                    trigger: bundle,
                    start: 'top 78%',
                    once: true
                }
            })
                .from(bundle, {
                    y: 44,
                    scale: 0.975,
                    duration: 0.9,
                    ease: 'power3.out'
                })
                .from(bundle.querySelector('.opportunity-bundle-label'), {
                    autoAlpha: 0,
                    x: -18,
                    duration: 0.48,
                    ease: 'power3.out'
                }, '-=0.56')
                .from(bundle.querySelector('h3'), {
                    autoAlpha: 0,
                    y: 18,
                    duration: 0.55,
                    ease: 'power3.out'
                }, '-=0.3')
                .from(benefits, {
                    autoAlpha: 0,
                    y: 12,
                    scale: 0.94,
                    duration: 0.42,
                    stagger: 0.08,
                    ease: 'back.out(1.7)'
                }, '-=0.28')
                .from(bundleRows, {
                    autoAlpha: 0,
                    x: -20,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power3.out'
                }, '-=0.12')
                .from(section.querySelector('.opportunity-note'), {
                    autoAlpha: 0,
                    y: 16,
                    duration: 0.55,
                    ease: 'power3.out'
                }, '-=0.18')
                .from(pricePanel, {
                    x: 28,
                    scale: 0.96,
                    duration: 0.72,
                    ease: 'back.out(1.35)'
                }, '-=0.78')
                .from(pricePanel.querySelectorAll('.opportunity-total-label, .opportunity-installments, .opportunity-cash-price'), {
                    autoAlpha: 0,
                    y: 12,
                    duration: 0.42,
                    stagger: 0.08,
                    ease: 'power3.out'
                }, '-=0.38');

            gsap.timeline({
                scrollTrigger: {
                    trigger: productHeading,
                    start: 'top 84%',
                    once: true
                }
            })
                .from(productHeading.querySelector('.opportunity-tag'), {
                    autoAlpha: 0,
                    y: 14,
                    duration: 0.45,
                    ease: 'power3.out'
                })
                .from(productHeading.querySelector('h3'), {
                    autoAlpha: 0,
                    y: 20,
                    duration: 0.58,
                    ease: 'power3.out'
                }, '-=0.22');

            cards.forEach((card, index) => {
                const image = card.querySelector('.opportunity-portrait-frame');

                gsap.set(card, { transformPerspective: 1000 });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        once: true
                    },
                    delay: index * 0.1
                })
                    .from(card, {
                        y: 46,
                        rotationX: 7,
                        scale: 0.96,
                        duration: 0.78,
                        ease: 'power3.out'
                    });

                if (image) {
                    gsap.from(image, {
                        clipPath: 'inset(0 100% 0 0 round 13px)',
                        duration: 0.8,
                        ease: 'power3.inOut',
                        scrollTrigger: {
                            trigger: image,
                            start: 'top 90%',
                            once: true
                        }
                    });
                }
            });
        }, section);

        return () => context.revert();
    });

    media.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', () => {
        const cards = gsap.utils.toArray(section.querySelectorAll('.opportunity-product'));
        const cleanups = [];

        cards.forEach(card => {
            const rotateX = gsap.quickTo(card, 'rotationX', { duration: 0.35, ease: 'power3.out' });
            const rotateY = gsap.quickTo(card, 'rotationY', { duration: 0.35, ease: 'power3.out' });

            gsap.set(card, { transformPerspective: 1000, transformOrigin: 'center center' });

            const onPointerMove = event => {
                const bounds = card.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width;
                const y = (event.clientY - bounds.top) / bounds.height;

                rotateX((0.5 - y) * 5);
                rotateY((x - 0.5) * 7);
            };

            const onPointerEnter = () => {
                gsap.to(card, {
                    y: -5,
                    scale: 1.012,
                    borderColor: 'rgba(194, 215, 164, 0.42)',
                    boxShadow: '0 26px 56px rgba(0, 0, 0, 0.34), 0 0 30px rgba(151, 183, 112, 0.1)',
                    duration: 0.35,
                    ease: 'power3.out',
                    overwrite: 'auto'
                });
            };

            const onPointerLeave = () => {
                gsap.to(card, {
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    clearProps: 'borderColor,boxShadow',
                    duration: 0.55,
                    ease: 'elastic.out(1, 0.65)',
                    overwrite: 'auto'
                });
            };

            card.addEventListener('pointermove', onPointerMove);
            card.addEventListener('pointerenter', onPointerEnter);
            card.addEventListener('pointerleave', onPointerLeave);
            cleanups.push(() => {
                card.removeEventListener('pointermove', onPointerMove);
                card.removeEventListener('pointerenter', onPointerEnter);
                card.removeEventListener('pointerleave', onPointerLeave);
            });
        });

        const buttons = section.querySelectorAll('.opportunity-btn:not(:disabled)');
        buttons.forEach(button => {
            const arrow = button.querySelector('.arrow');
            if (!arrow) return;

            const onEnter = () => gsap.to(arrow, { x: 6, duration: 0.28, ease: 'power3.out' });
            const onLeave = () => gsap.to(arrow, { x: 0, duration: 0.42, ease: 'elastic.out(1, 0.55)' });

            button.addEventListener('pointerenter', onEnter);
            button.addEventListener('pointerleave', onLeave);
            cleanups.push(() => {
                button.removeEventListener('pointerenter', onEnter);
                button.removeEventListener('pointerleave', onLeave);
            });
        });

        return () => cleanups.forEach(cleanup => cleanup());
    });
})();
