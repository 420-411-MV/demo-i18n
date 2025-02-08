import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [ nextLang, setNextLang ] = useState('en');

    const handleChangeLang = () => {
        console.log('Change to ' + nextLang);
        i18n.changeLanguage(nextLang);
        
        if (nextLang == 'fr') {
            setNextLang('en');
        } else {
            setNextLang('fr');
        }

 
    }


    return (
        <>
            <button className='intro' onClick={handleChangeLang}>{nextLang}</button>
            <h1>{t('monchoix')}</h1>
        </>
    );
};

export default Header;