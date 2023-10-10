import { Children } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

interface NavItemProps {
	title: string
	isLast: boolean
	toPage: boolean
	link: string
	children: any | undefined
}

function NavItem({ title, isLast, link, children, toPage }: NavItemProps) {
	return (
		<li
			className={`px-4 ${!isLast && 'border-r-2'}
			lg:px-6`}
		>
			<a
				className="text-lg flex gap-2 items-center hover:text-green-500 transition-all
					lg:gap-3 lg:text-xl"
				target={toPage ? '' : '_blank'}
				href={link}
			>
				{children}
				{title}
			</a>
		</li>
	)
}

export default NavItem
