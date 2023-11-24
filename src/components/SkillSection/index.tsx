import { Children, useEffect, useRef, useState } from 'react'

// imports for tech icons
import {
	Css,
	Html,
	Javascript,
	Git,
	GitHub,
	Tailwindcss,
	Nextjs,
	Nodejs,
	Reactjs,
	Sqlite,
	Typescript,
	StyledComponents
} from '@/utils/techIcons'

interface TechIconProps {
	icon: React.ElementType
	title: string
	theme: string
}

const TechIcon = ({ icon: Icon, title, theme }: TechIconProps) => {
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
				{Icon && (
					<Icon size="56px" color={theme === 'dark' ? '#22c55e' : '#059669'} />
				)}
				<h3 className="text-md font-medium dark:text-slate-300 text-slate-800">
					{title}
				</h3>
			</div>
		</div>
	)
}

interface SkillSectionProps {
	theme: string
}

export function SkillSection({ theme }: SkillSectionProps) {
	const techIcons = [
		{ name: Javascript, title: 'JavaScript' },
		{ name: Typescript, title: 'TypeScript' },
		{ name: Nextjs, title: 'NextJS' },
		{ name: Reactjs, title: 'ReactJS' },
		{ name: Tailwindcss, title: 'Tailwind CSS' },
		{ name: StyledComponents, title: 'Styled-Components' },
		{ name: Html, title: 'HTML5' },
		{ name: Css, title: 'CSS3' },
		{ name: Nodejs, title: 'NodeJS' },
		{ name: Sqlite, title: 'SQLite' },
		{ name: Git, title: 'Git' },
		{ name: GitHub, title: 'GitHub' }
	]
	return (
		<div className="flex flex-row flex-wrap gap-6 justify-center align-center">
			{techIcons.map((icon) => (
				<TechIcon
					icon={icon.name}
					title={icon.title}
					theme={theme}
					key={icon.title}
				/>
			))}
		</div>
	)
}
