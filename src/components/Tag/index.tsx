type TagProps = {
	title: string
}

function Tag({ title }: TagProps) {
	return (
		<div
			className="w-fit-content dark:bg-slate-800 bg-slate-200 dark:text-slate-200 border-2 text-slate-800 dark:border-slate-400 border-slate-600 rounded-full px-2 py-1
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
