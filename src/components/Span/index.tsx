interface SpanProps {
	children: string
}

export default function Span({ children }: SpanProps) {
	return (
		<span className="text-green-light font-medium dark:text-green-dark ">
			{children}
		</span>
	)
}
