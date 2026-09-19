/* ========================================
   EXPLORE ELLA — JavaScript
   Vanilla JS for interactivity
   ======================================== */

(function () {
    'use strict';

    /* ----------------------------------
       UTILITIES
    ---------------------------------- */

    /**
     * Selects a single DOM element
     */
    function qs(selector, parent) {
        return (parent || document).querySelector(selector);
    }

    /**
     * Selects all matching DOM elements
     */
    function qsa(selector, parent) {
        return Array.from((parent || document).querySelectorAll(selector));
    }

    /* ----------------------------------
       HEADER — Sticky behavior
    ---------------------------------- */

    function initStickyHeader() {
        var header = qs('.site-header');
        if (!header) return;

        var scrollThreshold = 50;

        function onScroll() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ----------------------------------
       MOBILE NAVIGATION
    ---------------------------------- */

    function initMobileNav() {
        var hamburger = qs('.hamburger');
        var nav = qs('.main-nav');
        var overlay = qs('.nav-overlay');

        if (!hamburger || !nav) return;

        function openMenu() {
            hamburger.classList.add('active');
            nav.classList.add('open');
            if (overlay) overlay.classList.add('visible');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            if (overlay) overlay.classList.remove('visible');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', function () {
            var isOpen = nav.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        // Close on nav link click
        qsa('.nav-link', nav).forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                closeMenu();
                hamburger.focus();
            }
        });
    }

    /* ----------------------------------
       ACTIVE NAVIGATION STATE
    ---------------------------------- */

    function initActiveNav() {
        var currentPage = window.location.pathname.split('/').pop() || 'index.html';

        qsa('.nav-link').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    /* ----------------------------------
       SCROLL REVEAL ANIMATION
    ---------------------------------- */

    function initScrollReveal() {
        var reveals = qsa('.reveal');
        if (reveals.length === 0) return;

        // Check if user prefers reduced motion
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            reveals.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ----------------------------------
       GALLERY LIGHTBOX
    ---------------------------------- */

    function initLightbox() {
        var lightbox = qs('.lightbox');
        if (!lightbox) return;

        var lightboxImg = qs('.lightbox-content img', lightbox);
        var lightboxCaption = qs('.lightbox-caption', lightbox);
        var closeBtn = qs('.lightbox-close', lightbox);
        var prevBtn = qs('.lightbox-prev', lightbox);
        var nextBtn = qs('.lightbox-next', lightbox);

        var galleryItems = qsa('.gallery-item');
        var currentIndex = 0;
        var triggerElement = null;

        function openLightbox(index) {
            currentIndex = index;
            var item = galleryItems[index];
            var img = qs('img', item);
            var caption = qs('.gallery-caption h4', item);

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            if (lightboxCaption && caption) {
                lightboxCaption.textContent = caption.textContent;
            }

            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Focus management
            closeBtn.focus();
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            // Return focus
            if (triggerElement) {
                triggerElement.focus();
                triggerElement = null;
            }
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLightbox(currentIndex);
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentIndex);
        }

        galleryItems.forEach(function (item, index) {
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', 'View image: ' + (qs('.gallery-caption h4', item)?.textContent || 'Gallery image'));

            item.addEventListener('click', function () {
                triggerElement = item;
                openLightbox(index);
            });

            item.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    triggerElement = item;
                    openLightbox(index);
                }
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (nextBtn) nextBtn.addEventListener('click', showNext);
        if (prevBtn) prevBtn.addEventListener('click', showPrev);

        // Click backdrop to close
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard controls
        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    showNext();
                    break;
                case 'ArrowLeft':
                    showPrev();
                    break;
            }
        });
    }

    /* ----------------------------------
       GALLERY FILTERS
    ---------------------------------- */

    function initGalleryFilters() {
        var filterBtns = qsa('.filter-btn');
        var galleryItems = qsa('.gallery-item[data-category]');

        if (filterBtns.length === 0) return;

        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var filter = this.getAttribute('data-filter');

                // Update active button
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');

                // Filter items
                galleryItems.forEach(function (item) {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ----------------------------------
       FORM VALIDATION & SUBMISSION
    ---------------------------------- */

    function initContactForm() {
        var form = qs('#inquiry-form');
        if (!form) return;

        var successEl = qs('.form-success');
        var statusRegion = qs('#form-status');

        /**
         * Validates a single field
         */
        function validateField(group) {
            var input = qs('.form-control', group);
            if (!input) return true;

            var errorEl = qs('.error-message', group);
            var isValid = true;
            var errorMsg = '';

            // Required check
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                errorMsg = 'This field is required.';
            }

            // Email check
            if (isValid && input.type === 'email' && input.value.trim()) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value.trim())) {
                    isValid = false;
                    errorMsg = 'Please enter a valid email address.';
                }
            }

            // Phone check
            if (isValid && input.type === 'tel' && input.value.trim()) {
                var phonePattern = /^[\d\s\-\+\(\)]{7,20}$/;
                if (!phonePattern.test(input.value.trim())) {
                    isValid = false;
                    errorMsg = 'Please enter a valid phone number.';
                }
            }

            // Update UI
            if (!isValid) {
                group.classList.add('has-error');
                if (errorEl) {
                    errorEl.textContent = errorMsg;
                    errorEl.style.display = 'block';
                }
            } else {
                group.classList.remove('has-error');
                if (errorEl) {
                    errorEl.style.display = 'none';
                }
            }

            return isValid;
        }

        // Live validation on blur
        qsa('.form-group', form).forEach(function (group) {
            var input = qs('.form-control', group);
            if (input) {
                input.addEventListener('blur', function () {
                    validateField(group);
                });
                input.addEventListener('input', function () {
                    if (group.classList.contains('has-error')) {
                        validateField(group);
                    }
                });
            }
        });

        // Form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var groups = qsa('.form-group', form);
            var allValid = true;

            groups.forEach(function (group) {
                if (!validateField(group)) {
                    allValid = false;
                }
            });

            if (!allValid) {
                // Focus first error
                var firstError = qs('.form-group.has-error .form-control', form);
                if (firstError) firstError.focus();

                if (statusRegion) {
                    statusRegion.textContent = 'Please correct the errors in the form.';
                }
                return;
            }

            // Collect data
            var formData = {
                name: qs('#full-name', form).value.trim(),
                email: qs('#email', form).value.trim(),
                phone: qs('#phone', form).value.trim(),
                date: qs('#travel-date', form).value,
                visitors: qs('#visitors', form).value,
                experience: qs('#experience', form).value,
                message: qs('#message', form).value.trim(),
                timestamp: new Date().toISOString()
            };

            // Save to localStorage for demo
            try {
                var inquiries = JSON.parse(localStorage.getItem('ella_inquiries') || '[]');
                inquiries.push(formData);
                localStorage.setItem('ella_inquiries', JSON.stringify(inquiries));
            } catch (err) {
                // localStorage unavailable, continue silently
            }

            // Show success
            form.style.display = 'none';

            if (successEl) {
                successEl.classList.add('visible');

                // Populate summary
                var summaryEl = qs('.inquiry-summary', successEl);
                if (summaryEl) {
                    summaryEl.innerHTML =
                        '<dl>' +
                        '<dt>Name</dt><dd>' + escapeHtml(formData.name) + '</dd>' +
                        '<dt>Email</dt><dd>' + escapeHtml(formData.email) + '</dd>' +
                        (formData.phone ? '<dt>Phone</dt><dd>' + escapeHtml(formData.phone) + '</dd>' : '') +
                        (formData.date ? '<dt>Travel Date</dt><dd>' + escapeHtml(formData.date) + '</dd>' : '') +
                        (formData.visitors ? '<dt>Visitors</dt><dd>' + escapeHtml(formData.visitors) + '</dd>' : '') +
                        (formData.experience ? '<dt>Experience</dt><dd>' + escapeHtml(formData.experience) + '</dd>' : '') +
                        (formData.message ? '<dt>Message</dt><dd>' + escapeHtml(formData.message) + '</dd>' : '') +
                        '</dl>';
                }
            }

            if (statusRegion) {
                statusRegion.textContent = 'Your inquiry has been recorded successfully. Thank you!';
            }
        });
    }

    /**
     * Escapes HTML to prevent XSS in displayed content
     */
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    /* ----------------------------------
       SMOOTH SCROLL FOR ANCHOR LINKS
    ---------------------------------- */

    function initSmoothScroll() {
        qsa('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;

                var target = qs(targetId);
                if (target) {
                    e.preventDefault();
                    var headerOffset = 90;
                    var top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            });
        });
    }

    /* ----------------------------------
       FOOTER — CURRENT YEAR
    ---------------------------------- */

    function initFooterYear() {
        var yearEl = qs('#current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    /* ----------------------------------
       INITIALISE
    ---------------------------------- */

    function init() {
        initStickyHeader();
        initMobileNav();
        initActiveNav();
        initScrollReveal();
        initLightbox();
        initGalleryFilters();
        initContactForm();
        initSmoothScroll();
        initFooterYear();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
