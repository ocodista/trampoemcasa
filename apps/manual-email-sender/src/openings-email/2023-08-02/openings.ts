import { Opening } from 'shared/src/email/openings-email/Opening'
import { Openings } from '../Openings'

const localOpenings: Opening[] = [
  {
    company: 'RD Station',
    title: 'Desenvolvedora Junior (Web)',
    location: 'Brasil',
    language: 'Inglês',
    skills: ['Suporte', 'SQL', 'Python', ' Web', 'Githuub'],
    headerInfo: 'Vaga Exclusiva Para Mulheres',
    currency: 'R$',
    url: 'https://boards.greenhouse.io/rdstation/jobs/6859170002',
  },
  {
    company: 'iFood',
    title: 'Product Manager Pleno',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Estratégia', 'Produto', 'Comunicação', 'Liderança', 'Análise'],
    headerInfo: 'Vaga Exclusiva Para Mulheres Negras',
    url: 'https://boards.greenhouse.io/ifoodcarreiras/jobs/6866748002',
  },
  {
    title: 'Desenvolvedor(a) Pleno (Node.js React)',
    company: 'Impulso',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    headerInfo: 'Pleno (até R$12,000)',
    url: 'https://impulso.team/pt/profissionais/oportunidade/1916',
    skills: ['Node.js', 'React', 'Typescript', 'CleanCode', 'SQL'],
  },
  {
    company: 'Sesatech',
    title: 'Desenvolvedor(a) Pleno (Java)',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['SpringBoot', 'Hibernate', 'Vue', 'Azure', 'Docker'],
    headerInfo: 'Pleno (até R$7,000)',
    url: 'https://programathor.com.br/jobs/29103-desenvolvedor-a-java-pleno-ingles-fluente',
  },
  {
    title: 'Desenvolvedor(a) Mobile Pleno',
    company: 'Expert System',
    location: 'Brasil',
    language: 'Português',
    url: 'https://programathor.com.br/jobs/29120-desenvolvedor-a-mobile-pleno',
    headerInfo: 'Pleno (até R$6,000)',
    skills: ['Flutter', 'C#', 'Firebase', 'Mobile', 'Angular'],
    currency: 'R$',
  },
  {
    title: 'Desenvolvedor(a) Pleno (Node.js)',
    company: 'BairesDev',
    location: 'Brasil',
    language: 'Português',
    url: 'https://programathor.com.br/jobs/29114-arquiteto-a-node-pleno-ref-0111p-trabalhe-de-casa',
    headerInfo: 'Pleno',
    skills: ['Node.js', 'SQL', 'NoSQL', 'Cloud'],
    currency: 'R$',
  },
  {
    title: 'Desenvolvedor(a) Pleno (Python)',
    company: 'Oowlish',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    headerInfo: 'Pleno',
    url: 'https://jobs.lever.co/oowlish/6f70ade7-40fa-4060-9f63-5f1eb19920f4',
    skills: ['Python', 'Django', 'SQL', 'NoSQL'],
  },
  {
    company: 'Ubots',
    title: 'Desenvolvedor(a) Fullstack (Java e Javascript)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['CSS', 'Git', 'Java', 'JavaScript', 'SQL'],
    headerInfo: 'Pleno',
    url: 'https://programathor.com.br/jobs/29110-desenvolvedor-a-full-stack-pl',
  },
  {
    title: 'Desenvolvedor(a) Fullstack (React)',
    company: 'Avenue Code',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['JavaScript', 'Node.js', 'React', 'GraphQL', 'Git'],
    headerInfo: 'Pleno',
    url: 'https://www.linkedin.com/jobs/view/3678245965/',
  },
  {
    title: 'Desenvolvedor(a) Pleno (Java)',
    company: 'IBM',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Cloud', 'Java', 'Angular', 'Testes', 'Docker'],
    headerInfo: 'Pleno',
    url: 'https://careers.ibm.com/job/18682528/especialista-em-java-remoto-remote/?utm_source=remotar',
  },
  {
    title: 'Desenvolvedor(a) DevOps',
    company: 'IBM',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: [
      'Infraestrutura',
      'Eficiente',
      'Flexível',
      'Escalável',
      'Colaboração',
    ],
    headerInfo: 'Pleno',
    url: 'https://careers.ibm.com/job/18816514/desenvolvedor-a-devops-remoto-remote/',
  },
  {
    title: 'Desenvolvedor(a) Backend (Python & Kotlin)',
    company: 'Ília digital',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Kotlin', 'Python', 'Postgres', 'MongoDb', 'Testes'],
    headerInfo: 'Pleno',
    url: 'https://boards.greenhouse.io/ilia/jobs/4933263004?t=95e2a2e24us',
  },
  {
    title: 'Desenvolvedor(a) Pleno (.NET)',
    company: 'IBM',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['.Net', 'Oracle', 'EntityFramework', 'Jira'],
    headerInfo: 'Pleno',
    url: 'https://careers.ibm.com/job/18770503/desenvolvedor-a-microsoft-net-remoto-remote',
  },
  {
    title: 'Desenvolvedor(a) Sênior (.NET e Angular)',
    company: 'Impulso',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    headerInfo: 'Sênior (até R$16,000)',
    url: 'https://impulso.team/pt/profissionais/oportunidade/1913',
    skills: ['C#', 'Angular', 'Typescript', 'SQLServer', 'RabbitMQ'],
  },
  {
    title: 'Desenvolvedor(a) Sênior (React)',
    company: 'Dbccompany',
    location: 'Brasil',
    language: 'Português',
    url: 'https://vagas.dbccompany.com.br/vagas/302062',
    headerInfo: 'Sênior',
    skills: [
      'React.js',
      'Redux, MobX ou Recoil',
      'Testes',
      'JavaScript',
      'TypeScript',
    ],
    currency: 'R$',
  },
  {
    title: 'Desenvolvedor(a) Sênior Backend (Java e .Net)',
    company: 'Oowlish',
    location: 'Brasil',
    language: 'Inglês',
    url: 'https://jobs.lever.co/oowlish/040a267d-b0f6-46db-a36e-720ae21945b8',
    headerInfo: 'Sênior',
    skills: ['Java', '.Net'],
    currency: 'R$',
  },
  {
    title: 'Desenvolvedor(a) Sênior (Java)',
    company: 'Ciandt',
    location: 'Brasil',
    language: 'Inglês',
    url: 'https://ciandt.com/br/pt-br/carreiras/oportunidades/candidate-se?opportunity=eba2aaa2-dd03-4c88-bce8-9a71a46b0b1d',
    headerInfo: 'Vaga exclusiva PcD',
    skills: ['Java', 'SpringBoot', 'Junit', 'Mockito'],
    currency: 'R$',
  },
  {
    company: 'Dbccompany',
    title: 'Desenvolvedor(a) Sênior (PHP)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['PHP', 'MicroServices', 'Devops', 'Docker', 'Scrum'],
    headerInfo: 'Sênior',
    url: 'https://vagas.dbccompany.com.br/vagas/302054',
  },
  {
    title: 'Desenvolvedor(a) Sênior (Mobile Android)',
    company: 'IBM',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Java', 'IDE', 'JDTl', 'Superior', 'Inglês'],
    headerInfo: 'Sênior',
    url: 'https://careers.ibm.com/job/18823193/desenvolvedor-a-mobile-android-remoto-remote/',
  },
  {
    title: 'Desenvolvedor(a) Mobile (Flutter)',
    company: 'Ília digital',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Flutter', 'Webservices', 'APIs'],
    headerInfo: 'Sênior',
    url: 'https://boards.greenhouse.io/ilia/jobs/4942342004?t=95e2a2e24us',
  },
]

