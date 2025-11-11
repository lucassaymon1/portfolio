import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { NavPageItem } from '../NavItem'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger
} from '../ui/menubar'
import { useState } from 'react'

export function NavMenu() {
	const [menuActive, setMenuActive] = useState(false)
	const navItems = [
		{
			title: 'Habilidades',
			link: '#skills'
		},
		{
			title: 'Projetos',
			link: '#projects'
		},
		{
			title: 'Sobre mim',
			link: '#about'
		},
		{
			title: 'Contato',
			link: '#contact'
		}
	]

	function handleToggleMenu() {
		menuActive ? setMenuActive(false) : setMenuActive(true)
	}

	return (
		<>
			<Menubar
				onValueChange={handleToggleMenu}
				className="flex justify-right absolute top-0 right-0 mt-10 mr-8
								lg:right-0 lg:mr-[3vw] lg:mt-[5vh] md:hidden"
			>
				<MenubarMenu>
					<MenubarTrigger className="dark:bg-slate-900/60">
						{!menuActive ? (
							<RxHamburgerMenu size={26} />
						) : (
							<RxCross2 size={26} />
						)}
					</MenubarTrigger>
					<MenubarContent className="dark:bg-slate-950/40 border dark:border-slate-900 mr-3">
						{navItems.map((navItem, id) => (
							<div key={id}>
								<MenubarItem>
									<a
										href={navItem.link}
										className="font-semibold text-green-light dark:text-green-dark"
									>
										{navItem.title}
									</a>
								</MenubarItem>
								{id !== navItems.length - 1 && (
									<MenubarSeparator className="bg-slate-300 dark:bg-slate-600" />
								)}
							</div>
						))}
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
			<nav
				className="hidden md:flex justify-center absolute top-0 mt-12
								lg:right-0 lg:mr-[3vw] lg:mt-[5vh]"
			>
				<ul className="flex flex-row ">
					{navItems.map((navItem, id) => (
						<NavPageItem
							key={id}
							title={navItem.title}
							link={navItem.link}
							toPage
							isLast={id === navItems.length - 1}
						/>
					))}
				</ul>
			</nav>
		</>
	)
}
