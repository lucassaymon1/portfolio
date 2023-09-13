import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className="flex justify-center flex-col">
			<section className="flex align-center justify-center bg-black h-screen w-screen p-12">
				<div className="flex justify-center align-center flex-col pt-10 text-[lightgray]">
					<h1 className="text-[128px] leading-[5rem] font-bold">
						DESENVOLVEDOR
					</h1>
					<div className=" flex flex-row gap-8 mb-[36px]">
						<h1 className="text-[128px] font-bold  ">FRONTEND</h1>
						<h1 className="text-[128px] text-emerald-500">{'</>'}</h1>
					</div>
					<p className="text-lg">
						Desenvolvedor Frontend Freelancer a procura de oportunidades de
						trabalho para aprimorar minhas habilidades como programador.
					</p>
				</div>
			</section>
			<section className="p-12">
				<h2 className="text-[68px] text-center">Projetos</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 text-center">
					<div className="flex flex-col">
						<img src="" alt="Projeto Food Explorer" />
						<a href=""></a>
						<p>Projeto desenvolvido com ReactJS, NodeJS e Styled Components</p>
					</div>
					<div className="flex flex-col">
						<img src="" alt="Projeto Rocket Notes" />
						<a href=""></a>
						<p>Projeto desenvolvido com ReactJS, NodeJS e Styled Components</p>
					</div>
				</div>
			</section>
			<section className="p-12">
				<h2 className="text-[68px] text-center">Contato</h2>
				<div className="flex flex-row align-center justify-center">
					<input type="text" value="lucassaymon.dev@gmail.com" />
					<button>{'copiar'}</button>
				</div>
			</section>
		</main>
	)
}
