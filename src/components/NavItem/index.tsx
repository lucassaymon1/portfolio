import { Children } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

interface NavPageItemProps {
	title: string
	isLast: boolean
	toPage: boolean
	link: string
}

interface NavContactItemProps extends NavPageItemProps {
	children: any | undefined
}

export function NavContactItem({
	title,
	isLast,
	link,
	children,
	toPage
}: NavContactItemProps) {
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

export function NavPageItem({ title, isLast, link, toPage }: NavPageItemProps) {
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
				{title}
			</a>
		</li>
	)
}
