/**
 * Europa Foods – Shared Mobile Navigation
 * Include this script at the bottom of every page to enable the mobile menu.
 */
(function () {
    'use strict';

    // Build mobile menu overlay
    const overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.className = 'fixed inset-0 z-[100] pointer-events-none opacity-0';
    overlay.style.transition = 'opacity 0.3s ease';

    // Detect current page for active state
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';

    const links = [
        { label: 'Home', href: 'home.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Products', href: 'products.html' },
        { label: 'Quality', href: 'qa.html' },
        { label: 'Achievements', href: 'achievement.html' },
        { label: 'Shipments', href: 'shipment.html' },
        { label: 'Contact', href: 'contact.html' },
    ];

    const navLinksHTML = links
        .map((l) => {
            const isActive =
                currentPage === l.href ||
                (currentPage === 'index.html' && l.href === 'home.html') ||
                (currentPage === '' && l.href === 'home.html');
            return `<a href="${l.href}" class="block text-[22px] font-body-lg py-3 px-2 rounded transition-colors duration-200 ${
                isActive
                    ? 'text-champagne-gold font-semibold border-l-4 border-champagne-gold pl-5 bg-champagne-gold/5'
                    : 'text-stark-white hover:text-champagne-gold hover:bg-stark-white/5 pl-6'
            }">${l.label}</a>`;
        })
        .join('');

    overlay.innerHTML = `
    <!-- Backdrop -->
    <div id="mobile-menu-backdrop" class="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm" style="transition: opacity 0.3s ease;"></div>
    <!-- Slide-in Panel -->
    <div id="mobile-menu-panel" class="absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-deep-navy shadow-2xl border-l border-champagne-gold/10 flex flex-col transform translate-x-full" style="transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-stark-white/10">
            <span class="font-headline-md text-headline-md font-serif text-champagne-gold">Europa Foods</span>
            <button id="mobile-menu-close" class="text-stark-white hover:text-champagne-gold transition-colors p-1">
                <span class="material-symbols-outlined text-3xl">close</span>
            </button>
        </div>
        <!-- Links -->
        <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            ${navLinksHTML}
        </nav>
        <!-- CTA -->
        <div class="px-6 pb-8 pt-4 border-t border-stark-white/10">
            <a href="contact.html" class="block text-center bg-champagne-gold text-deep-navy font-label-caps text-label-caps px-6 py-4 rounded uppercase tracking-wider hover:bg-secondary-fixed-dim transition-colors font-semibold">
                Request a Quote
            </a>
        </div>
    </div>`;

    document.body.appendChild(overlay);

    const panel = document.getElementById('mobile-menu-panel');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const closeBtn = document.getElementById('mobile-menu-close');

    function openMenu() {
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('pointer-events-auto', 'opacity-100');
        panel.style.transform = 'translateX(0)';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        panel.style.transform = 'translateX(100%)';
        overlay.classList.remove('pointer-events-auto', 'opacity-100');
        overlay.classList.add('pointer-events-none', 'opacity-0');
        document.body.style.overflow = '';
    }

    // Bind the hamburger button(s) present in the page
    document.querySelectorAll('button.md\\:hidden, div.md\\:hidden').forEach((btn) => {
        // Only bind if it contains the menu icon
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon && icon.textContent.trim() === 'menu') {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', openMenu);
        }
    });

    // Also check for span.md:hidden wrapping a menu icon (index.html pattern)
    document.querySelectorAll('.md\\:hidden').forEach((el) => {
        if (el.tagName === 'DIV') {
            const icon = el.querySelector('.material-symbols-outlined');
            if (icon && icon.textContent.trim() === 'menu') {
                el.style.cursor = 'pointer';
                el.addEventListener('click', openMenu);
            }
        }
    });

    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
})();
