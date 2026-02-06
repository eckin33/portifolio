import React from 'react'
import { useTranslation } from 'react-i18next';

const Stacks = () => {
    const { t } = useTranslation()
  return (
    <section className='next-section'>
              <h3 className='font-bold lg:text-8xl text-6xl mb-8 reveal' id='h3-stacks'>{t('my-stacks')}</h3>
              <ul id="stacks" type="none" className=' flex gap-8 justify-center p-4 mt-8 w-full reveal'>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'>
                  <div className="background-stacks">
                    <div id="html-s"></div>
                  </div>HTML</li>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="css-s"></div>
                </div>CSS</li>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="js-s"></div>
                </div>JAVASCRIPT</li>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="node-s" ></div>
                </div>NODE.JS</li>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="react-s"></div>
                </div>REACT.JS</li>
                <li className='li-stacks text-xs w-22 text-center flex flex-col justify-center items-center gap-2'><div className="background-stacks">
                  <div id="mongo-s"></div>
                </div>MONGODB</li>
              </ul>
            </section>
  )
}

export default Stacks