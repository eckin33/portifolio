import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className='w-full h-34 flex flex-col justify-center items-center border-t'>
            <p>{t('direitos')}</p>
            
            <p className='text-sm mt-2' id='footer-info' >{t('footer-info')}</p>
        </footer>
    )
}

export default Footer