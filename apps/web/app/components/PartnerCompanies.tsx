import Image from 'next/image'

interface Company {
  name: string
  url: string
  description: string
  imagePath: string
}

const companies: Company[] = [
  {
    name: 'Strider',
    url: 'https://app.onstrider.com/r/trampar_de_casa',
    description: 'Empresa brasileira com vagas internacionais 100% remotas.',
    imagePath: '/images/companies/strider.webp',
  },
  {
    name: 'Meteor',
    url: 'https://www.meteor.com/',
    description:
      'Plataforma OpenSource para construção de sistemas web, mobile e desktop com JavaScript ou TypeScript.',
    imagePath: '/images/companies/meteor.webp',
  },
]

const CompanySection = ({ name, imagePath, url, description }: Company) => (
  <a href={url} target="_blank" className="w-auto p-3 px-4">
    <Image
      src={imagePath}
      alt={`Logo da empresa ${name}`}
      className="cursor-pointer"
      title={description}
      width={128}
      height={28}
    />
  </a>
)

export const PartnerCompanies = () => {
  return (
    <section>
      <p className="mb-4 text-sm text-gray-500 font-semibold">
        EMPRESAS QUE APOIAM O TRABALHO REMOTO
      </p>
      <div className="flex flex-wrap items-center -m-3">
        {companies.map((company) => (
          <CompanySection key={company.name} {...company} />
        ))}
      </div>
    </section>
  )
}
