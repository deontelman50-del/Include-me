        const toggle = document.getElementById('NL/EN');
        let lang = localStorage.getItem('lang') || 'nl';

        function setLanguage(newLang) {
            lang = newLang;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-nl]').forEach(el => {
                el.textContent = el.dataset[lang];
            });

            // De knop toont de taal waar je naartoe wisselt
            toggle.textContent = lang === 'nl' ? 'EN' : 'NL';
            localStorage.setItem('lang', lang);
        }

        toggle.addEventListener('click', () => {
            setLanguage(lang === 'nl' ? 'en' : 'nl');
        });

        setLanguage(lang);