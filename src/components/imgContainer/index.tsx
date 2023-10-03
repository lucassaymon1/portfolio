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
				bg-gray-200 p-12 rounded-3xl
				md:flex ${
					direction === 'left' ? 'flex-row' : 'flex-row-reverse'
				} justify-between gap-12`}
		>
			<Image src={src} alt="Projeto Food Explorer" width={740} />

			<div>
				<a href=""></a>
				<h3 className="text-4xl mb-6">{title}</h3>
				<p className="text-lg mb-12">{description}</p>
				<div className="flex justify-center align-center flex-wrap gap-2">
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
					<Tag title="tag" />
				</div>
			</div>
		</div>
	)
}

export default ImgContainer
