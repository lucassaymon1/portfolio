import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Tag from '../Tag'
import { PropsWithChildren } from 'react'

type ImgContainerProps = {
	src: string | StaticImageData
	title: string
	direction: string
	description: string
	link: string
}

function ImgContainer({
	src,
	title,
	direction,
	description,
	link
}: ImgContainerProps) {
	return (
		<a href={link} target="_blank">
			<div
				className={`
					bg-slate-900 py-12 px-4 mx-6 ${
						direction === 'left'
							? 'lg:flex-row 2xl:mr-32'
							: 'lg:flex-row-reverse 2xl:ml-32'
					} justify-between gap-12 shadow-md border border-slate-500 hover:bg-slate-800 transition-all
						lg:p-12 xl:flex
					`}
			>
				<div
					className=" flex items-center justify-center
					lg:w-[80vw] lg:min-w-[550px]"
				>
					<Image src={src} alt="Projeto Food Explorer" />
				</div>

				<div className="">
					<h3
						className="text-3xl mt-12 mb-10 text-green-500 border-b border-slate-500 pb-4 
					lg:mx-14 lg:text-4xl lg:mb-14"
					>
						{title}
					</h3>

					<div className="">
						<p
							className="text-md mb-12 text-slate-200 w-fit
							lg:text-lg lg:mb-16"
						>
							{description}
						</p>
						<div className="flex justify-center align-center flex-wrap gap-2">
							<Tag title="ReactJS" />
							<Tag title="JavaScript" />
							<Tag title="NodeJS" />
							<Tag title="SQLite" />
							<Tag title="HTML5" />
							<Tag title="CSS3" />
							<Tag title="Styled-Components" />
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}

export default ImgContainer
