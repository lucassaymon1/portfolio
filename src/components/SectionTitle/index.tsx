interface SectionTitleProps {
	title: string
	className?: string
}

export function SectionTitle({ title, className }: SectionTitleProps) {
	return (
		<h2
			className={`font-medium text-teal-800 p-12 pb-0 text-4xl text-center mb-24 lg:text-5xl
  lg:pb-12 lg:mb-6 dark:text-yellow-100 ${className}`}
		>
			{title}
		</h2>
	)
}