const globalOpenings: Opening[] = [
  {
    title: 'Desenvolvedor(a) Fullstack Pleno (Angular.js e Python)',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=bWlkLXNlbmlvci1mdWxsLXN0YWNrLWVuZ2luZWVyLWFuZ3VsYXItcHl0aG9uLTg3NjYzOWU0P3JlZmVycmFsPXRyYW1wYXJfZGVfY2FzYQ==',
    skills: ['Angular.js', 'Python', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Product Designer',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=cHJvZHVjdC1kZXNpZ25lci1kN2VkMmJhOT9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
    skills: ['UI', 'UX'],
  },
  {
    title: 'Mid-level Scraping Engineer (Python)',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=bWlkLWxldmVsLXNjcmFwaW5nLWVuZ2luZWVyLXB5dGhvbi03NjhiOTdhYz9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
    skills: ['Python', 'Playwright', 'HTML'],
  },
  {
    title: 'Desenvolvedor(a) Mobile Sênior (Node.js e React Native)',
    company: 'Strider',
    location: 'Canadá',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 4 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLW1vYmlsZS1lbmdpbmVlci1jOWFlMzc3MT9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
    skills: ['React Native', 'Node.js', 'Firebase', 'MongoDB'],
  },
  {
    title: 'Desenvolvedor(a) Fullstack Sênior (React.js)',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 4 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLWZ1bGwtc3RhY2stZW5naW5lZXItcmVhY3QuanMtYTQwMzZkNjk/cmVmZXJyYWw9dHJhbXBhcl9kZV9jYXNh',
    skills: ['React.js', 'Python', 'Django', 'Pandas', 'SQL'],
  },
  {
    title: 'Desenvolvedor(a) Backend Sênior (Node.js e TypeScript)',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 4 anos de XP',
    url: 'app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLWJhY2stZW5kLWVuZ2luZWVyLW5vZGVqcy10eXBlc2NyaXB0LWZjNzc5MmRiP3JlZmVycmFsPXRyYW1wYXJfZGVfY2FzYQ==',
    skills: ['Node.js', 'TypeScript', 'Redis', 'Cloud', 'Azure'],
  },
  {
    title: 'Lead Front-end Engineer (React.js)',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 6 anos de XP',
    url: 'https://app.onstrider.com/r/trampar_de_casa?job=bGVhZC1mcm9udC1lbmQtZW5naW5lZXItcmVhY3QuanMtMjMzMDJlNGM/cmVmZXJyYWw9dHJhbXBhcl9kZV9jYXNh',
    skills: ['React.js', 'softSkills', 'startupExperience'],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 6 anos de XP',
    url: 'app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLWRldm9wcy1lbmdpbmVlci1iODZkOWZmNj9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
    skills: ['DevOps', 'MLOps', 'AWS', 'CI/CD', 'DataScience'],
  },
  {
    title: 'Desenvolvedor(a) Backend (SDK/Plugin)',
    company: 'SeQura',
    location: 'Espanha',
    language: 'Inglês',
    currency: 'EUR',
    headerInfo: 'Pleno',
    url: 'https://dynamitejobs.com/company/sequra/remote-job/backend-developer-sdk-plugin',
    skills: ['Backend', 'JavaScript', 'PHP'],
  },
  {
    title: 'Ruby on Rails Developer',
    company: 'Onecontact',
    location: 'Macedônia',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Pleno',
    url: 'https://onecontact.com.mk/job/detail/remote-ruby-on-rails-developer',
    skills: ['RubyOnRails', 'Javascript', 'Vue.js', 'MySQL', 'PostgreSQL'],
  },
  {
    company: 'RevenueCat',
    title: 'Desenvolvedor(a) Backend Sênior',
    location: 'LATAM',
    language: 'Inglês',
    currency: 'U$',
    skills: ['Backend', 'SQL', 'JavaScript', 'API', 'Mobile'],
    headerInfo: 'Mínimo de 5 anos de XP ($16,666)',
    url: 'https://remotive.com/remote-jobs/software-dev/senior-backend-engineer-1743806',
  },
  {
    title: 'Desenvolvedor(a) Fullstack Sênior (React.js e Node.js)',
    company: 'Mood',
    location: 'Europa',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP ($9,166 a $10,833)',
    url: 'https://dynamitejobs.com/company/mood1/remote-job/senior-full-stack-engineer',
    skills: ['Fullstack', 'Node.JS', 'React.js', 'TypeScript'],
  },
  {
    title: 'Desenvolvedor(a) Sênior (Next.js)',
    company: 'Proxify',
    location: 'Mundial',
    language: 'Inglês',
    url: 'https://remotive.com/remote-jobs/software-dev/senior-next-js-developer-1606658',
    headerInfo: 'Mínimo de 5 anos de XP ($3,333 a $6,000)',
    skills: ['Next.js', 'Redux', 'Mobx', 'OOP', 'Jest'],
    currency: 'U$',
  },
  {
    title: 'Fullstack Lead Software Engineer',
    company: 'Onecontact',
    location: 'Macedônia',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Sênior',
    url: 'https://onecontact.com.mk/job/detail/remote-full-stack-lead-software-engineer',
    skills: ['Laravel', 'MySQL', 'TDD', 'Javascript', 'CI/CD'],
  },
  {
    company: 'SeQura',
    title: 'Desenvolvedor Sênior Backend (Kotlin,Elixir)',
    location: 'Espanha',
    language: 'Inglês',
    currency: 'EUR',
    skills: ['Elixir', 'JavaScript', 'Kotlin', 'Oop', 'Ruby on Rails'],
    headerInfo: 'Sênior',
    url: 'https://dynamitejobs.com/company/sequra/remote-job/senior-backend-developer',
  },
]
export const openings20230802: Openings = {
  localOpenings,
  globalOpenings,
}
