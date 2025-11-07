import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SkillSection } from '@/components/SkillSection'
import avatar from '../assets/images/profile.png'
import { SiMinutemailer } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { NavContactItem, NavPageItem } from '@/components/NavItem'
import { SectionTitle } from '@/components/SectionTitle'

// data imports
import { profile } from '../data/profile'
import { projects } from '../data/projects'

// icons for dark mode
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { useEffect, useRef, useState } from 'react'
import { NavMenu } from '@/components/NavMenu'
import { Separator } from '@/components/ui/separator'
import ProjectCard from '@/components/ProjectCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [copyEmail, setCopyEmail] = useState('')
	const [copyButton, setCopyButton] = useState('Copiar')

	const [theme, setTheme] = useState('')

	const contactEmail = 'lucassaymon.dev@gmail.com'
	const emailRef = useRef<HTMLDivElement | null>(null)

	// Salva o tema preferido do= usuário
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

	// load saved theme
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	// changes the theme when user toggle theme button
	function handleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	// copy the email and handle the state of the elements on the #contact section
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
				{/* Dark/light mode button */}
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

				{/* Header nav */}
				<NavMenu />

				{/* Sessão de apresentação */}
				<div className="flex justify-center align-center flex-col pt-10 dark:text-[lightgray] text-slate-700">
					<div className="w-full flex justify-between items-center">
						<h1
							className="text-[5vw] font-bold
								lg:ml-2 lg:mb-4
							 xl:text-[52px] xl:leading-[5rem]"
						>
							{`Olá, sou ${profile.name} 👋`}
						</h1>
						<div
							className="hidden relative z-10 text-green-light dark:text-green-dark
							lg:flex lg:items-center lg:gap-[2vw]"
						>
							<a
								className="max-w-[56px] w-[3vw]"
								href={profile.linkedin}
								target="_blank"
							>
								<BsLinkedin
									className="hover:-translate-y-2 transition-all hover:text-emerald-700 dark:hover:text-green-300"
									size="100%"
								/>
							</a>
							<div className="flex gap-[1vw]">
								<a
									className="max-w-[60px] w-[3vw]"
									href={profile.github}
									target="_blank"
								>
									<BsGithub
										className="hover:-translate-y-2 transition-all hover:text-emerald-700 dark:hover:text-green-300"
										size="100%"
									/>
								</a>

								<a
									className="max-w-[72px] w-[4vw]"
									href={profile.resume}
									target="_blank"
								>
									<HiDocumentText
										className="hover:-translate-y-2 transition-all hover:text-emerald-700 dark:hover:text-green-300"
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
						{profile.objective}
					</p>
				</div>
			</section>
			<div className="bg-slate-500 h-1"></div>
			<div className="dark:bg-slate-900 bg-slate-200">
				{/* Skills Section */}
				<section className="pt-24 text-center mb-6 lg:mx-16" id="skills">
					<SectionTitle title="Habilidades" />
					<SkillSection theme={theme} />
				</section>

				{/* Projects section */}
				<section
					className=" text-center
					md:p-12 md:pb-0"
					id="projects"
				>
					<SectionTitle title="Projetos" className="mt-20 lg:mt-0" />
					<div className="flex flex-col gap-16">
						{projects.map((project, id) => (
							<ProjectCard
								link={project.link}
								title={project.title}
								src={project.imageSrc}
								description={project.description}
								hasTemplate={project.hasTemplate}
								tags={project.tags}
								direction={id % 2 === 0 ? 'left' : 'right'}
							/>
						))}
					</div>
				</section>
			</div>

			{/* About Section */}
			<section
				className="dark:bg-slate-900 bg-slate-200 pt-24 pb-36 md:pt-48 md:px-12 lg:px-16"
				id="about"
			>
				<SectionTitle
					title="Sobre mim"
					className="lg:hidden text-4xl border-b border-slate-500 pb-6 mx-10 mb-14"
				/>
				<div
					className="flex gap-16 flex-col justify-center px-7 items-center
					lg:flex-row lg:mx-0"
				>
					<div className="h-full p-6 border border-slate-500 rounded-sm shadow-lg lg:p-8">
						<Image
							className="rounded-2xl w-56 shadow-md sm:w-72 md:w-80 lg:w-96"
							src={profile.profilePic}
							alt="Minha foto de perfil"
						/>
					</div>
					<div className="lg:w-1/2">
						<SectionTitle
							title="Sobre mim"
							className="hidden lg:text-center lg:text-4xl lg:border-b lg:border-slate-500 lg:pb-4 lg:mx-24 lg:block lg:pt-0"
						/>

						<div className="flex items-center ">
							<p className="text-lg text-justify font-medium text-slate-700 dark:text-slate-400">
								{profile.aboutMe}
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="bg-slate-500 h-1"></div>

			{/* Contact Section */}
			<section
				className="
				bg-gradient-radial dark:from-slate-800 from-slate-100 dark:to-black to-slate-400
				py-12 px-8 text-center md:p-12 dark:text-slate-100 text-slate-800"
				id="contact"
			>
				<SectionTitle title="Contato" />
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
								<h3 className="text-xl text-center font-medium md:text-left lg:ml-4 lg:mb-12">
									Copie meu endereço de email e entre em contato. 😉
								</h3>
							</div>
						</div>

						{/* Component for email copying */}
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

				{/* Links for contact */}
				<nav className="flex justify-center">
					<ul className="flex flex-row gap-4">
						<NavContactItem isLast={false} title="GitHub" link={profile.github}>
							<BsGithub size="22px" />
						</NavContactItem>
						<Separator orientation="vertical" className="bg-slate-500" />
						<NavContactItem
							isLast={false}
							title="LinkedIn"
							link={profile.linkedin}
						>
							<BsLinkedin />
						</NavContactItem>
						<Separator orientation="vertical" className="bg-slate-500" />
						<NavContactItem
							isLast={true}
							title="Currículo"
							link={profile.resume}
						>
							<HiDocumentText size="24px" />
						</NavContactItem>
					</ul>
				</nav>
			</section>
		</main>
	)
}
