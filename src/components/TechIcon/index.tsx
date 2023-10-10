import { Children } from 'react'

export function TechIcon({ icon: Icon, title }: any) {
	return (
		<div
			className="p-3 pt-4 border-2 border-slate-500 shadow-md 
			rounded-tl-3xl rounded-br-3xl
			transition-all hover:-translate-y-2
			lg:p-4 lg:pt-6"
		>
			<div
				className="w-32 flex flex-col items-center justify-center gap-2
			lg:w-36"
			>
				{Icon && <Icon size="56px" color="#23c55e" />}
				<h3 className="text-md font-medium text-slate-300">{title}</h3>
			</div>
		</div>
	)
}
