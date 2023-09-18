import { Children } from 'react'

export function TechSvg({ icon: Icon, title }: any) {
	return (
		<div className="rounded-md overflow-hidden">
			<div className="flex flex-col items-center justify-center gap-2">
				{Icon && <Icon size="72px" />}
				<h3 className="text-xl font-semibold">{title}</h3>
			</div>
		</div>
	)
}

export function TechImg({ src, title }: any) {
	return (
		<div className="rounded-md overflow-hidden">
			<div className="flex flex-col items-center justify-center gap-2">
				<img src={src} alt={`logo ${title}`} width="72px" />
				<h3 className="text-xl font-semibold">{title}</h3>
			</div>
		</div>
	)
}
