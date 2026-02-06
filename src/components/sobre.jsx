import React from 'react'
import { useTranslation } from 'react-i18next'

const Sobre = () => {
    const { t } = useTranslation()
    return (
        <div id="box-next-section-sobre">
            <section className="next-section-sobre relative">
                <div id="_3-dashs"></div>
                <div id="sobre" className='w-full '>
                    <div id="box-sobre" className='w-full flex flex-row justify-center items-center gap-5'>
                        <div id="img-box-sobre" className='w-1/2 rounded-lg reveal'>
                            <div id='boneco-sentado'></div>
                            <div id='boneco-voando'></div>
                            <div id='boneco-encostado'></div>
                            <div id="dedsec"></div>
                        </div>
                        <div id="text-box-sobre" className='w-1/2 p-4 mb-14 reveal'>
                            <h4 className='text-5xl font-medium mb-8 reveal ' id='h-sobre'>{t('about')}</h4>
                            <p className='p-sobre text-lg '>
                                {t('myself_1')}
                            </p>
                            <p className='p-sobre text-lg '>
                                {t('myself_2')}
                            </p>
                            {/* <p className='p-sobre text-lg '>
                  
                          </p> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre