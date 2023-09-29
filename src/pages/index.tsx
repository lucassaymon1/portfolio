import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TechSvg, TechImg } from '@/components/TechIcon'
import ImgContainer from '@/components/imgContainer'
import foodexplorer from '../assets/images/foodexplorer.png'
import rocketnotes from '../assets/images/rocketnotes.png'
import { BsMailbox2 } from 'react-icons/bs'

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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
						Desenvolvedor Frontend Freelancer a procura de{' '}
						<span>oportunidades</span> de trabalho para <span>aprimorar</span>{' '}
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
				<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
					<ImgContainer title="Food Explorer" src={foodexplorer} />
					<ImgContainer title="Rocket Notes" src={rocketnotes} />
				</div>
			</section>
			<section className="p-12 text-center">
				<h2 className="text-[68px] text-center">Contato</h2>
				<h3 className="text-xl font-medium mb-12">
					Copie o endereço de email e entre em contato 😉
				</h3>
				<div className="flex flex-row align-center justify-center mb-12">
					<div className="bg-black w-[48px] rounded-l flex items-center justify-center">
						<BsMailbox2 color="#4ade80" size="24px" />
					</div>
					<input
						type="text"
						value="lucassaymon.dev@gmail.com"
						readOnly
						className="w-96 p-4 pl-8 border-solid border-y-2 border-black outline-none font-medium"
					/>
					<button className="p-4 border-solid border-2 border-green-500 rounded-r text-green-500 font-medium hover:bg-green-500 hover:text-white transition-all">
						{'copiar'}
					</button>
				</div>
			</section>
		</main>
	)
}
