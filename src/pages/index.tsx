import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TechIcon } from '@/components/TechIcon'
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
import NavItem from '@/components/NavItem'

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
			<section className="bg-gradient-radial from-slate-800 to-black flex align-center justify-center h-screen w-full p-12 relative">
				<nav
					className="flex justify-center absolute top-0 mt-12
					lg:right-0 lg:mr-16 lg:mt-12"
				>
					<ul className="flex flex-row ">
						<NavItem
							isLast={false}
							title="Habilidades"
							link="#skills"
							toPage
						></NavItem>
						<NavItem
							isLast={false}
							title="Projetos"
							link="#projects"
							toPage
						></NavItem>
						<NavItem
							isLast={true}
							title="Contato"
							link="#contact"
							toPage
						></NavItem>
					</ul>
				</nav>
				<div className="flex justify-center align-center flex-col pt-10 text-[lightgray]">
					<h1
						className="text-2xl font-bold
						lg:text-[52px] lg:leading-[5rem] lg:ml-2 lg:mb-4"
					>
						Olá, sou Lucas Saymon 👋
					</h1>
					<div className="relative flex gap-4 ">
						<h1
							className=" text-[40px] font-bold leading-[3rem]
							lg:text-[128px] lg:leading-[5rem]"
						>
							DESENVOLVEDOR
						</h1>
						<div
							className="hidden
							lg:absolute lg:-top-20 lg:-right-20 lg:flex lg:flex-col lg:items-end lg:gap-6"
						>
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
					<div
						className=" flex flex-row gap-4 items-center mb-[24px]
						lg:gap-8 lg:mb-[32px]"
					>
						<h1
							className="text-[40px] font-bold
						lg:text-[128px]"
						>
							FRONTEND
						</h1>
						<h1
							className="text-[40px] text-green-500
						lg:text-[128px]"
						>
							{'</>'}
						</h1>
					</div>
					<p
						className=" font-medium max-w-5xl
						lg:text-2xl lg:text-left"
					>
						Desenvolvedor web <span>Frontend</span> Freelancer a procura de
						<span> oportunidades</span> de trabalho para <span>aprimorar </span>
						minhas habilidades como <span>programador</span>.
					</p>
				</div>
			</section>
			<div className="bg-slate-500 h-1"></div>
			<div className="bg-slate-900">
				<section className="pt-24 text-center mb-6" id="skills">
					<h2
						className="p-12 text-5xl text-center
						lg:text-[68px]"
					>
						Tecnologias
					</h2>

					<div className="flex flex-row flex-wrap gap-6 justify-center align-center">
						<TechIcon icon={Javascript} title="JavaScript" />
						<TechIcon icon={Typescript} title="TypeScript" />
						<TechIcon icon={Nextjs} title="NextJS" />
						<TechIcon icon={Reactjs} title="ReactJS" />
						<TechIcon icon={Tailwindcss} title="Tailwind CSS" />
						<TechIcon icon={Nodejs} title="NodeJS" />
						<TechIcon icon={Sqlite} title="SQLite" />
						<TechIcon icon={Git} title="Git" />
						<TechIcon icon={GitHub} title="GitHub" />
						<TechIcon icon={Html} title="HTML5" />
						<TechIcon icon={Css} title="CSS3" />
						<TechIcon icon={StyledComponents} title="Styled-Components" />
					</div>
				</section>
				<section
					className=" text-center mb-28
					lg:p-12 lg:mb-48"
					id="projects"
				>
					<h2
						className="p-12 text-5xl text-center
						lg:text-[68px]"
					>
						Projetos
					</h2>
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
				id="contact"
			>
				<h2
					className="p-12 text-center text-5xl
					lg:text-[68px]"
				>
					Contato
				</h2>
				<div
					className="w-full  mb-12
					lg:grid lg:grid-cols-10"
				>
					<div
						className="hidden
						lg:max-h-72 lg:max-w-48 lg:flex lg:items-center lg:justify-center lg:col-start-1 lg:col-end-4 lg:animate-flying"
					>
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
								className="w-full h-16 flex items-center justify-start border-solid border-2 border-slate-200 rounded-tr-xl font-medium  transition-all duration-500 col-start-2 col-end-5 pl-4
									lg:text-xl lg:pl-12"
							>
								{contactEmail}
							</div>
						</div>
						<button
							onClick={() => handleCopyEmail(contactEmail)}
							className="w-full h-14 border-solid border-2 border-green-500 text-green-500 font-bold text-lg hover:bg-green-500 hover:text-white transition-all mt-1 rounded-b-xl
								lg:text-xl"
						>
							{copyButton}
						</button>
					</div>
				</div>
				<nav className="flex justify-center">
					<ul className="flex flex-row ">
						<NavItem
							isLast={false}
							title="GitHub"
							link="https://www.github.com/lucassaymon1"
							toPage={false}
						>
							<BsGithub size="22px" />
						</NavItem>
						<NavItem
							isLast={false}
							title="LinkedIn"
							link="https://www.linkedin.com/in/lucas-saymon/"
							toPage={false}
						>
							<BsLinkedin />
						</NavItem>
						<NavItem
							isLast={true}
							title="Currículo"
							link="https://docs.google.com/document/d/1cwg99b3KJI7Ep5wJ5rGKyV4zRkDI5g2ZCbk_FsfKFBg/edit?usp=sharing"
							toPage={false}
						>
							<HiDocumentText size="24px" />
						</NavItem>
					</ul>
				</nav>
			</section>
		</main>
	)
}
