import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TechSvg, TechImg } from '@/components/TechIcon'
import ImgContainer from '@/components/imgContainer'
import foodexplorer from '../assets/images/foodexplorer.png'
import rocketnotes from '../assets/images/rocketnotes.png'
import { BsMailbox2 } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
import { GiMailbox } from 'react-icons/gi'
import copy from 'copy-to-clipboard'

import {
	Css,
	Html,
	Javascript,
	Git,
	GitHub,
	Tailwindcss,
	Nextjs,
	Nodejs,
	Reactjs,
	Sqlite,
	Typescript
} from '@/utils/techIcons'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [copyEmail, setCopyEmail] = useState('')
	const [copyButton, setCopyButton] = useState('Copiar')
	const contactEmail = 'lucassaymon.dev@gmail.com'

	function handleCopyEmail(email: string) {
		setCopyEmail(email)
		navigator.clipboard.writeText(copyEmail)
		setCopyButton('copiado!')
		setTimeout(() => {
			setCopyButton('copiar')
		}, 4000)
	}

	return (
		<main className="flex justify-center flex-col">
			<section className="bg-black flex align-center justify-center h-screen w-screen p-12">
				<div className="flex justify-center align-center flex-col pt-10 text-[lightgray]">
					<h1 className="text-[128px] leading-[5rem] font-bold">
						DESENVOLVEDOR
					</h1>
					<div className=" flex flex-row gap-8 mb-[36px]">
						<h1 className="text-[128px] font-bold  ">FRONTEND</h1>
						<h1 className="text-[128px] text-green-500">{'</>'}</h1>
					</div>
					<p className="text-2xl font-medium max-w-5xl">
						Desenvolvedor web <span>Frontend</span> Freelancer a procura de
						<span> oportunidades</span> de trabalho para <span>aprimorar </span>
						minhas habilidades como <span>programador</span>.
					</p>
				</div>
			</section>
			<section>
				<h2 className="text-[68px] text-center">Tecnologias</h2>
				<div className="flex flex-row flax-wrap gap-8 justify-center align-center">
					<TechSvg icon={Javascript} title="Javascript" />
					<TechSvg icon={Typescript} title="Typescript" />
					<TechSvg icon={Nextjs} title="Nextjs" />
					<TechSvg icon={Reactjs} title="Reactjs" />
					<TechSvg icon={Tailwindcss} title="Tailwindcss" />
					<TechSvg icon={Nodejs} title="Nodejs" />
					<TechSvg icon={Sqlite} title="Sqlite" />
					<TechSvg icon={Git} title="Git" />
					<TechSvg icon={GitHub} title="GitHub" />
					<TechSvg icon={Html} title="Html" />
					<TechSvg icon={Css} title="Css" />
					<TechImg
						src="https://miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png"
						title="styled-components"
					/>
				</div>
			</section>
			<section className="p-12 text-center">
				<h2 className="text-[68px] text-center">Projetos</h2>
				<div className="flex flex-col gap-16">
					<ImgContainer
						direction="left"
						title="Food Explorer"
						src={foodexplorer}
						description="Projeto fullstack que possui funcionalidades como: cadastro e autenticação de usuário, upload e edição de imagem do perfil do usuário, registro de notas pessoais no banco de dados, criptografia de senhas e edição das informações pessoais do usuário."
					/>
					<ImgContainer
						direction="right"
						title="Rocket Notes"
						src={rocketnotes}
						description="Projeto fullstack que possui funcionalidades como: cadastro e autenticação de usuário, upload e edição de imagem do perfil do usuário, registro de notas pessoais no banco de dados, criptografia de senhas e edição das informações pessoais do usuário."
					/>
				</div>
			</section>
			<section className="p-12 text-center">
				<h2 className="text-[68px] text-center">Contato</h2>
				<div className="w-full grid grid-cols-7 mb-12">
					<div className="w-full flex items-start justify-start col-start-1 col-end-3 ">
						<GiMailbox size="80%" color="#86efac" />
					</div>
					<div className="flex flex-col justify-center col-start-3 col-end-6">
						<h3 className="text-xl text-left font-medium ml-4 mb-12">
							Copie meu endereço de email e entre em contato 😉
						</h3>
						<div className="w-full grid grid-cols-4">
							<div className="w-full bg-black rounded-l flex items-center justify-center">
								<BsMailbox2 color="#4ade80" size="24px" />
							</div>
							<div className="w-full h-16 flex items-center justify-start border-solid border-2 border-black rounded-r-2 font-medium text-xl col-start-2 col-end-5 pl-12">
								{contactEmail}
							</div>
						</div>
						<button
							onClick={() => handleCopyEmail(contactEmail)}
							className="w-full h-12 border-solid border-2 border-green-500 rounded-r text-green-500 font-bold text-xl hover:bg-green-500 hover:text-white transition-all"
						>
							{copyButton}
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}
