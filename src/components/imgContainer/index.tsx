import Image from 'next/image'
import { StaticImageData } from 'next/image'

type ImgContainerProps = {
	src: string | StaticImageData
	title: string
}

function ImgContainer({ src, title }: ImgContainerProps) {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image src={src} alt="Projeto Food Explorer" width={640} />
			<a href=""></a>
			<h3 className="text-4xl mb-6">{title}</h3>
			<p className="text-lg">
				Projeto desenvolvido com ReactJS, NodeJS e Styled Components
			</p>
		</div>
	)
}

export default ImgContainer
