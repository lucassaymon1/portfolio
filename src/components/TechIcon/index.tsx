import { Children } from 'react'

export function TechSvg({ icon: Icon, title }: any) {
	return (
		<div className="p-4 border-2 border-slate-400 shadow-md">
			<div className="w-24 flex flex-col items-center justify-center gap-2">
				{Icon && <Icon size="56px" />}
				<h3 className="text-lg font-medium text-green-500">{title}</h3>
			</div>
		</div>
	)
}

export function TechImg({ src, title }: any) {
	return (
		<div className="p-4 border-2 border-slate-400">
			<div className="flex flex-col items-center justify-center gap-2">
				<img src={src} alt={`logo ${title}`} width="72px" />
				<h3 className="text-lg font-medium text-green-500">{title}</h3>
			</div>
		</div>
	)
}
