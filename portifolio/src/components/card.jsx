import { Button } from "@/components/ui/button"
import i18n from '../i18n/index.js';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage(props) {
  const { t } = useTranslation()
  
  return (
    <Card className="relative mx-auto w-full h-124 pt-0 flex-row pb-0">
      <div className="w-1/2 relative flex flex-col justify-center items-center">
        <img
          src={props.img}
          alt="Imagem projeto portifolio"
          className="relative z-20 h-auto w-full object-cover rounded-xl imgs-port opacity-65  brightness-75"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center pr-4 mr-4">
        <CardHeader>
          <CardAction></CardAction>
          <CardTitle className={"text-3xl text-slate-400 uppercase "}>{props.titulo ? props.titulo : "titulo"}</CardTitle>
          <span className="text-sm text-blue-400 mb-6">{props.span ? props.span : "Project Web"}</span>
          <CardDescription className={"px-2 text-lg text-gray-300 mb-6 "}>
            {props.descricao}
          </CardDescription>
        </CardHeader>
        <CardFooter className={"justify-center gap-8"}>
          <a href={props.projeto_link} target="_blank">
            <button className="w-42 pt-2 pb-2 pr-2 pl-2 mt-6 rounded-sm cursor-pointer bg-blue-400 text-slate-800 font-bold flex items-center justify-center gap-2.5 text-nowrap hover:scale-105 transition-transform">{t('visit')}
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
            </button>
          </a>
          <a href={props.codigo_link} target="_blank">
            <button className="w-32 p-2 mt-6  border rounded-sm cursor-pointer flex items-center justify-center gap-2.5 hover:scale-105 transition-transform">
              {t('code')}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </button>
          </a>
        </CardFooter>
      </div>
    </Card>
  )
}
