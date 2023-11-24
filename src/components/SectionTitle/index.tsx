interface SectionTitleProps {
	title: string
	custom: string
}

export function SectionTitle({ title, custom }: SectionTitleProps) {
	return (
		<h2
			className={`text-slate-800 dark:text-slate-300 p-12 pb-0 text-4xl text-center mb-24 lg:text-5xl
  lg:pb-12 lg:mb-6 ${custom}`}
		>
			{title}
		</h2>
	)
}
