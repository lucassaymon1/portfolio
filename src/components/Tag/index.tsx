type TagProps = {
	title: string
}

function Tag({ title }: TagProps) {
	return (
		<div className="w-fit-content bg-gray-800 text-green-300 rounded-full p-2">
			<h3 className="font-medium font-lg">{title}</h3>
		</div>
	)
}
export default Tag
