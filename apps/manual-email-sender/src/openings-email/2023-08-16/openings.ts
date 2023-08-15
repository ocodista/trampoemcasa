import { Opening } from 'shared/src/email/openings-email/Opening'
import { Openings } from '../Openings'

const localOpenings: Opening[] = [
  {
    company: 'Agendart',
    title: 'Desenvolvedor(a) Fullstack PHP - Júnior',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['PHP', 'JavaScript', 'jQuery', 'MySQL', 'SCRUM'],
    headerInfo: 'Júnior (até R$4,000)',
    url: 'https://programathor.com.br/jobs/29135-desenvolvedor-a-fullstack-php-junior',
  },
  {
    company: 'Klutch',
    title: 'Designer UX/UI Júnior',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['UI', 'UX', 'Protótipos', 'Design System', 'Figma'],
    headerInfo: 'Júnior',
    url: 'https://www.klutch.com.br/vagas/design-ui-ux-junior',
  },
  {
    company: 'Klutch',
    title: 'Desenvolvedor(a) React Native Júnior',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['ReactNative', 'Docker', 'Git', 'React.js', 'UI'],
    headerInfo: 'Júnior',
    url: 'https://www.klutch.com.br/vagas/desenvolvedor-react-native-junior',
  },
  {
    company: 'Demarco',
    title: 'Assistente de UI Júnior',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Design', 'Layout', 'Tipografia', 'Cores', 'Figma'],
    headerInfo: 'Júnior',
    url: 'https://app.demarco.com.br/rh-demarco-vaga-dmpeople-assistente-de-ui-designer-junior',
  },
  {
    company: 'YouX Group',
    title: 'Pessoa Desenvolvedora - Pleno',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Git', 'POO', 'Testes', 'SQL', 'Java'],
    headerInfo: 'Mínimo de 3 anos XP',
    url: 'https://youxgroup.vagasv2.solides.com.br/vacancies/274298#vacancyDescription',
  },
  {
    company: 'Voxy',
    title: 'Sales Development Representative',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: [
      'Outbound',
      'Prospecting',
      'Qualification',
      'Sales',
      'Interpersonal',
    ],
    headerInfo: 'Mínimo de 2 anos XP',
    url: 'https://jobs.lever.co/voxy/a6e6fb5b-48d5-49e9-942b-c5f7d01818fe',
  },
  {
    company: 'Toolsty',
    title: 'Desenvolvedor React Native',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['DART', 'Testes', 'Design', 'Git', 'Firebase'],
    headerInfo: 'Pleno',
    url: 'https://toolsty.com.br/vagas/',
  },
  {
    company: 'Demarco',
    title: 'Desenvolvedor Fullstack',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['VueJs', 'NodeJS', 'NestJs', 'MongoDB'],
    headerInfo: 'Pleno',
    url: 'https://app.demarco.com.br/rh-demarco-vaga-pagina-base-vaga-interna-e-externa-dmpeople-desenvolvedor-full-stack-vuejs-nodejs',
  },
  {
    company: 'THE CODE',
    title: 'Dev Flutter + Node Pleno',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Firebase', 'Flutter', 'MariaDB', 'MySQL', 'Node.js'],
    headerInfo: 'Pleno (até R$15,000)',
    url: 'https://programathor.com.br/jobs/29208-dev-flutter-node-pleno-100-remoto',
  },
  {
    company: 'Uds',
    title: 'Desenvolvedor Fullstack',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['.NET', 'C#', 'MVC', 'Node', 'React.js'],
    headerInfo: 'Pleno',
    url: 'https://vagas.uds.com.br/vacancies/details/576',
  },
  {
    company: 'Mastertax',
    title: 'Programador(a) Back-End Pleno (WEBSCRAPPER)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['AWS', 'Docker', 'Node.js', 'PHP', 'Python'],
    headerInfo: 'Pleno',
    url: 'https://programathor.com.br/jobs/29140-programador-a-back-end-pleno-webscrapper',
  },
  {
    company: 'Uds',
    title: 'Desenvolvedor Backend (Pleno)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['C#', '.NET Core', 'Entity Framework', 'API Rest', 'SQL'],
    headerInfo: 'Pleno',
    url: 'https://vagas.uds.com.br/vacancies/details/463',
  },
  {
    company: 'Netlinks',
    title: 'Desenvolvedor(a) Front-End',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['CSS', 'HTML', 'Javascript', 'React', 'APIs'],
    headerInfo: 'Pleno',
    url: 'https://jobs.recrutei.com.br/netlinks/vacancy/22896-desenvolvedora-front-end',
  },
  {
    company: 'Klutch',
    title: 'Desenvolvedor(a) React Full Stack',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['React Native', 'React.js', 'Javascript', 'APIs', 'CI/CD'],
    headerInfo: 'Pleno',
    url: 'https://www.klutch.com.br/vagas/desenvolvedor-react-full-stack-pleno',
  },
  {
    company: 'Croct',
    title: 'UX/UI Designer',
    location: 'Brasil',
    currency: 'R$',
    headerInfo: 'Sênior',
    language: 'Inglês',
    skills: ['Figma', 'UI', 'Collaboration', 'Communication', 'Design System'],
    url: 'https://croct.com/careers/jobs/ux-ui-designer/',
  },
  {
    company: 'Croct',
    title: 'Cloud Engineer',
    location: 'Brasil',
    currency: 'R$',
    language: 'Inglês',
    headerInfo: 'Pleno',
    skills: ['Terraform', 'Kubernetes', 'GCP', 'Rest APIs', 'Git'],
    url: 'https://croct.com/careers/jobs/cloud-engineer/',
  },
  {
    company: 'Alice',
    title: 'Engenheira de Software Sênior',
    location: 'Brasil',
    currency: 'R$',
    language: 'Português',
    skills: ['Backend', 'AWS', 'MicroServiços', 'Privacidade', 'Liderança'],
    headerInfo: 'Vaga Exclusiva para Mulheres',
    url: 'https://alice.inhire.app/vagas/1f79c32c-824f-4a31-82c2-674ec2538560/engenheira-de-software-senior-vaga-exclusiva-para-mulheres',
  },
  {
    company: 'Mollica IT',
    title: 'Pessoa Desenvolvedora Java Fullstack',
    location: 'Brasil',
    language: 'Inglês',
    currency: 'R$',
    skills: ['Java', 'SpringBoot', 'Angular', 'ReactJS', 'MySQL'],
    headerInfo: 'Sênior',
    url: 'https://jobs.quickin.io/mollicait/jobs/64c17aae1427de001524aeb5',
  },
  {
    company: 'Telavita',
    title: 'Desenvolvedor(a) Backend - Python',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['Python', 'Docker', 'Flask', 'MySQL', 'FastAPI'],
    headerInfo: 'Sênior',
    url: 'https://programathor.com.br/jobs/29145-desenvolvedor-a-backend-python#google_vignette',
  },
  {
    company: 'Uds',
    title: 'Desenvolvedor FullStack .NET Angular (Sênior)',
    location: 'Brasil',
    language: 'Português',
    currency: 'R$',
    skills: ['.NET', 'Angular', 'Ágil', 'API', 'Oracle'],
    headerInfo: 'Sênior',
    url: 'https://vagas.uds.com.br/vacancies/details/604',
  },
]

