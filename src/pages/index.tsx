import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SkillSection } from '@/components/SkillSection'
import ImgContainer from '@/components/imgContainer'
import Span from '@/components/Span'
import foodexplorer from '../assets/images/foodexplorer.png'
import rocketnotes from '../assets/images/rocketnotes.png'
import WRlinkpage from '../assets/images/WRlinkpage.png'
import ydeapage from '../assets/images/ydeapage.png'
import avatar from '../assets/images/profile.png'
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
import { StaticImageData } from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'

//icons for dark mode
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [copyEmail, setCopyEmail] = useState('')
	const [copyButton, setCopyButton] = useState('Copiar')

	const [theme, setTheme] = useState('')

	const contactEmail = 'lucassaymon.dev@gmail.com'
	const emailRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		if (!savedTheme) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				setTheme('dark')
			} else {
				setTheme('light')
			}
			localStorage.setItem('theme', theme)
		} else {
			setTheme(savedTheme)
		}
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	function handleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	function handleCopyEmail(email: string) {
		const bgColor = theme === 'dark' ? 'bg-green-dark' : 'bg-green-light'
		setCopyEmail(email)
		navigator.clipboard.writeText(copyEmail)

		emailRef.current?.classList.add(bgColor)
		setTimeout(() => {
			emailRef.current?.classList.remove(bgColor)
		}, 500)

		setCopyButton('Email copiado!')
		setTimeout(() => {
			setCopyButton('Copiar')
		}, 4000)
	}

	return (
		<main className="flex justify-center flex-col">
			<section className="bg-gradient-radial dark:from-slate-800 from-slate-50 dark:to-black to-slate-400 flex align-center justify-center h-screen w-full p-12 relative dark:text-slate-200 text-slate-800">
				<button
					className="absolute left-6 top-10 w-8 xl:w-10 lx:left-16 xl:top-8"
					onClick={handleTheme}
				>
					{theme && theme === 'light' ? (
						<RiMoonFill
							size="100%"
							className="moonIcon hover:text-emerald-700 transition-all"
						/>
					) : (
						<RiSunFill
							size="100%"
							className="sunIcon hover:text-green-dark transition-all"
						/>
					)}
				</button>

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
						<NavPageItem isLast={false} title="Sobre" link="#about" toPage />
						<NavPageItem isLast={true} title="Contato" link="#contact" toPage />
					</ul>
				</nav>
				<div className="flex justify-center align-center flex-col pt-10 dark:text-[lightgray] text-slate-700">
					<div className="w-full flex justify-between items-center">
						<h1
							className="text-[5vw] font-bold
								lg:ml-2 lg:mb-4
							 xl:text-[52px] xl:leading-[5rem]"
						>
							Olá, sou Lucas Saymon 👋
						</h1>
						<div
							className="hidden relative z-10 text-green-light dark:text-green-dark
							lg:flex lg:items-center lg:gap-[2vw]"
						>
							<a
								className="max-w-[56px] w-[3vw]"
								href="https://www.linkedin.com/in/lucas-saymon/"
								target="_blank"
							>
								<BsLinkedin
									className="hover:-translate-y-2 transition-all hover:text-green-300"
									size="100%"
								/>
							</a>
							<div className="flex gap-[1vw]">
								<a
									className="max-w-[60px] w-[3vw]"
									href="https://www.github.com/lucassaymon1"
									target="_blank"
								>
									<BsGithub
										className="hover:-translate-y-2 transition-all hover:text-green-300"
										size="100%"
									/>
								</a>

								<a
									className="max-w-[72px] w-[4vw]"
									href="https://docs.google.com/document/d/1cwg99b3KJI7Ep5wJ5rGKyV4zRkDI5g2ZCbk_FsfKFBg/edit?usp=sharing"
									target="_blank"
								>
									<HiDocumentText
										className="hover:-translate-y-2 transition-all hover:text-green-300"
										size="100%"
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
							FULL STACK
						</h1>
						<h1
							className="text-[10vw] text-green-light dark:text-green-dark
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
						Desenvolvedor web <Span>Full-Stack</Span> a procura de
						<Span> oportunidades</Span> para <Span>aprimorar </Span>
						minhas habilidades como <Span>programador</Span>.
					</p>
				</div>
			</section>
			<div className="bg-slate-500 h-1"></div>
			<div className="dark:bg-slate-900 bg-slate-200">
				<section className="pt-24 text-center mb-6 lg:mx-16" id="skills">
					<SectionTitle title="Habilidades" custom="" />

					<SkillSection theme={theme} />
				</section>
				<section
					className=" text-center
					md:p-12 md:pb-0"
					id="projects"
				>
					<SectionTitle title="Projetos" custom="mt-20 lg:mt-0" />
					<div className="flex flex-col gap-16">
						<ImgContainer
							link="https://lsfoodexplorer.netlify.app"
							direction="left"
							title="Food Explorer"
							src={foodexplorer}
							description="Um site que oferece uma interface responsiva e a função de expor um cardápio de pratos de um restaurante de forma online, onde o usuário comum pode pesquisar e visualizar os pratos disponíveis, enquanto os administradores podem cadastrar novos pratos, assim como atualizar e excluir pratos já existentes."
							hasTemplate={true}
							project={'foodexplorer'}
						/>
						<ImgContainer
							link="https://lsrocketnotes.netlify.app"
							direction="right"
							title="Rocket Notes"
							src={rocketnotes}
							description="Uma aplicação web que permite que o usuário crie notas pessoais. O site conta com sistema de cadastro, login e autenticação de usuário, além de funcionalidades de busca por notas já criadas, como filtragem por barra de pesquisa ou por tags."
							hasTemplate={true}
							project={'rocketnotes'}
						/>
						<ImgContainer
							link="ydea-website.vercel.app"
							direction="left"
							title="Site Institucional Ydea Solar"
							src={ydeapage}
							description="Site institucional desenvolvido para a empresa Ydea Solar. O site conta com envio de emails por fomulário, páginas de serviços e projetos personalizados, animações e layout responsivo."
							hasTemplate={false}
							project={'ydeapage'}
						/>
						<ImgContainer
							link="https://site.wrlink.com.br"
							direction="right"
							title="Site Institucional WR Link Telecom"
							src={WRlinkpage}
							description="Site institucional desenvolvido para a empresa WR Link Telecom. O site conta com animações de elementos, design moderno e layout responsivo para aparelhos desktop e mobile."
							hasTemplate={false}
							project={'WRlinkpage'}
						/>
					</div>
				</section>
			</div>
			<section
				className="dark:bg-slate-900 bg-slate-200 pt-24 pb-36 md:pt-48 md:px-12 lg:px-16"
				id="about"
			>
				<SectionTitle
					title="Sobre mim"
					custom="lg:hidden text-4xl border-b border-slate-500 pb-6"
				/>
				<div
					className="flex gap-16 flex-col justify-center mx-12 items-center
				lg:flex-row lg:mx-0"
				>
					<div className="h-full p-6 border border-slate-500 shadow-lg lg:p-8">
						<Image
							className="rounded-2xl w-56 shadow-md sm:w-72 md:w-80 lg:w-96"
							src={avatar}
							alt="Minha foto de perfil"
						/>
					</div>
					<div className="lg:w-1/2">
						<SectionTitle
							title="Sobre mim"
							custom="hidden lg:text-center lg:text-4xl lg:border-b lg:border-slate-500 lg:pb-4 lg:mx-24 lg:block lg:pt-0"
						/>

						<div className="flex items-center ">
							<p className="text-lg text-justify font-medium text-slate-700 dark:text-slate-400">
								Olá! Me chamo <i>Lucas Saymon</i> e sou{' '}
								<Span>Desenvolvedor Full Stack </Span>
								com experiência prática em criar aplicações completas e
								escaláveis — do back-end com <Span>Node.js, Express </Span> e
								bancos relacionais <Span>(MySQL, PostgreSQL, SQLite)</Span> até
								o front-end moderno com <Span>React, Next.js e TypeScript</Span>
								. Nos últimos anos, desenvolvi projetos reais como e-commerces,
								dashboards interativos e sistemas com autenticação e controle de
								permissões, aplicando boas práticas de UI/UX, responsividade e
								segurança. Também tenho experiência com{' '}
								<Span>testes automatizados (Jest, TDD)</Span>,{' '}
								<Span>CI/CD </Span> e <Span>Docker</Span>, o que me permite
								entregar soluções estáveis e prontas para produção. Atualmente,
								continuo expandindo minhas habilidades em{' '}
								<Span>Cloud (AWS)</Span>, <Span>MongoDB</Span> e integrações
								modernas, sempre buscando aprender e aplicar novas tecnologias!
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="bg-slate-500 h-1"></div>
			<section
				className="
				bg-gradient-radial dark:from-slate-800 from-slate-100 dark:to-black to-slate-400
				p-12 text-center dark:text-slate-100 text-slate-800"
				id="contact"
			>
				<SectionTitle title="Contato" custom="" />
				<div
					className="w-full  mb-12
					lg:grid lg:grid-cols-10"
				>
					<div
						className="hidden
						lg:h-[15vw] lg:flex lg:items-center lg:justify-center lg:col-start-1 lg:col-end-4 lg:animate-flying"
					>
						<SiMinutemailer
							size="100%"
							className="dark:text-[#86efac] text-green-light"
						/>
					</div>

					<div className="flex flex-col justify-center col-start-4 col-end-9 mb-16">
						<div className="flex flex-col gap-14 items-center justify-center mb-12 lg:mb-0 lg:">
							<div
								className="
								w-[30vw] max-w-[200px] flex items-center justify-center animate-flying
								lg:hidden"
							>
								<SiMinutemailer
									size="100%"
									className="dark:text-[#86efac] text-green-light"
								/>
							</div>
							<div className="w-full">
								<h3 className="text-xl text-left font-medium lg:ml-4 lg:mb-12">
									Copie meu endereço de email e entre em contato. 😉
								</h3>
							</div>
						</div>
						<div className="w-full grid grid-cols-4">
							<div className="w-full dark:bg-slate-200 bg-slate-800 rounded-tl-xl flex items-center justify-center">
								<FiMail className="dark:text-black text-white" size="24px" />
							</div>
							<div
								ref={emailRef}
								className="w-full h-16 flex items-center justify-start border-solid border-2 dark:border-slate-200 border-slate-800 rounded-tr-xl font-medium  transition-all duration-500 col-start-2 col-end-5 px-4 overflow-hidden
									lg:text-xl lg:pl-12"
							>
								{contactEmail}
							</div>
						</div>
						<button
							onClick={() => handleCopyEmail(contactEmail)}
							className="w-full h-14 border-solid border-2 border-green-light text-green-light font-bold text-lg hover:bg-green-light  transition-all mt-1 rounded-b-xl dark:text-green-dark dark:border-green-dark dark:hover:bg-green-dark hover:text-white dark:hover:text-white
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
