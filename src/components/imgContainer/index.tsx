import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Tag from '../Tag'
import { PropsWithChildren } from 'react'

type ImgContainerProps = {
	src: string | StaticImageData
	title: string
	direction: string
	description: string
}

function ImgContainer({
	src,
	title,
	direction,
	description
}: ImgContainerProps) {
	return (
		<div
			className={`
				bg-slate-900 p-12 
				md:flex ${
					direction === 'left' ? 'flex-row mr-32' : 'flex-row-reverse ml-32'
				} justify-between gap-12 shadow-md border border-slate-500 hover:bg-slate-800 transition-all`}
		>
			<Image src={src} alt="Projeto Food Explorer" width={740} />

			<div className="">
				<h3 className="text-4xl mt-12 mb-14 text-green-500 border-b border-slate-500 pb-4 mx-14">
					{title}
				</h3>

				<div className="">
					<p className="text-lg mb-16 text-slate-200">{description}</p>
					<div className="flex justify-center align-center flex-wrap gap-2">
						<Tag title="JavaScript" />
						<Tag title="ReactJS" />
						<Tag title="HTML5" />
						<Tag title="CSS3" />
						<Tag title="Styled-Components" />
						<Tag title="NodeJS" />
						<Tag title="SQLite" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImgContainer
