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
import { NavContactItem, NavPageItem } from '@/components/NavItem'

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
					lg:right-0 lg:mr-[3vw] lg:mt-[5vh]"
				>
					<ul className="flex flex-row ">
						<NavPageItem
							isLast={false}
							title="Habilidades"
							link="#skills"
							toPage
						/>
						<NavPageItem
							isLast={false}
							title="Projetos"
							link="#projects"
							toPage
						/>
						<NavPageItem isLast={true} title="Contato" link="#contact" toPage />
					</ul>
				</nav>
				<div className="flex justify-center align-center flex-col pt-10 text-[lightgray]">
					<div className="w-full flex justify-between items-center">
						<h1
							className="text-[5vw] font-bold
								lg:ml-2 lg:mb-4
							 xl:text-[52px] xl:leading-[5rem]"
						>
							Olá, sou Lucas Saymon 👋
						</h1>
						<div
							className="hidden relative z-10
							lg:flex lg:items-center lg:gap-[2vw]"
						>
							<a
								className="max-w-[56px] w-[3vw]"
								href="https://www.linkedin.com/in/lucas-saymon/"
							>
								<BsLinkedin
									class="hover:-translate-y-2 transition-all"
									size="100%"
									color="#23c55e"
								/>
							</a>
							<div className="flex gap-[1vw]">
								<a
									className="max-w-[60px] w-[3vw]"
									href="https://www.github.com/lucassaymon1"
								>
									<BsGithub
										class="hover:-translate-y-2 transition-all hover:text-green-300"
										size="100%"
										color="#23c55e"
									/>
								</a>

								<a
									className="max-w-[72px] w-[4vw]"
									href="https://docs.google.com/document/d/1cwg99b3KJI7Ep5wJ5rGKyV4zRkDI5g2ZCbk_FsfKFBg/edit?usp=sharing"
								>
									<HiDocumentText
										class="hover:-translate-y-2 transition-all"
										size="100%"
										color="#23c55e"
									/>
								</a>
							</div>
						</div>
					</div>

					<div className="relative w-fit">
						<h1
							className="w-fit text-[10vw] leading-[10vw] font-bold max-w-[112px]
							xl:text-[112px] 2xl:text-[128px] lg:leading-[5rem]"
						>
							DESENVOLVEDOR
						</h1>
					</div>

					<div
						className=" flex flex-row gap-4 items-center mb-10
						lg:gap-8 lg:mb-10"
					>
						<h1
							className="text-[10vw] font-bold
							xl:text-[112px] 2xl:text-[128px]"
						>
							FRONTEND
						</h1>
						<h1
							className="text-[10vw] text-green-500
							xl:text-[112px] 2xl:text-[128px]"
						>
							{'</>'}
						</h1>
					</div>
					<p
						className=" font-medium max-w-5xl
						md:text-xl
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
					<h2 className="p-12 text-4xl lg:text-5xl text-center">Tecnologias</h2>

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
					md:p-12 lg:mb-48"
					id="projects"
				>
					<h2 className="p-12 text-4xl lg:text-5xl text-center">Projetos</h2>
					<div className="flex flex-col gap-16">
						<ImgContainer
							link="https://lsfoodexplorer.netlify.app"
							direction="left"
							title="Food Explorer"
							src={foodexplorer}
							description="Um site que oferece uma interface responsiva e a função de expor um cardápio de pratos de um restaurante de forma online, onde o usuário comum pode pesquisar e visualizar os pratos disponíveis, enquanto os administradores podem cadastrar novos pratos, assim como atualizar e excluir pratos já existentes."
						/>
						<ImgContainer
							link="https://lsrocketnotes.netlify.app"
							direction="right"
							title="Rocket Notes"
							src={rocketnotes}
							description="Uma aplicação web que permite que o usuário crie notas pessoais. O site conta com sistema de cadastro, login e autenticação de usuário, além de funcionalidades de busca por notas já criadas, como filtragem por barra de pesquisa ou por tags."
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
					className="p-12 pb-0 text-4xl text-center lg:text-5xl
					 lg:pb-12"
				>
					Contato
				</h2>
				<div
					className="w-full  mb-12
					lg:grid lg:grid-cols-10"
				>
					<div
						className="hidden
						lg:h-[15vw] lg:flex lg:items-center lg:justify-center lg:col-start-1 lg:col-end-4 lg:animate-flying"
					>
						<SiMinutemailer size="100%" color="#86efac" />
					</div>

					<div className="flex flex-col justify-center col-start-4 col-end-9 mb-16">
						<div className="flex flex-col gap-14 items-center justify-center mb-12 lg:mb-0 lg:">
							<div
								className="
								w-[30vw] max-w-[200px] flex items-center justify-center animate-flying
								lg:hidden"
							>
								<SiMinutemailer size="100%" color="#86efac" />
							</div>
							<div className="w-full">
								<h3 className="text-xl text-left font-medium lg:ml-4 lg:mb-12">
									Copie meu endereço de email e entre em contato 😉
								</h3>
							</div>
						</div>
						<div className="w-full grid grid-cols-4">
							<div className="w-full bg-slate-200 rounded-tl-xl flex items-center justify-center">
								<FiMail color="black" size="24px" />
							</div>
							<div
								ref={emailRef}
								className="w-full h-16 flex items-center justify-start border-solid border-2 border-slate-200 rounded-tr-xl font-medium  transition-all duration-500 col-start-2 col-end-5 px-4 overflow-hidden
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
						<NavContactItem
							isLast={false}
							title="GitHub"
							link="https://www.github.com/lucassaymon1"
							toPage={false}
						>
							<BsGithub size="22px" />
						</NavContactItem>
						<NavContactItem
							isLast={false}
							title="LinkedIn"
							link="https://www.linkedin.com/in/lucas-saymon/"
							toPage={false}
						>
							<BsLinkedin />
						</NavContactItem>
						<NavContactItem
							isLast={true}
							title="Currículo"
							link="https://docs.google.com/document/d/1cwg99b3KJI7Ep5wJ5rGKyV4zRkDI5g2ZCbk_FsfKFBg/edit?usp=sharing"
							toPage={false}
						>
							<HiDocumentText size="24px" />
						</NavContactItem>
					</ul>
				</nav>
			</section>
		</main>
	)
}
