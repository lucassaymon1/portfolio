type TagProps = {
	title: string
}

function Tag({ title }: TagProps) {
	return (
		<div className="w-fit-content bg-slate-800 text-slate-200 border-2 border-slate-400 rounded-full p-2">
			<h3 className="font-medium font-lg">{title}</h3>
		</div>
	)
}
export default Tag
