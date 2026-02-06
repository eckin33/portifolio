import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';


function Navbar() {
    const { t } = useTranslation()
    return (
        <>
            <nav id="navbar" >
                <div id='logo'>
                </div>
                <ul type='none'>
                    <li className='font-light text-sm cursor-pointer li-nav'>
                        <HashLink smooth to="/#home">
                            Home
                        </HashLink>
                    </li>
                    <li className='font-light text-sm cursor-pointer li-nav'>
                        <HashLink smooth to="/#projetos">
                            {t('projects')}
                        </HashLink>
                    </li>
                    <li className='font-light text-sm cursor-pointer li-nav '>
                        <HashLink smooth to="/#sobre">
                            {t('about-nav')}
                        </HashLink>
                    </li>
                    <li className='font-light text-sm cursor-pointer li-nav' id='li-contato'>
                        <HashLink smooth to="/#box-contato">
                            {t('contato-nav')}
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </>
    
    )
}

export default Navbar;