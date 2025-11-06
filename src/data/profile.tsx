import Span from '@/components/Span'

export const profile = {
	name: 'Lucas Saymon',
	role: 'Desenvolvedor Full Stack',
	email: 'lucassaymon.dev@gmail.com',
	github: 'https://github.com/lucassaymon1',
	linkedin: 'https://www.linkedin.com/in/lucas-saymon/',
	resume:
		'https://docs.google.com/document/d/1L8O_Z_j5z7XrGCR29IQs05zFZ2MXZkhtgsnxV9evxGE/edit?usp=sharing',
	objective: (
		<>
			<Span>Desenvolvedor Full Stack</Span> a procura de{' '}
			<Span>oportunidades</Span> para aprimorar minhas habilidades como{' '}
			<Span>programador</Span>.
		</>
	),
	aboutMe: (
		<>
			Olá! Me chamo Lucas Saymon, <Span>Desenvolvedor Full Stack</Span>{' '}
			especialista em Node.js e React há +2 anos, atuando em ambiente
			corporativo, projetos pessoais e freelancing utilizando Next.js, Node.js,
			React e MySQL. <Span>Certificado pela AWS</Span> como{' '}
			<Span>Cloud Practitioner</Span> e apaixonado por transformar ideias em
			soluções digitais que entregam valor real. Durante minha trajetória
			desenvolvi{' '}
			<Span>E-commerces, plataformas institucionais e APIs RESTful</Span>,
			atuando de forma colaborativa e consultiva com profissionais de diferentes
			setores e me adaptando rapidamente às necessidades de cada projeto.
		</>
	)
}
