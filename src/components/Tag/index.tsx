type TagProps = {
	title: string
}

function Tag({ title }: TagProps) {
	return (
		<div
			className="w-fit-content bg-slate-800 text-slate-200 border-2 border-slate-400 rounded-full px-2 py-1
			lg:p-2"
		>
			<h3
				className="font-medium text-sm
			lg:text-md"
			>
				{title}
			</h3>
		</div>
	)
}
export default Tag
