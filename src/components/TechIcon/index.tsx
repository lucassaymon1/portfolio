import { Children } from 'react'

export function TechSvg({ icon: Icon, title }: any) {
	return (
		<div>
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="flex items-center justify-center rounded-md overflow-hidden">
					{Icon && <Icon size="72px" />}
				</div>
				<h3 className="text-xl font-semibold">{title}</h3>
			</div>
		</div>
	)
}

export function TechImg({ src, title }: any) {
	return (
		<div className="rounded-md overflow-hidden">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="h-[72px] flex justify-center items-center">
					<img src={src} alt={`logo ${title}`} width="72px" />
				</div>
				<h3 className="text-xl font-semibold">{title}</h3>
			</div>
		</div>
	)
}
