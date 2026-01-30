import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useRef } from 'react';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const buttonRef = useRef(null);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        const targets = ".animate-text";

        const tl = gsap.timeline();

        tl.to(targets, {
            y: -20,
            autoAlpha: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in",
            onComplete: () => {

                i18n.changeLanguage(newLang);
            }
        })
        tl.fromTo(targets,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
        );
    };

    return (
        <button
            ref={buttonRef}
            title='Idioma/Language'
            onClick={toggleLanguage}
            className=" flex flex-row gap-4 w-10px-3 py-1 px-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors language-btn absolute top-6 h-10 right-8 z-50 text-slate-300 cursor-pointer items-center justify-center"
        >
            {i18n.language === 'pt' ? 'POR' : 'EN'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
            </svg>
        </button>
    );
}

export default LanguageSwitcher;