const globalOpenings: Opening[] = [
  {
    company: 'Meteor Software',
    title: 'DevOps Engineer',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: [
      'AWS',
      'Kubernetes',
      'Terraform',
      'Observability',
      'ShellScripting',
    ],
    headerInfo: 'Pleno (até $3,500)',
    url: 'https://public.app.shortcut.com/62/meteor-software/docs/33M0mvrlVcqjX85UO74Hdl/devops-engineer',
  },
  {
    title: 'Mid-Senior Full-stack Engineer - Spring Boot, React.js',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 4 anos de XP',
    skills: ['Java', 'Spring Boot', 'React.js'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=bWlkLXNlbmlvci1mdWxsLXN0YWNrLWVuZ2luZWVyLXNwcmluZy1ib290LXJlYWN0LmpzLWIxYWJmMTM3P3JlZmVycmFsPXRyYW1wYXJfZGVfY2FzYQ==',
  },
  {
    title: 'Mid-level Full-Stack Engineer - Angular.js',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP',
    skills: ['Angular.js', 'TypeScript', 'JavaScript'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=bWlkLXNlbmlvci1mdWxsLXN0YWNrLWVuZ2luZWVyLWFuZ3VsYXItcHl0aG9uLTg3NjYzOWU0P3JlZmVycmFsPXRyYW1wYXJfZGVfY2FzYQ==',
  },
  {
    title: 'Mid-level Scraping Engineer - Python',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 3 anos de XP',
    skills: ['Python', 'Playwright', 'HTML'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=bWlkLWxldmVsLXNjcmFwaW5nLWVuZ2luZWVyLXB5dGhvbi03NjhiOTdhYz9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
  },
  {
    title: 'Mid-Senior Full-stack Engineer - Node.js, Vue.js',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 4 anos de XP',
    skills: ['Node.js', 'Vue.js'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLWZ1bGwtc3RhY2stZW5naW5lZXItbm9kZS5qcy12dWUuanMtMDhiZWFiNzE/cmVmZXJyYWw9dHJhbXBhcl9kZV9jYXNh',
  },
  {
    title: 'Senior Back-end Engineer - Java, Spring',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 5 anos de XP',
    skills: ['Java', 'Spring', 'Comunicação'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=c2VuaW9yLWJhY2stZW5kLWVuZ2luZWVyLWphdmEtc3ByaW5nLWQxM2I0YzU1P3JlZmVycmFsPXRyYW1wYXJfZGVfY2FzYQ==',
  },
  {
    title: 'Product Designer',
    company: 'Strider',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 7 anos de XP',
    skills: ['UI', 'UX', 'Comunicação'],
    url: 'app.onstrider.com/r/trampar_de_casa?job=cHJvZHVjdC1kZXNpZ25lci1kN2VkMmJhOT9yZWZlcnJhbD10cmFtcGFyX2RlX2Nhc2E=',
  },
  {
    title: 'Machine Learning Intern',
    company: 'Ivy',
    location: 'Global',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Intern ($2,500 até $4,000)',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'JAX'],
    url: 'https://dynamitejobs.com/company/ivy01/remote-job/machine-learning-intern-3',
  },
  {
    title: 'Backend Software Engineer',
    company: 'SMG',
    location: 'Global',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Pleno (até $3,375)',
    skills: ['.Net', 'Angular', 'Backend', 'Blazor', 'TypeScript'],
    url: 'https://dynamitejobs.com/company/smg01/remote-job/backend-software-engineer',
  },
  {
    title: 'Front End Developer',
    company: 'Coalition Technologies',
    location: 'Global',
    headerInfo: 'Pleno ($2,600 até $6,066)',
    currency: 'U$',
    language: 'Inglês',
    url: 'https://app.testedrecruits.com/posting/11758',
    skills: ['HTML5', 'CSS3', 'jQuery', 'Responsive Design', 'Bootstrap'],
  },
  {
    title: 'React.js Developer',
    company: 'Rep AI',
    location: 'Global',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Pleno',
    skills: ['JavaScript', 'React.js', 'Redux', 'Webpack'],
    url: 'https://www.hellorep.ai/careers/react-js-developer',
  },
  {
    title: 'Software Engineer (Frontend, Backend, or Full stack)',
    company: 'Subscript',
    location: 'Global',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Pleno',
    skills: ['AWS', 'Express.js', 'Node.JS', 'Postgres', 'React.js'],
    url: 'https://apply.workable.com/subscript/j/E58599B066/',
  },
  {
    title: 'Senior Web Developer',
    company: 'Flatirons Development',
    location: 'LATAM',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 5 anos de XP',
    skills: ['Python', 'Django', 'React.js', 'Testes', 'Node'],
    url: 'https://jobs.lever.co/FlatironsDevelopment/7969166a-87d9-4da2-a75b-99807a250674',
  },
  {
    title: 'Sr. Frontend Engineer (Vue.js)',
    company: 'Flylance',
    location: 'Estados Unidos',
    language: 'Inglês',
    currency: 'U$',
    skills: ['JavaScript', 'Vue.js', 'JSON', 'REST'],
    headerInfo: 'Mínimo de 5 anos de XP',
    url: 'https://www.flylance.com/role?id=rec1agBSh1RRZSzfu',
  },
  {
    title: 'Sr. Backend Engineer-Python',
    company: 'Foxbox Digital',
    location: 'LATAM',
    language: 'Inglês',
    currency: 'U$',
    headerInfo: 'Mínimo de 7 anos de XP',
    skills: ['Python', 'JavaScript', 'jQuery', 'Bootstrap', 'PostgreSQL'],
    url: 'https://apply.workable.com/foxbox-digital/j/184075BAC6/',
  },
]

export const openings20230816: Openings = {
  localOpenings,
  globalOpenings,
}
