import { Opening } from 'shared/src/email/openings-email/Opening'
import { Openings } from '../Openings'

const localOpenings: Opening[] = [
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
const globalOpenings: Opening[] = []

export const openings20230816: Openings = {
  localOpenings,
  globalOpenings,
}