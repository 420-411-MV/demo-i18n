import '../i18n';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [ lang, setLang ] = useState('en');

    const handleChangeLang = () => {
        if (lang == 'fr') {
            setLang('en');
        } else {
            setLang('fr');
        }

        console.log('Change to ' + lang);
        i18n.changeLanguage(lang);   
    }


    return (
        <>
            <button className='intro' onClick={handleChangeLang}>{lang}</button>
            <h1>{t('monchoix')}</h1>
        </>
    );
};

export default Header;