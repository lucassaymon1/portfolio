import foodexplorer from '../assets/images/foodexplorer.png'
import rocketnotes from '../assets/images/rocketnotes.png'
import WRlinkpage from '../assets/images/WRlinkpage.png'
import ydeapage from '../assets/images/ydeapage.png'
import { StaticImageData } from 'next/image'

interface projectsProps {
  title: string
  link: string
  imageSrc: string | StaticImageData
  description: string
  hasTemplate: boolean
  tags: string[]
}

export const projects:projectsProps[] = [
  {
    title: "Food Explorer",
    link: "https://lsfoodexplorer.netlify.app",
    imageSrc: foodexplorer,
    description: "Um site que oferece uma interface responsiva e a função de expor um cardápio de pratos de um restaurante de forma online, onde o usuário comum pode pesquisar e visualizar os pratos disponíveis, enquanto os administradores podem cadastrar novos pratos, assim como atualizar e excluir pratos já existentes.",
    hasTemplate: true,
    tags: ['ReactJS',
		'JavaScript',
		'NodeJS',
		'JWT',
		'SQLite',
		'Styled-Components',
		'chakra UI',
		'HTML5',
		'CSS3']
  },
  {
    title: "Rocket Notes",
    link: "https://lsrocketnotes.netlify.app",
    imageSrc: rocketnotes,
    description: "Uma aplicação web que permite que o usuário crie notas pessoais. O site conta com sistema de cadastro, login e autenticação de usuário, além de funcionalidades de busca por notas já criadas, como filtragem por barra de pesquisa ou por tags.",
    hasTemplate: true,
    tags: [
		'ReactJS',
		'JavaScript',
		'NodeJS',
		'SQLite',
		'HTML5',
		'CSS3',
		'Styled-Components'
	],
  },
  {
    title: "Site Institucional Ydea Solar",
    link: "https://ydeasolar.com.br",
    imageSrc: ydeapage,
    description: "Site institucional desenvolvido para a empresa Ydea Solar. O site conta com envio de emails por fomulário, páginas de serviços e projetos personalizados, animações, layout responsivo e Optimizações para SEO (Search Engine Optimization).",
    hasTemplate: false,
    tags: ['NextJS', 'Node.js', 'React', 'JavaScript', 'Chakra UI', 'SEO']
  },
]