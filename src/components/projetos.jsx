import React from 'react'
import { useTranslation } from 'react-i18next';
import idfImg from '../assets/imagens/idfmk.webp'
import dashboardImg from '../assets/imagens/dashmk.png'
import nobreImg from '../assets/imagens/nobre-mk.webp'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.jsx'
import {CardImage} from './card'


const Projetos = () => {
    const { t } = useTranslation()

    return (
        <section className="next-section-projetos" id='projetos'>
            <h3 className='section-title font-bold text-8xl mb-14 mt-14 reveal' id='h3-stacks'>{t('projects')}</h3>
            <Carousel>
                <CarouselContent className={"max-w-250"} >
                    <CarouselItem className="carrosel-item w-full flex justify-center items-center">
                        <CardImage
                            img={idfImg}
                            titulo="IdealFocus"
                            span="FullStack Development 2025"
                            descricao={t('idf-desc')}
                            projeto_link="https://eckin33.github.io/Projeto-IdFocus"
                            codigo_link="https://github.com/eckin33/Projeto-IdFocus"

                        />
                    </CarouselItem>
                    <CarouselItem className="carrosel-item w-full flex justify-center items-center">
                        <CardImage
                            img={dashboardImg}
                            titulo="Metrics UI"
                            span="FullStack Development 2025"
                            descricao={t('metrics-desc')}
                            projeto_link="https://metrics-ui-tau.vercel.app/"
                            codigo_link="https://github.com/eckin33/Metrics-UI"
                        />
                    </CarouselItem>
                    <CarouselItem className="carrosel-item w-full flex justify-center items-center ">
                        <CardImage
                            img={nobreImg}
                            titulo="Nobre Soluções Digitais"
                            span="Web Development 2026"
                            descricao={t('nobre-desc')}
                            projeto_link="https://nobresolucoesdigitais.com"
                            codigo_link="https://github.com/eckin33/nobre-sistemas"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default Projetos