import { Children } from 'react'

export function TechSvg({ icon: Icon, title }: any) {
	return (
		<div
			className="p-4 pt-6 border-2 border-slate-500 shadow-md 
			rounded-tl-3xl rounded-br-3xl
			transition-all hover:-translate-y-2"
		>
			<div className="w-36 flex flex-col items-center justify-center gap-2">
				{Icon && <Icon size="56px" color="#23c55e" />}
				<h3 className="text-md font-medium text-slate-300">{title}</h3>
			</div>
		</div>
	)
}
