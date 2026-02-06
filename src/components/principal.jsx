import React from 'react'
import { useTranslation } from 'react-i18next'

const Principal = () => {
    const { t } = useTranslation()
    return (
        <section className="zoom-hero">

            <div className="zoom-content" id='home'>
                <h1 id="name" >{t('welcome')} <span id="saudacao"></span></h1>
                <h1 className="xl:font-extrabold zoom-text sm" id='h1-first'>
                    {t('dev')}
                </h1>
                <p id='pp' >{t('fullstack')}</p>
                <div id="box-btn" className='gap-10 '>
                    <a href="https://www.linkedin.com/in/erick-duarte-a4813a378/" target='_blank'>
                        <div id="btn-linkedin" className='flex flex-row justify-around items-center w-40 h-10 border text-slate-300 cursor-pointer rounded-sm hover:scale-105 transition-transform'>
                            <div id="in-icon"></div>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a href="https://github.com/eckin33" target='_blank'>
                        <div id="btn-github" className='flex flex-row justify-around items-center w-40 h-10 border text-slate-300 cursor-pointer rounded-sm hover:scale-105 transition-transform'>
                            <span>Github</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </div>
                    </a>

                </div>
            </div>
            <div id="box-box-eu" >
                <div id="eu">
                    <div id="js" className='icons-eu parallax-layer' data-speed='.9'></div>
                    <div id="css" className='icons-eu parallax-layer' data-speed='0.6'></div>
                    <div id="html" className='icons-eu parallax-layer' data-speed='1'></div>
                    <div id="node" className='icons-eu parallax-layer' data-speed='.4'></div>
                    <div id="mongodb" className='icons-eu parallax-layer' data-speed='.6'></div>
                    <div id="express" className='icons-eu parallax-layer' data-speed='1'></div>
                </div>
            </div>

            <div id="box-arrow">
                <div id="arrow">
                    <div id="arrow-svg"></div>
                    <p id="p-arrow" className='font-light'>{t('role')}</p>
                </div>
            </div>

        </section>
    )
}

export default Principal