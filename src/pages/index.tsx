import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TechSvg } from '@/components/TechIcon'
import ImgContainer from '@/components/imgContainer'
import foodexplorer from '../assets/images/foodexplorer.png'
import rocketnotes from '../assets/images/rocketnotes.png'
import { BsMailbox2 } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
import { GiMailbox } from 'react-icons/gi'
import { GoMail } from 'react-icons/go'
import { FiMail } from 'react-icons/fi'
import { FaPaperPlane } from 'react-icons/fa'
import { IoIosPaperPlane } from 'react-icons/io'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

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
	Typescript,
	StyledComponents
} from '@/utils/techIcons'
import { useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [copyEmail, setCopyEmail] = useState('')
	const [copyButton, setCopyButton] = useState('Copiar')
	const contactEmail = 'lucassaymon.dev@gmail.com'
	const emailRef = useRef<HTMLDivElement | null>(null)

	function handleCopyEmail(email: string) {
		setCopyEmail(email)
		navigator.clipboard.writeText(copyEmail)

		emailRef.current?.classList.add('bg-green-700')
		setTimeout(() => {
			emailRef.current?.classList.remove('bg-green-700')
		}, 500)

		setCopyButton('copiado!')
		setTimeout(() => {
			setCopyButton('copiar')
		}, 4000)
	}

	return (
		<main className="flex justify-center flex-col text-slate-200">
			<section className="bg-gradient-radial from-slate-800 to-black flex align-center justify-center h-screen w-full p-12">
				<div className="flex justify-center align-center flex-col pt-10 text-[lightgray]">
					<h1 className="text-[52px] leading-[5rem] font-bold ml-2 mb-4">
						Olá, sou Lucas Saymon 👋
					</h1>
					<div className="relative flex gap-4">
						<h1 className="text-[128px] leading-[5rem] font-bold">
							DESENVOLVEDOR
						</h1>
						<div className="absolute -top-20 -right-20 flex flex-col items-end gap-6">
							<div className="flex gap-8">
								<a href="https://www.linkedin.com/in/lucas-saymon/">
									<BsLinkedin
										class="animate-up hover:-translate-y-2 transition-all"
										size="56px"
										color="#23c55e"
									/>
								</a>
								<a href="https://www.github.com/lucassaymon1">
									<BsGithub
										class="animate-diagonal hover:-translate-y-2 hover:translate-x-2 transition-all hover:text-green-300"
										size="60px"
										color="#23c55e"
									/>
								</a>
							</div>
							<a href="https://docs.google.com/document/d/1cwg99b3KJI7Ep5wJ5rGKyV4zRkDI5g2ZCbk_FsfKFBg/edit?usp=sharing">
								<HiDocumentText
									class="-mr-2 animate-right hover:translate-x-2 transition-all"
									size="76px"
									color="#23c55e"
								/>
							</a>
						</div>
					</div>
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
			<div className="bg-slate-500 h-1"></div>
			<div className="bg-slate-900">
				<section className="pt-24">
					<h2 className="text-[68px] text-center">Tecnologias</h2>

					<div className="flex flex-row flex-wrap gap-6 justify-center align-center">
						<TechSvg icon={Javascript} title="JavaScript" />
						<TechSvg icon={Typescript} title="TypeScript" />
						<TechSvg icon={Nextjs} title="NextJS" />
						<TechSvg icon={Reactjs} title="ReactJS" />
						<TechSvg icon={Tailwindcss} title="Tailwind CSS" />
						<TechSvg icon={Nodejs} title="NodeJS" />
						<TechSvg icon={Sqlite} title="SQLite" />
						<TechSvg icon={Git} title="Git" />
						<TechSvg icon={GitHub} title="GitHub" />
						<TechSvg icon={Html} title="HTML5" />
						<TechSvg icon={Css} title="CSS3" />
						<TechSvg icon={StyledComponents} title="Styled-Components" />
					</div>
				</section>
				<section className="p-12 text-center mb-48">
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
			</div>
			<div className="bg-slate-500 h-1"></div>
			<section
				className="
				bg-gradient-radial from-slate-800 to-black
			p-12 text-center text-slate-100"
			>
				<h2 className="text-[68px] text-center">Contato</h2>
				<div className="w-full grid grid-cols-10 mb-12">
					<div className="max-h-72 max-w-48 flex items-center justify-center col-start-1 col-end-4 animate-flying">
						<SiMinutemailer size="100%" color="#86efac" />
					</div>
					<div className="flex flex-col justify-center col-start-4 col-end-9 mb-6">
						<h3 className="text-xl text-left font-medium ml-4 mb-12">
							Copie meu endereço de email e entre em contato 😉
						</h3>
						<div className="w-full grid grid-cols-4">
							<div className="w-full bg-slate-200 rounded-tl-xl flex items-center justify-center">
								<FiMail color="black" size="24px" />
							</div>
							<div
								ref={emailRef}
								className="w-full h-16 flex items-center justify-start border-solid border-2 border-slate-200 rounded-tr-xl font-medium text-xl col-start-2 col-end-5 pl-12 transition-all duration-500"
							>
								{contactEmail}
							</div>
						</div>
						<button
							onClick={() => handleCopyEmail(contactEmail)}
							className="w-full h-14 border-solid border-2 border-green-500 text-green-500 font-bold text-xl hover:bg-green-500 hover:text-white transition-all mt-1 rounded-b-xl"
						>
							{copyButton}
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}
