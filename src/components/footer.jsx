import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className='w-full h-34 flex justify-center items-center border-t'>
            <p>{t('direitos')}</p>
        </footer>
    )
}

export default Footer